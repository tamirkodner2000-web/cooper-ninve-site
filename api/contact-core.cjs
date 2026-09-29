const RECIPIENT = 'info@cooper-ninve.com'
const MAX_BODY_BYTES = 24 * 1024
const MIN_SUBMIT_MS = 2500
const MAX_FIELDS = 30
const MAX_FIELD_KEY = 80
const MAX_FIELD_VALUE = 2000
const HONEYPOT = 'hp_field'

const FORM_SUBJECTS = {
  form_submit_general: 'Website Lead - Contact',
  form_submit_homepage_lead: 'Website Lead - Partner Inquiry',
  form_submit_agent: 'Website Lead - Insurance Agent',
  form_submit_quote_request: 'Website Lead - Quote Request',
  lead_lp_professional_liability: 'Website Lead - Professional Liability',
  lead_lp_cyber: 'Website Lead - Cyber Insurance',
}

const NAME_KEYS = ['שם מלא', 'שם הסוכן', 'full name', 'name']
const PHONE_KEYS = ['טלפון', 'phone']
const EMAIL_KEYS = ['אימייל', 'email', 'e-mail', 'מייל']
const COMPANY_KEYS = [
  'חברה / סוכנות',
  'שם העסק / הסוכנות',
  'שם הסוכנות',
  'company / market',
  'company',
  'business',
]

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const formIdRe = /^[a-z][a-z0-9_]{2,80}$/
const pathRe = /^\/[a-z0-9/_-]{0,180}$/i

const recentHashes = new Map()
const ipHits = new Map()

const text = (value) => String(value == null ? '' : value).trim()

const normalizeKey = (key) => text(key).toLowerCase().replace(/\s+/g, ' ')

const pick = (fields, aliases) => {
  for (const [key, value] of Object.entries(fields)) {
    if (aliases.includes(normalizeKey(key))) return text(value)
  }
  return ''
}

const digits = (value) => text(value).replace(/[^\d+]/g, '')

const isAllowedFormId = (formId) => {
  if (!formIdRe.test(formId)) return false
  if (FORM_SUBJECTS[formId]) return true
  return formId.startsWith('form_submit_') || formId.startsWith('lead_lp_')
}

const subjectFor = (formId, path) => {
  if (FORM_SUBJECTS[formId]) return FORM_SUBJECTS[formId]
  if (formId.startsWith('lead_lp_')) return `Website Lead - ${formId.replace(/^lead_lp_/, '').replace(/_/g, ' ')}`
  if (path.includes('contact')) return 'Website Lead - Contact'
  return 'Website Lead - Website Form'
}

const prune = (store, maxAge) => {
  const now = Date.now()
  for (const [key, at] of store) {
    if (now - at > maxAge) store.delete(key)
  }
}

const rateLimited = (ip) => {
  prune(ipHits, 10 * 60 * 1000)
  const key = ip || 'unknown'
  const hits = (ipHits.get(key) || []).filter((at) => Date.now() - at < 10 * 60 * 1000)
  if (hits.length >= 8) return true
  hits.push(Date.now())
  ipHits.set(key, hits)
  return false
}

const duplicate = (hash) => {
  prune(recentHashes, 2 * 60 * 1000)
  if (recentHashes.has(hash)) return true
  recentHashes.set(hash, Date.now())
  return false
}

const sanitizeFields = (raw) => {
  const fields = {}
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return fields
  const entries = Object.entries(raw).slice(0, MAX_FIELDS)
  for (const [key, value] of entries) {
    const cleanKey = text(key).slice(0, MAX_FIELD_KEY)
    if (!cleanKey) continue
    const lower = normalizeKey(cleanKey)
    if (['to', 'recipient', 'from', 'subject', 'bcc', 'cc', HONEYPOT].includes(lower)) continue
    fields[cleanKey] = text(value).slice(0, MAX_FIELD_VALUE)
  }
  return fields
}

const sanitizeUtm = (raw) => {
  const utm = {}
  if (!raw || typeof raw !== 'object') return utm
  for (const key of ['source', 'medium', 'campaign', 'content', 'term']) {
    const value = text(raw[key]).slice(0, 120)
    if (value) utm[key] = value
  }
  return utm
}

function validateContact(input, { ip, bodyBytes }) {
  if (bodyBytes > MAX_BODY_BYTES) return { ok: false, status: 413, error: 'invalid' }

  const formId = text(input.formId)
  const path = text(input.path) || '/'
  const language = input.language === 'english' || input.language === 'en' ? 'english' : 'hebrew'
  const startedAt = Number(input.startedAt)
  const honeypot = text(input[HONEYPOT] || input.hp)

  if (honeypot) return { ok: true, ignored: true }
  if (rateLimited(ip)) return { ok: false, status: 429, error: 'invalid' }
  if (!isAllowedFormId(formId)) return { ok: false, status: 400, error: 'invalid' }
  if (!pathRe.test(path)) return { ok: false, status: 400, error: 'invalid' }
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_SUBMIT_MS) {
    return { ok: false, status: 400, error: 'invalid' }
  }
  if (Date.now() - startedAt > 1000 * 60 * 60 * 6) return { ok: false, status: 400, error: 'invalid' }

  const fields = sanitizeFields(input.fields)
  const name =
    pick(fields, NAME_KEYS) ||
    Object.entries(fields).reduce((found, [key, value]) => {
      if (found) return found
      const n = normalizeKey(key)
      if (!n.includes('שם') && !n.includes('name')) return ''
      if (n.includes('עסק') || n.includes('חברה') || (n.includes('סוכנות') && n !== 'שם הסוכן')) return ''
      return value
    }, '')
  const phone = pick(fields, PHONE_KEYS)
  const email = pick(fields, EMAIL_KEYS).toLowerCase()
  const company = pick(fields, COMPANY_KEYS)
  const message = text(fields.message || fields.Message || fields['הודעה'])
  const consent =
    input.consent === true ||
    input.consent === 'true' ||
    text(fields.consent).toLowerCase() === 'on' ||
    text(fields.consent).toLowerCase() === 'true'

  if (!name) return { ok: false, status: 400, error: 'invalid' }
  if (!email && !phone) return { ok: false, status: 400, error: 'invalid' }
  if (email && !emailRe.test(email)) return { ok: false, status: 400, error: 'invalid' }
  if (phone && digits(phone).replace(/\+/g, '').length < 8) return { ok: false, status: 400, error: 'invalid' }
  if (Object.prototype.hasOwnProperty.call(fields, 'consent') && !consent) {
    return { ok: false, status: 400, error: 'invalid' }
  }
  if (input.consent === false) return { ok: false, status: 400, error: 'invalid' }

  const hash = `${formId}|${email || phone}|${path}`
  if (duplicate(hash)) return { ok: false, status: 409, error: 'invalid' }

  const routingKey = text(input.routingKey).slice(0, 80)
  const utm = sanitizeUtm(input.utm)
  const timestamp = new Date().toISOString()
  const subject = subjectFor(formId, path)

  const extra = Object.entries(fields)
    .filter(([key]) => {
      const n = normalizeKey(key)
      return ![...NAME_KEYS, ...PHONE_KEYS, ...EMAIL_KEYS, ...COMPANY_KEYS, 'message', 'הודעה', 'consent'].includes(n)
    })
    .map(([key, value]) => `${key}: ${value}`)

  const lines = [
    `Source page: ${path}`,
    `Form: ${formId}`,
    `Language: ${language}`,
    `Submitted: ${timestamp}`,
    routingKey ? `Landing context / routing key: ${routingKey}` : '',
    '',
    `Name: ${name}`,
    `Phone: ${phone || '-'}`,
    `Email: ${email || '-'}`,
    `Company / business: ${company || '-'}`,
    `Message: ${message || '-'}`,
    extra.length ? `Other fields:\n${extra.join('\n')}` : '',
    `Consent: ${consent ? 'yes' : 'not provided'}`,
    Object.keys(utm).length
      ? `UTM: ${Object.entries(utm)
          .map(([key, value]) => `${key}=${value}`)
          .join(' ')}`
      : 'UTM: -',
  ].filter(Boolean)

  return {
    ok: true,
    email: {
      to: RECIPIENT,
      subject,
      text: lines.join('\n'),
      replyTo: email || undefined,
    },
    meta: { formId, path, language, name, phone, email, company },
  }
}

async function sendResend(payload) {
  const apiKey = process.env.RESEND_API_KEY
  const from = text(process.env.CONTACT_FROM_EMAIL)
  if (!apiKey || !from) {
    const error = new Error('unconfigured')
    error.status = 503
    throw error
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [RECIPIENT],
      subject: payload.subject,
      text: payload.text,
      reply_to: payload.replyTo || undefined,
    }),
  })

  if (!response.ok) {
    const error = new Error('provider')
    error.status = 502
    throw error
  }
}

module.exports = {
  HONEYPOT,
  MAX_BODY_BYTES,
  RECIPIENT,
  validateContact,
  sendResend,
}

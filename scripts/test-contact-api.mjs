import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { validateContact } = require('../api/contact-core.cjs')

const failures = []
const check = (name, ok, detail = '') => {
  if (ok) console.log(`PASS ${name}`)
  else {
    failures.push(name)
    console.log(`FAIL ${name}${detail ? ` — ${detail}` : ''}`)
  }
}

const base = {
  formId: 'form_submit_general',
  path: '/contact-us',
  language: 'hebrew',
  startedAt: Date.now() - 4000,
  fields: {
    'שם מלא': 'TEST Tamir Kodner',
    טלפון: '0501234567',
    אימייל: 'test.lead@example.com',
    'חברה / סוכנות': 'TEST agency',
    message: 'TEST website form submission — ignore',
  },
}

const valid = validateContact(base, { ip: '1.1.1.1', bodyBytes: 200 })
check('valid contact builds email', valid.ok === true)
check('recipient fixed', valid.email?.to === 'info@cooper-ninve.com')
check('subject contact', valid.email?.subject === 'Website Lead - Contact')
check('reply-to customer', valid.email?.replyTo === 'test.lead@example.com')
check('body has TEST marker', String(valid.email?.text).includes('TEST Tamir Kodner'))

const honey = validateContact({ ...base, hp_field: 'bot' }, { ip: '1.1.1.2', bodyBytes: 200 })
check('honeypot ignored', honey.ok === true && honey.ignored === true && !honey.email)

const fast = validateContact({ ...base, startedAt: Date.now() }, { ip: '1.1.1.3', bodyBytes: 200 })
check('too fast rejected', fast.ok === false)

const badEmail = validateContact(
  { ...base, fields: { ...base.fields, אימייל: 'not-an-email' } },
  { ip: '1.1.1.4', bodyBytes: 200 },
)
check('bad email rejected', badEmail.ok === false)

const relay = validateContact(
  {
    ...base,
    fields: { ...base.fields, אימייל: 'relay.test@example.com', to: 'attacker@example.com' },
  },
  { ip: '1.1.1.5', bodyBytes: 200 },
)
check('to field ignored', relay.ok === true && relay.email?.to === 'info@cooper-ninve.com' && !String(relay.email?.text).includes('attacker@example.com'))

const lp = validateContact(
  {
    ...base,
    formId: 'lead_lp_professional_liability',
    path: '/lp/professional-liability',
    routingKey: 'professional-liability',
    fields: { ...base.fields, אימייל: 'lp.test@example.com' },
  },
  { ip: '1.1.1.6', bodyBytes: 200 },
)
check('lp subject', lp.ok === true && lp.email.subject === 'Website Lead - Professional Liability')

const agent = validateContact(
  {
    ...base,
    formId: 'form_submit_agent',
    path: '/lp/insurance-agents',
    fields: { ...base.fields, אימייל: 'agent.test@example.com' },
  },
  { ip: '1.1.1.7', bodyBytes: 200 },
)
check('agent subject', agent.ok === true && agent.email.subject === 'Website Lead - Insurance Agent')

if (failures.length) {
  console.error(`\n${failures.length} failed`)
  process.exit(1)
}
console.log('\ncontact validation checks passed')

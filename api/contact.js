const { MAX_BODY_BYTES, sendResend, validateContact } = require('./contact-core.cjs')

const json = (res, status, body) => {
  res.statusCode = status
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(body))
}

const clientIp = (req) => {
  const forwarded = String(req.headers['x-forwarded-for'] || '')
    .split(',')[0]
    .trim()
  return forwarded || req.socket?.remoteAddress || ''
}

const readJsonBody = async (req) => {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
    const encoded = JSON.stringify(req.body)
    return { parsed: req.body, bytes: Buffer.byteLength(encoded) }
  }

  const chunks = []
  let size = 0
  for await (const chunk of req) {
    size += chunk.length
    if (size > MAX_BODY_BYTES) return { parsed: null, bytes: size }
    chunks.push(chunk)
  }
  const raw = Buffer.concat(chunks).toString('utf8')
  if (!raw) return { parsed: {}, bytes: 0 }
  return { parsed: JSON.parse(raw), bytes: Buffer.byteLength(raw) }
}

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }
  if (req.method !== 'POST') {
    json(res, 405, { ok: false })
    return
  }

  let parsed
  let bytes
  try {
    const body = await readJsonBody(req)
    parsed = body.parsed
    bytes = body.bytes
  } catch {
    json(res, 400, { ok: false })
    return
  }

  const result = validateContact(parsed || {}, { ip: clientIp(req), bodyBytes: bytes })
  if (result.ignored) {
    json(res, 200, { ok: true })
    return
  }
  if (!result.ok) {
    json(res, result.status || 400, { ok: false })
    return
  }

  try {
    await sendResend(result.email)
    json(res, 200, { ok: true })
  } catch (error) {
    json(res, error.status === 503 ? 503 : 502, { ok: false })
  }
}

/*
 * Local development server with SPA fallback.
 * Serves real files first; unknown paths get index.html (same idea as Vercel).
 * Does not affect production. Physical files such as preview.html still win.
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)))
const port = Number(process.env.PORT || 5173)
const host = process.env.HOST || "0.0.0.0"
const indexFile = path.join(root, "index.html")

const types = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const send = (res, file, status = 200) => {
  res.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream",
  })
  fs.createReadStream(file).pipe(res)
}

const sendIndex = (res, requestPath) => {
  const html = fs.readFileSync(indexFile, "utf8")
  const injectPath = requestPath && requestPath !== "/" && requestPath !== "/index.html" ? requestPath : ""
  const body = injectPath
    ? html.replace("<head>", `<head>\n    <script>window.__SPA_REQUEST_PATH=${JSON.stringify(injectPath)};</script>`)
    : html
  res.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": "text/html; charset=utf-8",
  })
  res.end(body)
}

const resolveFile = (urlPath) => {
  const decoded = decodeURIComponent(urlPath.split('?')[0])
  const relative = path.normalize(decoded).replace(/^[/\\]+/, '')
  const candidate = path.resolve(root, relative === '.' ? '' : relative)
  if (candidate !== root && !candidate.startsWith(root + path.sep)) return null
  return candidate
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405)
    res.end()
    return
  }

  const target = resolveFile(req.url || '/')
  if (!target) {
    res.writeHead(403)
    res.end()
    return
  }

  fs.stat(target, (error, stats) => {
    if (!error && stats.isFile()) {
      send(res, target)
      return
    }

    if (!error && stats.isDirectory()) {
      const nestedIndex = path.join(target, "index.html")
      if (fs.existsSync(nestedIndex) && fs.statSync(nestedIndex).isFile()) {
        if (path.resolve(nestedIndex) === indexFile) {
          sendIndex(res, "/")
          return
        }
        send(res, nestedIndex)
        return
      }
    }

    const urlPath = decodeURIComponent((req.url || "/").split("?")[0])
    sendIndex(res, urlPath.replace(/\/$/, "") || "/")
  })
})

server.listen(port, host, () => {
  console.log(`SPA dev server http://${host}:${port}`)
})

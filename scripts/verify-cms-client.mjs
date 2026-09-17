import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const source = fs.readFileSync(path.join(root, 'cms-client.js'), 'utf8')

const load = (hostname, configured) => {
  const window = {
    COOPER_NINVE_CMS_URL: configured,
    location: { hostname },
    setTimeout,
    clearTimeout,
    fetch: globalThis.fetch,
  }
  vm.runInNewContext(source, { window, Boolean, String, encodeURIComponent, AbortController })
  return window.CooperNinveCMS
}

const failures = []
const check = (name, ok, detail = '') => {
  if (ok) console.log(`PASS ${name}`)
  else {
    failures.push(name)
    console.log(`FAIL ${name}${detail ? ` — ${detail}` : ''}`)
  }
}

const local = load('localhost')
check('local cms origin', local.cmsBase() === 'http://localhost:3000', local.cmsBase())

const prod = load('tamir-kodner.com')
check('prod cms origin', prod.cmsBase() === 'https://cms.tamir-kodner.com', prod.cmsBase())

const blockedLocal = load('tamir-kodner.com', 'http://localhost:3000')
check('prod ignores localhost override', blockedLocal.cmsBase() === 'https://cms.tamir-kodner.com', blockedLocal.cmsBase())

const staticPage = {
  h1: 'Static H1',
  lead: 'Static lead',
  title: 'Static title',
  description: 'Static description',
  who: ['Consultants'],
  coverage: ['Negligence claims'],
  info: ['Turnover'],
  faqs: [['Static Q', 'Static A']],
  primary: ['Static CTA', '/contact-us'],
  secondary: ['Static secondary', '/contact-us'],
}

const englishCms = {
  language: 'english',
  productName: 'Professional Liability Insurance for Businesses and Professionals',
  shortDescription: 'Cyber insurance for businesses against ransomware attacks.',
  seo: {
    metaTitle: 'Professional Liability Insurance for Businesses and Professionals | Cooper Ninve',
    metaDescription: 'Professional liability insurance for businesses, consultants, service providers and professionals.',
  },
  who: ['יועצים ונותני שירותים'],
  coverage: ['תביעות בגין רשלנות מקצועית'],
  info: ['תחום פעילות'],
  faqs: [{ question: 'מה זה ביטוח סייבר?', answer: 'ביטוח סייבר נועד לספק הגנה.' }],
  primaryCTA: { label: 'Discuss Coverage', destination: '/contact-us' },
  secondaryCTA: { label: 'Contact Underwriting', destination: '/contact-us' },
}

const merged = prod.mergeProductPage(staticPage, englishCms)
check('english keeps static who', merged.who[0] === 'Consultants')
check('english keeps static coverage', merged.coverage[0] === 'Negligence claims')
check('english keeps static info', merged.info[0] === 'Turnover')
check('english keeps static faqs', merged.faqs[0][0] === 'Static Q')
check('english uses CMS h1', merged.h1 === englishCms.productName)
check('english uses CMS lead', merged.lead === englishCms.shortDescription)
check('english uses CMS title', merged.title === englishCms.seo.metaTitle)
check('english uses English CTA', merged.primary[0] === 'Discuss Coverage')

const hebrewCms = {
  language: 'hebrew',
  productName: 'ביטוח אחריות מקצועית לעסקים, יועצים ובעלי מקצוע',
  shortDescription: 'הגנה מפני תביעות',
  seo: { metaTitle: 'כותרת', metaDescription: 'תיאור' },
  who: ['יועצים ונותני שירותים'],
  coverage: ['תביעות בגין רשלנות מקצועית'],
  info: ['תחום פעילות'],
  faqs: [{ question: 'שאלה', answer: 'תשובה' }],
  primaryCTA: { label: 'לקבלת הצעה', destination: '/contact-us' },
  secondaryCTA: { label: 'חיתום', destination: '/contact-us' },
}

const hebrewMerged = prod.mergeProductPage(staticPage, hebrewCms)
check('hebrew uses CMS who', hebrewMerged.who[0] === 'יועצים ונותני שירותים')
check('hebrew uses CMS faqs', hebrewMerged.faqs[0][0] === 'שאלה')

if (failures.length) {
  console.error(`\n${failures.length} failed`)
  process.exit(1)
}

console.log('\nCMS client checks passed')

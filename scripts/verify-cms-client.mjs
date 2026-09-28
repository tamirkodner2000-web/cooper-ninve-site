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

const standardStatic = {
  title: 'תביעות | קופר נינוה',
  description: 'תיאור סטטי',
  h1: 'תביעות',
  lead: 'ליד סטטי',
  primary: ['', '/contact-us'],
  secondary: ['', '/contact-us'],
  hideActions: true,
}

const standardCms = {
  language: 'hebrew',
  pageType: 'claims',
  slug: 'claims',
  seo: {
    metaTitle: 'תביעות | קופר נינוה',
    metaDescription: 'תיאור מ-CMS בעברית',
  },
  hero: {
    heading: 'תביעות',
    subheading: 'ליד מ-CMS בעברית',
    primaryCTA: { label: '', destination: '/contact-us' },
    secondaryCTA: { label: '', destination: '/contact-us' },
  },
}

const mergedClaims = prod.mergeStandardPage(standardStatic, standardCms, '/claims')
check('standard hebrew uses CMS title', mergedClaims.title === standardCms.seo.metaTitle)
check('standard hebrew uses CMS lead', mergedClaims.lead === 'ליד מ-CMS בעברית')
check('standard empty CTA keeps fallback', mergedClaims.primary[0] === '')

const aboutMerged = prod.mergeStandardPage(
  { title: 'אודות', description: 'תיאור', h1: 'אודות קופר נינוה', lead: 'ליד סטטי' },
  {
    language: 'hebrew',
    seo: { metaTitle: 'אודות קופר נינוה | CMS', metaDescription: 'תיאור CMS' },
    hero: { heading: 'אודות קופר נינוה', subheading: 'ליד שלא אמור להחליף' },
  },
  '/about-us',
)
check('about-us keeps static h1', aboutMerged.h1 === 'אודות קופר נינוה')
check('about-us uses CMS title', aboutMerged.title === 'אודות קופר נינוה | CMS')

const englishIgnored = prod.mergeStandardPage(standardStatic, Object.assign({}, standardCms, { language: 'english' }), '/claims')
check('english standard merge ignored', englishIgnored.lead === 'ליד סטטי')

const englishFetch = prod.fetchStandardPage({ language: 'english', path: '/about-us' })
check('english standard fetch is thenable', typeof englishFetch.then === 'function')

const staticPress = [
  { title: 'כתבות וראיונות', items: [{}, {}, {}, {}, {}, {}] },
  { title: 'מגזינים ועלונים', items: [{}, {}, {}] },
  { title: 'הכרה מקצועית ואירועים', items: [{}, {}] },
  { title: 'פרופילים אישיים', items: [{}] },
]
const pressCms = {
  language: 'hebrew',
  items: [
    { title: 'א', publicationName: 'מקור', categoryOrGroup: 'כתבות וראיונות', shortDescription: 'תיאור א', ctaLabel: 'לקריאה', displayOrder: 0, destinationType: 'externalURL', destination: 'https://example.com/a' },
    { title: 'ב', publicationName: 'מקור', categoryOrGroup: 'כתבות וראיונות', shortDescription: 'תיאור ב', ctaLabel: 'לקריאה', displayOrder: 1, destinationType: 'externalURL', destination: 'https://example.com/b' },
    { title: 'ג', publicationName: 'מקור', categoryOrGroup: 'כתבות וראיונות', shortDescription: 'תיאור ג', ctaLabel: 'לקריאה', displayOrder: 2, destinationType: 'externalURL', destination: 'https://example.com/c' },
    { title: 'ד', publicationName: 'מקור', categoryOrGroup: 'כתבות וראיונות', shortDescription: 'תיאור ד', ctaLabel: 'לקריאה', displayOrder: 3, destinationType: 'externalURL', destination: 'https://example.com/d' },
    { title: 'ה', publicationName: 'מקור', categoryOrGroup: 'כתבות וראיונות', shortDescription: 'תיאור ה', ctaLabel: 'לקריאה', displayOrder: 4, destinationType: 'externalURL', destination: 'https://example.com/e' },
    { title: 'ו', publicationName: 'מקור', categoryOrGroup: 'כתבות וראיונות', shortDescription: 'תיאור ו', ctaLabel: 'לקריאה', displayOrder: 5, destinationType: 'externalURL', destination: 'https://example.com/f' },
    { title: 'ז', publicationName: 'מקור', categoryOrGroup: 'מגזינים ועלונים', shortDescription: 'תיאור ז', ctaLabel: 'לצפייה', displayOrder: 6, destinationType: 'fileOrImage', destination: '/api/media/file/a.pdf' },
    { title: 'ח', publicationName: 'מקור', categoryOrGroup: 'מגזינים ועלונים', shortDescription: 'תיאור ח', ctaLabel: 'לצפייה', displayOrder: 7, destinationType: 'fileOrImage', destination: '/api/media/file/b.pdf' },
    { title: 'ט', publicationName: 'מקור', categoryOrGroup: 'מגזינים ועלונים', shortDescription: 'תיאור ט', ctaLabel: 'לצפייה', displayOrder: 8, destinationType: 'fileOrImage', destination: '/api/media/file/c.pdf' },
    { title: 'י', publicationName: 'מקור', categoryOrGroup: 'הכרה מקצועית ואירועים', shortDescription: 'תיאור י', ctaLabel: 'לצפייה', displayOrder: 9, destinationType: 'externalURL', destination: 'https://example.com/i' },
    { title: 'יא', publicationName: 'מקור', categoryOrGroup: 'הכרה מקצועית ואירועים', shortDescription: 'תיאור יא', ctaLabel: 'לצפייה', displayOrder: 10, destinationType: 'fileOrImage', destination: '/api/media/file/d.jpg' },
    { title: 'יב', publicationName: 'מקור', categoryOrGroup: 'פרופילים אישיים', shortDescription: 'תיאור יב', ctaLabel: 'לקריאה', displayOrder: 11, destinationType: 'fileOrImage', destination: '/api/media/file/e.pdf' },
  ],
}
const mappedPress = prod.mergePressGroups(staticPress, pressCms)
check('press maps 4 groups', mappedPress && mappedPress.length === 4)
check('press group counts', mappedPress && mappedPress.map((g) => g.items.length).join('/') === '6/3/2/1')
check('press resolves media against CMS origin', mappedPress && mappedPress[1].items[0].url === 'https://cms.tamir-kodner.com/api/media/file/a.pdf')
check('press empty payload falls back', prod.mergePressGroups(staticPress, { language: 'hebrew', items: [] }) == null)
check('press incomplete payload falls back', prod.mergePressGroups(staticPress, { language: 'hebrew', items: pressCms.items.slice(0, 11) }) == null)

if (failures.length) {
  console.error(`\n${failures.length} failed`)
  process.exit(1)
}

console.log('\nCMS client checks passed')

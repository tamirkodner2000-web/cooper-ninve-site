const partnerLogos = [
  { alt: "Tokio Marine Kiln", src: "/assets/logos/partners/tokio-marine-kiln-logo.jpg", width: 780, height: 300 },
  { alt: "Ascot", src: "/assets/logos/partners/ascot-partner-logo.png", width: 900, height: 550 },
  { alt: "Miller", src: "/assets/logos/partners/miller-partner-logo.png", width: 514, height: 183 },
  { alt: "Beazley", src: "/assets/logos/partners/beazley-logo.png", width: 1024, height: 323 },
  { alt: "CFC", src: "/assets/logos/partners/cfc-logo.jpg", width: 623, height: 241 },
  { alt: "QBE", src: "/assets/logos/partners/qbe-partner-logo.png", width: 1249, height: 506 },
];

const productIcons = {
  professional: `<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4h8"/><path d="M13 4 16 9l3-5"/><path d="M14 10h4l2 16-4 3-4-3 2-16Z"/><path d="M10 28h12"/><path d="M8 12c1.5-2 4-3 8-3s6.5 1 8 3"/><path d="M8 12v11"/><path d="M24 12v11"/></svg>`,
  cyber: `<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4 25 8v7c0 6-4 10-9 13-5-3-9-7-9-13V8l9-4Z"/><rect x="12" y="15" width="8" height="7" rx="1.5"/><path d="M14 15v-2a2 2 0 0 1 4 0v2"/><path d="M16 18.5v1"/></svg>`,
  thirdParty: `<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="3"/><path d="M12 10v6"/><path d="M8 14h8"/><path d="M12 16 9 24"/><path d="M12 16l5 6"/><path d="M20 23h5"/><circle cx="19" cy="20" r="2"/><path d="M21 20h3l3 3"/><path d="M25 23l2 3"/><path d="M19 22l-2 4"/></svg>`,
  employers: `<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12a6 6 0 0 1 12 0"/><path d="M8 12h16"/><path d="M13 7v5"/><path d="M19 7v5"/><circle cx="16" cy="16" r="4"/><path d="M8 27c1.2-4 4-6 8-6s6.8 2 8 6"/><path d="M6 27h20"/></svg>`,
  product: `<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 11 16 6l10 5-10 5-10-5Z"/><path d="M6 11v11l10 5 10-5V11"/><path d="M16 16v11"/><path d="M11 8.5 21 13.5"/></svg>`,
  contractors: `<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a6 6 0 0 1 12 0"/><path d="M8 13h16"/><path d="M14 8v5"/><path d="M18 8v5"/><circle cx="16" cy="17" r="4"/><path d="M9 28c1-4 3.5-6 7-6s6 2 7 6"/><path d="M22 22l4 4"/><path d="M24 20l4 4"/></svg>`,
  medical: `<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v8a6 6 0 0 0 12 0V6"/><path d="M8 6H5"/><path d="M20 6h3"/><path d="M14 20v3a5 5 0 0 0 10 0v-2"/><circle cx="24" cy="18" r="3"/><path d="M5 9h3"/><path d="M20 9h3"/></svg>`,
  directors: `<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="7" r="3"/><path d="M10 27c1-5 3-7.5 6-7.5s5 2.5 6 7.5"/><path d="M13.5 20 16 25l2.5-5"/><path d="M12 14h8"/><rect x="5" y="15" width="7" height="6" rx="1"/><rect x="20" y="15" width="7" height="6" rx="1"/><path d="M12 18h8"/><path d="M8 15v-3h16v3"/></svg>`,
  media: `<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="20" height="16" rx="2"/><path d="M6 15h20"/><path d="M10 10 13 15"/><path d="M16 10 19 15"/><path d="M22 10 25 15"/><path d="M11 6h10l3 4H8l3-4Z"/><path d="M14 20 19 22.5 14 25v-5Z"/></svg>`,
  specialRisks: `<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4 25 8v7c0 6-4 10-9 13-5-3-9-7-9-13V8l9-4Z"/><path d="M16 11v7"/><path d="M16 22h.01"/><path d="M12 24h8"/></svg>`,
};

const products = [
  { title: "אחריות מקצועית", url: "/professional-liability-insurance", icon: productIcons.professional, text: "הגנה מפני תביעות הנובעות מטעות מקצועית, רשלנות, ייעוץ שגוי או מחדל במסגרת מתן שירות מקצועי." },
  { title: "סייבר", url: "/cyber-insurance", icon: productIcons.cyber, text: "כיסוי לאירועי סייבר, מתקפות כופר, דליפות מידע, השבתת פעילות, הוצאות שחזור ותביעות צד שלישי." },
  { title: "צד שלישי", url: "/liability-insurance", icon: productIcons.thirdParty, text: "כיסוי לעסקים מפני תביעות צד שלישי בגין נזקי גוף, רכוש או אחריות הנובעת מהפעילות העסקית." },
  { title: "חבות מעבידים", url: "/employers-liability-insurance", icon: productIcons.employers, text: "פתרונות לחבות מעבידים והגנה מפני תביעות עובדים, בכפוף לתנאי הפוליסה ואישור חיתום." },
  { title: "חבות המוצר", url: "/product-liability-insurance", icon: productIcons.product, text: "כיסוי ליצרנים, יבואנים ומשווקים החשופים לתביעות הנובעות ממוצר, פגם או נזק לצד שלישי." },
  { title: "עבודות קבלניות", url: "/contractors-all-risks-insurance", icon: productIcons.contractors, text: "פתרונות ביטוח לפרויקטים, קבלנים, יזמים ועבודות תשתית, כולל רכוש, צד שלישי וחבות מעבידים." },
  { title: "רשלנות רפואית", url: "/medical-malpractice-insurance", icon: productIcons.medical, text: "פתרונות לרופאים, מטפלים, מרפאות וגורמים רפואיים החשופים לתביעות בגין רשלנות מקצועית." },
  { title: "דירקטורים ונושאי משרה", url: "/directors-and-officers-insurance", icon: productIcons.directors, text: "פתרונות אחריות נושאי משרה לחברות, הנהלות ודירקטוריונים מול חשיפות ניהוליות ומשפטיות." },
  { title: "הפקות מדיה וסרטים", url: "/media-production-insurance", icon: productIcons.media, text: "מענה ביטוחי להפקות, צוותים, ציוד, לוקיישנים ופעילות מדיה הדורשת התאמה חיתומית." },
  { title: "סיכונים מיוחדים", url: "/special-risks-insurance", icon: productIcons.specialRisks, text: "בדיקת פתרונות לסיכונים מורכבים, חריגים או לא סטנדרטיים שאינם נכנסים לתבנית רגילה." },
];

const teamMembers = [
  { name: "יהושע נתן", role: "יו״ר", bio: "מוביל את פעילות החברה והחזון האסטרטגי של קופר נינוה.", image: "/assets/team/yehoshua-natan.jpg.jpeg", initials: "ינ" },
  { name: "נינה קודנר", role: "חתמת ראשית", bio: "מובילה את תחום החיתום המקצועי והמסחרי של החברה.", image: "/assets/team/nina-kodner.jpg.jpeg", initials: "נק" },
  { name: "פריסילה יוסף", role: "סמנכ״לית תפעול", bio: "אחראית על ניהול תהליכי תפעול, שירות וממשקי עבודה בחברה.", image: "/assets/team/priscilla.jpg.jpeg", initials: "פי" },
  { name: "אילן זיו", role: "מנכ״ל", bio: "מוביל את ניהול החברה, פיתוח עסקי וקשרי שוק.", image: "/assets/team/eylon-ziv.jpg.jpeg", initials: "אז" },
  { name: "נטע אילני", role: "יועצת משפטית", bio: "אחראית על היבטים משפטיים, רגולציה וליווי מקצועי.", image: "/assets/team/neta-ilani.jpg.jpeg", initials: "נא" },
  { name: "אורי קליין", role: "מנמ\"ר", bio: "מוביל את מערכות העסק.", image: "/assets/team/uri-klein.jpg.jpeg", initials: "אק" },
  { name: "אבישי פרץ", role: "סמנכ״ל כספים", bio: "אחראי על תחום הכספים, בקרה, גבייה ותהליכים פיננסיים.", image: "/assets/team/avishai.jpg.jpg", initials: "אפ" },
  { name: "ליעד לק", role: "חתם חבויות ראשי", bio: "עוסק בחיתום, בדיקת סיכונים וליווי מקצועי של תיקי ביטוח.", image: "/assets/team/liad-lek.jpg.jpg", initials: "לל" },
];

const pressGroups = [
  {
    title: "כתבות וראיונות",
    items: [
      {
        title: "הרחבת קווי מוצרים בקופר נינוה",
        source: "Bizportal",
        description: "כתבה על הרחבת קווי המוצרים של קופר נינוה והמשך פיתוח פעילות החיתום בהובלת אילן זיו.",
        url: "https://www.bizportal.co.il/Insurance/news/article/20028076",
        cta: "לקריאת הכתבה",
      },
      {
        title: "שיחת פוליסה עם אילן זיו",
        source: "Polisa",
        description: "ראיון עם אילן זיו, מנכ״ל קופר נינוה, על פעילות החברה, תחומי הביטוח והפתרונות המקצועיים לסוכנים.",
        url: "https://polisa.news/%D7%A9%D7%99%D7%97%D7%AA-%D7%A4%D7%95%D7%9C%D7%99%D7%A1%D7%94-%D7%A2%D7%9D-%D7%90%D7%99%D7%9C%D7%9F-%D7%96%D7%99%D7%95-%D7%9E%D7%A0%D7%9B%D7%9C-%D7%A7%D7%95%D7%A4%D7%A8-%D7%A0%D7%99%D7%A0%D7%95/",
        cta: "לקריאת הכתבה",
      },
      {
        title: "אילן זיו: יש לשפר את הנגישות לשוקי ביטוח",
        source: "עדיף+",
        description: "כתבה מקצועית על הצורך בשיפור הנגישות לשווקי ביטוח ועל תפקידם של פתרונות חיתום ושווקים בינלאומיים.",
        url: "https://www.adifplus.co.il/%D7%90%D7%99%D7%9C%D7%9F-%D7%96%D7%99%D7%95-%D7%99%D7%A9-%D7%9C%D7%A9%D7%A4%D7%A8-%D7%90%D7%AA-%D7%94%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA-%D7%9C%D7%A9%D7%95%D7%A7%D7%99-%D7%91%D7%99%D7%98%D7%95%D7%97/",
        cta: "לקריאת הכתבה",
      },
      {
        title: "ראיון ב־103FM",
        source: "103FM / מעריב",
        description: "אייטם רדיו/תקשורת על פעילות קופר נינוה ותחומי הביטוח שבהם החברה פועלת.",
        url: "https://103fm.maariv.co.il/programs/media.aspx?ZrqvnVq=IDJJHE&c41t4nzVQ=ELD",
        cta: "להאזנה / צפייה",
      },
      {
        title: "קופר נינוה מציעה פרמיה מינימלית",
        source: "עדיף+",
        description: "כתבה על פעילות מקצועית של קופר נינוה בתחום פתרונות הביטוח.",
        url: "https://www.adifplus.co.il/%D7%A7%D7%95%D7%A4%D7%A8-%D7%A0%D7%99%D7%A0%D7%95%D7%94-%D7%9E%D7%A6%D7%99%D7%A2%D7%94-%D7%A4%D7%A8%D7%9E%D7%99%D7%94-%D7%9E%D7%99%D7%A0%D7%99%D7%9E%D7%9C%D7%99%D7%AA-%D7%91%D7%99%D7%9E%D7%99-%D7%94/",
        cta: "לקריאת הכתבה",
      },
      {
        title: "קופר נינוה משיקה מחלקת ביטוחי אחריות מקצועית",
        source: "POLICY",
        description: "כתבה על השקת מחלקת Professional Indemnity בקופר נינוה, בדגש על הנדסה, אדריכלות ובנייה.",
        url: "https://policy-news.com/cooper-ninve-launches-professional-indemnity-department-focusing-on-engineering-architecture-and-construction/",
        cta: "לקריאת הכתבה",
      },
    ],
  },
  {
    title: "מגזינים ועלונים",
    items: [
      {
        title: "MGA בשוק לויד׳ס מקנה לנו גישה לקיבולת רחבה יותר של כיסויים",
        source: "מגזין עדיף, פברואר 2023",
        description: "ראיון עם אילן זיו, מנכ״ל קופר נינוה, על מעמד ה־MGA, שוק לויד׳ס, סמכויות חיתום והיתרון לסוכנים ולמבוטחים.",
        url: "/media-press/ilan-siw-adif-article-page-14.pdf",
        cta: "לקריאת הכתבה",
      },
      {
        title: "עלון הסבר: מהו M.G.A",
        source: "קופר נינוה",
        description: "עלון הסבר של קופר נינוה המציג את מודל ה־MGA ואת תפקידו כמרכז חיתום מקצועי.",
        url: "/media-press/mga-explaining.pdf",
        cta: "לצפייה בעלון",
      },
      {
        title: "POLICY 815 — השקת מחלקת Professional Indemnity",
        source: "POLICY, גיליון 815",
        description: "אזכור מגזיני על השקת מחלקת האחריות המקצועית של קופר נינוה והרחבת פעילות החיתום.",
        url: "/media-press/ilan-siw-policy-article.pdf",
        cta: "לצפייה בגיליון",
      },
    ],
  },
  {
    title: "הכרה מקצועית ואירועים",
    items: [
      {
        title: "נינה קודנר מועמדת ב־Women in Insurance Awards UK 2026",
        source: "Women in Insurance Awards UK",
        description: "נינה קודנר נכללת ברשימת המועמדות של Women in Insurance Awards UK 2026, במסגרת הכרה בינלאומית בנשים מובילות בענף הביטוח.",
        url: "https://womenininsuranceawardsuk.co.uk/2026/en/page/2026-nominees",
        cta: "לצפייה באזכור",
      },
      {
        title: "הברוקר הישראלי הראשון בעולם",
        source: "קופר נינוה",
        description: "תמונה של אילן זיו ונינה קודנר עם תעודת הברוקר הישראלי הראשון בעולם.",
        url: "/media-press/first-israeli-broker.jpg",
        cta: "לצפייה בתמונה",
      },
    ],
  },
  {
    title: "פרופילים אישיים",
    items: [
      {
        title: "כתבה על נינה קודנר",
        source: "פרופיל מקצועי",
        description: "כתבה על נינה קודנר, פועלה בענף הביטוח, הקשר לשוק לויד׳ס ותפיסת השירות המקצועית של קופר נינוה.",
        url: "/media-press/nina-kodner-leadership-article.pdf",
        cta: "לקריאת הכתבה",
      },
    ],
  },
];

const pages = {
  "/": {
    title: "קופר נינוה | ישראל - מרכז חיתום הבנוי לעתיד",
    description: "קופר נינוה היא מרכז חיתום ישראלי, MGA ו-Coverholder המחבר בין סוכני ביטוח, עסקים ושווקי ביטוח בינלאומיים באמצעות חיתום, הפקה, שירות ותביעות.",
    eyebrow: "",
    hideEyebrow: true,
    h1: "קודם כל יושרה.",
    positioning: "קופר נינוה,\nמרכז חיתום הבנוי לעתיד.",
    lead: "קופר נינוה מספקת לסוכני ביטוח ולעסקים בישראל גישה לשווקי ביטוח בינלאומיים, באמצעות תהליך חיתום מסודר, הפקת פוליסות בעברית וליווי מקצועי לאורך חיי הפוליסה.",
    trustMetrics: [
      ["5", "מבטחי משנה"],
      ["1,000+", "סוכני ביטוח"],
    ],
    primary: ["הגשת סיכון לחיתום", "/contact-us"],
    secondary: ["עבודה עם סוכני ביטוח", "/insurance-agents"],
    highlights: ["MGA ו-Coverholder בישראל", "בחינת סיכונים וחיתום מקצועי", "גישה לשווקים ושותפים בינלאומיים", "הפקה, שירות ותביעות בישראל", "ניהול תיקים לאורך חיי הפוליסה"],
    sections: "home",
  },
  "/insurance-solutions": {
    title: "תחומי חיתום וסיכונים מורכבים | קופר נינוה",
    description: "תחומי חיתום ובחינת סיכונים בתחומי אחריות מקצועית, סייבר, עבודות קבלניות, רשלנות רפואית, חבויות וסיכונים מיוחדים.",
    h1: "תחומי חיתום ובחינת סיכונים",
    lead: "לא כל עסק, פרויקט או בעל מקצוע חשופים לאותם סיכונים. תהליך חיתום נכון מתחיל בהבנת תחום הפעילות, דרישות חוזיות, ניסיון תביעות, גבולות אחריות ורמת המורכבות.",
    primary: ["הגשת סיכון לחיתום", "/contact-us"],
    secondary: ["עבודה עם סוכני ביטוח", "/insurance-agents"],
    sections: "solutions",
  },
  "/insurance-agents": {
    title: "פתרונות חיתום לסוכני ביטוח | קופר נינוה",
    description: "קופר נינוה מספקת לסוכני ביטוח תהליך חיתום, הפקה, שירות וליווי סיכונים בתחומי אחריות מקצועית, סייבר, קבלנים, חבויות וסיכונים מיוחדים.",
    h1: "פתרונות ביטוח, הפקה ושירות לסוכני ביטוח בישראל",
    lead: "קופר נינוה היא שותף מקצועי לסוכני ביטוח בהגשת סיכונים, בחינת חיתום, גישה לשווקים בינלאומיים, הפקה, שירות וניהול לאורך חיי הפוליסה.",
    primary: ["הגשת סיכון לחיתום", "/contact-us"],
    secondary: ["תחומי חיתום", "/insurance-solutions"],
    sections: "agents",
  },
  "/business-insurance": {
    title: "בחינת סיכונים לעסקים וחברות | קופר נינוה",
    description: "בחינת סיכונים ותהליך חיתום לעסקים, חברות וסיכונים מורכבים בתחומי אחריות מקצועית, סייבר, עבודות קבלניות, חבויות ורשלנות רפואית.",
    h1: "בחינת סיכונים לעסקים, חברות וסיכונים מורכבים",
    lead: "קופר נינוה בוחנת חשיפות עסקיות ומסחריות לפי אופי הפעילות, דרישות חוזיות, ניסיון תביעות וצרכי הכיסוי, ומקדמת תהליך חיתום מקצועי מול השווקים הרלוונטיים.",
    primary: ["בדיקת סיכון עסקי", "/contact-us"],
    secondary: ["תחומי חיתום", "/insurance-solutions"],
    sections: "business",
  },
  "/claims": {
    title: "תביעות | קופר נינוה",
    description: "הסבר מקצועי על תיאום וליווי תהליכי תביעה מול סוכני ביטוח, גורמים מקצועיים ושווקים רלוונטיים, בהתאם לתנאי הפוליסה והסמכויות הרלוונטיות.",
    h1: "תביעות",
    lead: "תביעה היא רגע המבחן של כל פוליסה. קופר נינוה מנהלת ומתאמת תביעות בשם סינדיקטים משוק לויד׳ס העומדים מאחוריה — שוק ביטוח בינלאומי ותיק, חזק ומוכר, שלקח חלק בביטוח ובטיפול בתיקי הביטוח המורכבים בעולם. התהליך מתבצע בכפוף לתנאי הפוליסה, סמכויות החיתום ואישור הגורמים הרלוונטיים.",
    supportLine: "שוק לויד׳ס מוכר בחוסנו הפיננסי ובמסורת ארוכת שנים של טיפול בתביעות משמעותיות.",
    primary: ["", "/contact-us"],
    secondary: ["", "/contact-us"],
    hideActions: true,
    sections: "claims",
  },
  "/about-us": {
    title: "אודות קופר נינוה | MGA ופתרונות ביטוח מתקדמים",
    description: "קופר נינוה היא MGA ו-Coverholder הפועלת בישראל ומספקת פתרונות ביטוח מתקדמים לעסקים, סוכנים וסיכונים מורכבים.",
    h1: "אודות קופר נינוה",
    lead: "קופר נינוה היא MGA ו-Coverholder הפועלת בישראל ומספקת פתרונות ביטוח מתקדמים לסוכני ביטוח, עסקים וחברות בתחומי חבויות, אחריות מקצועית, סייבר וסיכונים מיוחדים.",
    primary: ["דברו איתנו", "/contact-us"],
    secondary: ["פתרונות הביטוח שלנו", "/insurance-solutions"],
    sections: "about",
  },
  "/press": {
    title: "קופר נינוה בתקשורת | קופר נינוה",
    description: "כתבות, ראיונות, עלונים ואזכורים מקצועיים על פעילות קופר נינוה, תחומי החיתום, שוק לויד׳ס והקשר לשוק הביטוח הבינלאומי.",
    h1: "קופר נינוה בתקשורת",
    lead: "כתבות, ראיונות, עלונים ואזכורים מקצועיים על פעילות קופר נינוה, תחומי החיתום, שוק לויד׳ס והקשר לשוק הביטוח הבינלאומי.",
    primary: ["", "/press"],
    secondary: ["", "/press"],
    hideActions: true,
    sections: "press",
  },
  "/contact-us": {
    title: "צור קשר | הגשת סיכון לחיתום | קופר נינוה",
    description: "צרו קשר עם קופר נינוה להגשת סיכון לחיתום, פנייה כסוכן ביטוח, בדיקת סיכון עסקי או שיחה עם צוות החיתום והשירות.",
    h1: "צור קשר עם קופר נינוה",
    lead: "רוצים להגיש סיכון לחיתום, לפתוח פנייה כסוכן או להבין איזה מידע נדרש לבדיקת חשיפה עסקית? השאירו פרטים וצוות קופר נינוה יחזור אליכם.",
    primary: ["הגשת פנייה", "/contact-us"],
    secondary: ["הגשת סיכון כסוכן", "/insurance-agents"],
    sections: "contact",
  },
  "/israel-market-partner": {
    title: "Israel Market Partner | Cooper Ninve",
    description: "Cooper Ninve is a local underwriting, claims coordination and portfolio management support partner in Israel for international insurance markets.",
    h1: "Israel Market Partner",
    lead: "A trusted local underwriting, claims and portfolio management partner in Israel for Lloyd's syndicates, international insurers, reinsurers, MGAs and capacity providers.",
    primary: ["Discuss Partnership", "/contact-us"],
    secondary: ["Underwriting Capabilities", "/insurance-solutions"],
    sections: "international",
  },
  "/privacy-policy": {
    title: "מדיניות פרטיות | קופר נינוה",
    description: "מדיניות פרטיות כללית לאתר קופר נינוה.",
    h1: "מדיניות פרטיות",
    lead: "עמוד זה מרכז מידע כללי על פרטיות ושימוש במידע באתר. הנוסח הסופי כפוף לאישור משפטי.",
    sections: "privacy",
  },
  "/terms-of-use": {
    title: "תנאי שימוש | קופר נינוה",
    description: "תנאי שימוש כלליים באתר קופר נינוה.",
    h1: "תנאי שימוש",
    lead: "תנאי השימוש באתר מוצגים כעמוד בסיסי עד לאישור נוסח משפטי מלא.",
    sections: "terms",
  },
  "/disclosure": {
    title: "גילוי נאות ומעמד רגולטורי | קופר נינוה",
    description: "מידע כללי על גילוי נאות, מעמד רגולטורי ותנאי כיסוי באתר קופר נינוה.",
    h1: "גילוי נאות ומעמד רגולטורי",
    lead: "מידע זה נועד להבהיר את אופי המידע באתר ואת כפיפות הכיסוי לתנאי פוליסה, חיתום ואישורים רלוונטיים.",
    sections: "disclosure",
  },
  "/public-complaints": {
    title: "תלונות הציבור | קופר נינוה",
    description: "מידע כללי על פניות ותלונות הציבור באתר קופר נינוה.",
    h1: "תלונות הציבור",
    lead: "עמוד זה מרכז מידע בסיסי להגשת פניות או תלונות. הנוהל הסופי כפוף לאישור החברה והיועצים הרלוונטיים.",
    sections: "complaints",
  },
  "/accessibility-statement": {
    title: "הצהרת נגישות | קופר נינוה",
    description: "הצהרת נגישות כללית לאתר קופר נינוה.",
    h1: "הצהרת נגישות",
    lead: "קופר נינוה שואפת להנגיש את האתר לקהל רחב ככל האפשר. עמוד זה הוא בסיס להצהרת נגישות מלאה.",
    sections: "accessibility",
  },
  "/knowledge-center": {
    title: "מרכז ידע ביטוחי | קופר נינוה",
    description: "מאמרים ומידע מקצועי על ביטוח אחריות מקצועית, סייבר, עבודות קבלניות, חבויות, רשלנות רפואית וסיכונים מיוחדים.",
    h1: "מרכז ידע ביטוחי",
    lead: "תוכן מקצועי לסוכני ביטוח, עסקים ובעלי מקצוע על סיכונים, חיתום, מסמכים נדרשים ותהליכי בדיקת התאמה.",
    primary: ["שיחה עם צוות החיתום", "/contact-us"],
    secondary: ["פתרונות ביטוח", "/insurance-solutions"],
    sections: "knowledge",
  },
};

const productPages = {
  "/professional-liability-insurance": {
    title: "ביטוח אחריות מקצועית לעסקים ובעלי מקצוע | קופר נינוה",
    description: "ביטוח אחריות מקצועית לעסקים, יועצים, נותני שירותים ובעלי מקצוע. פתרונות לסיכונים מקצועיים, תביעות רשלנות והוצאות משפט.",
    h1: "ביטוח אחריות מקצועית לעסקים, יועצים ובעלי מקצוע",
    lead: "הגנה מפני תביעות הנובעות מטעות מקצועית, רשלנות, מחדל, ייעוץ שגוי או נזק כספי שנגרם לצד שלישי במסגרת השירות המקצועי.",
    primary: ["לקבלת הצעה לביטוח אחריות מקצועית", "/contact-us"],
    secondary: ["התייעצות עם צוות החיתום", "/contact-us"],
    who: ["יועצים ונותני שירותים", "מהנדסים ואדריכלים", "חברות שירותים", "מקצועות טיפוליים ובריאותיים", "חברות טכנולוגיה ושירותים דיגיטליים"],
    coverage: ["תביעות בגין רשלנות מקצועית", "טעות או מחדל במסגרת השירות", "ייעוץ שגוי או המלצה מקצועית שגרמה לנזק", "נזק כספי ללקוח או לצד שלישי", "הוצאות משפט והגנה משפטית"],
    info: ["תחום פעילות מדויק", "תיאור השירותים", "מחזור הכנסות שנתי", "גבול אחריות מבוקש", "ניסיון תביעות קודם", "חוזים או דרישות ביטוח מיוחדות"],
    faqs: [
      ["מה זה ביטוח אחריות מקצועית?", "ביטוח אחריות מקצועית נועד להגן על בעל מקצוע או עסק מפני תביעות הנובעות מטעות מקצועית, רשלנות, מחדל או ייעוץ שגוי במסגרת מתן שירות מקצועי."],
      ["מה ההבדל בין אחריות מקצועית לצד שלישי?", "ביטוח צד שלישי מתייחס לרוב לנזקי גוף או רכוש, בעוד שביטוח אחריות מקצועית מתייחס לנזק שנגרם כתוצאה מטעות מקצועית או שירות מקצועי לקוי."],
      ["האם סוכן ביטוח יכול להגיש בקשה עבור לקוח?", "כן. סוכני ביטוח יכולים להעביר מידע על הסיכון לצורך בדיקת התאמה וקבלת הצעה."]
    ],
  },
  "/cyber-insurance": {
    title: "ביטוח סייבר לעסקים וחברות | קופר נינוה",
    description: "ביטוח סייבר לעסקים מפני מתקפות כופר, דליפות מידע, השבתת פעילות, הוצאות שחזור ותביעות צד שלישי.",
    h1: "ביטוח סייבר לעסקים, חברות וארגונים",
    lead: "הגנה ביטוחית לעסקים וחברות מפני אירועי אבטחת מידע, מתקפות כופר, דליפות מידע, השבתת פעילות, פגיעה במערכות מידע ותביעות צד שלישי.",
    primary: ["לקבלת הצעה לביטוח סייבר", "/contact-us"],
    secondary: ["בדיקת התאמה ראשונית", "/contact-us"],
    who: ["חברות טכנולוגיה", "עסקים המחזיקים מידע אישי", "חנויות אונליין ועסקים דיגיטליים", "משרדי שירותים מקצועיים", "ארגונים עם תלות במערכות מידע"],
    coverage: ["תגובה ראשונית לאירוע סייבר", "הוצאות מומחי סייבר ו-IT", "שחזור מידע ומערכות", "אירועי כופר וסחיטה דיגיטלית", "דליפת מידע ופגיעה בפרטיות", "תביעות צד שלישי"],
    info: ["תחום פעילות", "מחזור הכנסות שנתי", "סוגי מידע שהעסק מחזיק", "פעילות אונליין או סליקה", "גיבויים ו-MFA", "ניסיון אירועי סייבר בעבר"],
    faqs: [
      ["מה זה ביטוח סייבר?", "ביטוח סייבר נועד לספק הגנה ביטוחית מפני אירועי אבטחת מידע, מתקפות כופר, דליפות מידע, השבתת מערכות ותביעות צד שלישי."],
      ["האם ביטוח סייבר מתאים גם לעסק קטן?", "כן. גם עסקים קטנים עלולים להיות חשופים לאירועי סייבר, במיוחד אם הם מחזיקים מידע או תלויים במערכות דיגיטליות."],
      ["האם צריך למלא שאלון סייבר?", "ברוב המקרים כן. שאלון סייבר מסייע להבין את רמת החשיפה, בקרות אבטחת המידע והסיכון העסקי."]
    ],
  },
  "/contractors-all-risks-insurance": {
    title: "ביטוח עבודות קבלניות וקבלנים | קופר נינוה",
    description: "ביטוח עבודות קבלניות לקבלנים, יזמים ופרויקטים, כולל פתרונות לרכוש, צד שלישי, חבות מעבידים וסיכונים קבלניים.",
    h1: "ביטוח עבודות קבלניות לקבלנים, יזמים ופרויקטים",
    lead: "הגנה ביטוחית לפרויקטים בתחום הבנייה, השיפוצים והתשתיות, לרבות נזקים לעבודות, חומרים, צד שלישי, חבות מעבידים וסיכונים נוספים.",
    primary: ["לקבלת הצעה לביטוח עבודות קבלניות", "/contact-us"],
    secondary: ["בדיקת התאמה לפרויקט", "/contact-us"],
    who: ["קבלנים", "יזמים ובעלי פרויקטים", "עבודות שיפוץ והתאמה", "עבודות תשתית", "סוכני ביטוח"],
    coverage: ["נזק לעבודות הפרויקט", "נזק לחומרים באתר", "אחריות כלפי צד שלישי", "חבות מעבידים", "תקופת תחזוקה אם אושרה", "הרחבות לפי צורכי הפרויקט"],
    info: ["תיאור הפרויקט", "מיקום ושווי העבודות", "תקופת ביצוע", "סוג העבודות", "קבלני משנה", "חוזה עבודה או כתב כמויות"],
    faqs: [
      ["מה זה ביטוח עבודות קבלניות?", "ביטוח עבודות קבלניות מיועד להגן על פרויקטים בתחום הבנייה, השיפוצים והתשתיות מפני נזקים לעבודות, חשיפות צד שלישי וסיכונים נוספים."],
      ["האם הביטוח כולל צד שלישי?", "ביטוח עבודות קבלניות עשוי לכלול פרק צד שלישי, בכפוף לתנאי הפוליסה, גבולות האחריות, החריגים ואישורי החיתום."],
      ["האם ניתן לבטח פרויקט שכבר התחיל?", "האפשרות תלויה בנסיבות, בשלב הפרויקט, בהיעדר נזקים ידועים ובאישור החיתום."]
    ],
  },
  "/medical-malpractice-insurance": {
    title: "ביטוח רשלנות רפואית לרופאים ומרפאות | קופר נינוה",
    description: "ביטוח רשלנות רפואית ואחריות מקצועית רפואית לרופאים, מרפאות, מטפלים וקליניקות, בכפוף לחיתום ותנאי פוליסה.",
    h1: "ביטוח רשלנות רפואית ואחריות מקצועית רפואית",
    lead: "פתרונות ביטוח לרופאים, מרפאות, מטפלים ואנשי מקצוע בתחום הבריאות החשופים לתביעות בגין טעות מקצועית, טיפול לקוי, אבחון שגוי או מחדל.",
    primary: ["לקבלת הצעה לביטוח רשלנות רפואית", "/contact-us"],
    secondary: ["בדיקת התאמה ראשונית", "/contact-us"],
    who: ["רופאים", "מרפאות וקליניקות", "מטפלים", "מקצועות פרא-רפואיים", "תחומי רפואה משלימה בכפוף לחיתום"],
    coverage: ["תביעות בגין טעות מקצועית", "אבחון שגוי או טיפול לקוי", "הוצאות הגנה משפטית", "אחריות מקצועית רפואית", "כיסוי לפי תחום עיסוק ותנאי חיתום"],
    info: ["תחום עיסוק והתמחות", "רישיון או הכשרה", "סוג טיפולים", "מחזור ומספר מטופלים", "גבול אחריות", "ניסיון תביעות"],
    faqs: [
      ["מה זה ביטוח רשלנות רפואית?", "ביטוח רשלנות רפואית נועד להגן על רופאים, מטפלים ומרפאות מפני תביעות הנובעות מטעות מקצועית, טיפול לקוי או מחדל."],
      ["האם הביטוח מתאים גם למטפלים שאינם רופאים?", "ניתן לבחון פתרונות גם למקצועות פרא-רפואיים, מטפלים ותחומי רפואה משלימה, בכפוף לחיתום ולסוג הפעילות."],
      ["האם נדרש שאלון הצעה?", "בדרך כלל כן. השאלון מאפשר להבין את תחום הפעילות, היקף הפעילות, הכשרה מקצועית וניסיון תביעות."]
    ],
  },
  "/liability-insurance": {
    title: "ביטוח צד שלישי וחבויות לעסקים | קופר נינוה",
    description: "ביטוח צד שלישי וחבויות לעסקים, חברות ונותני שירותים מפני תביעות בגין נזקי גוף, רכוש ואחריות עסקית.",
    h1: "ביטוח צד שלישי וחבויות לעסקים",
    lead: "הגנה על עסקים, חברות ונותני שירותים מפני תביעות הנובעות מנזקי גוף, נזקי רכוש או אחריות כלפי צדדים שלישיים במסגרת הפעילות העסקית.",
    primary: ["לקבלת הצעה לביטוח חבויות", "/contact-us"],
    secondary: ["בדיקת התאמה לעסק", "/contact-us"],
    who: ["עסקים ונותני שירותים", "חברות ומשרדים", "קבלנים וספקים", "פעילות מסחרית מול קהל", "סוכני ביטוח"],
    coverage: ["תביעות בגין נזק גוף לצד שלישי", "תביעות בגין נזק רכוש", "אחריות הנובעת מפעילות העסק", "הוצאות משפט", "חבות מעבידים אם נכללת", "דרישות ביטוח חוזיות"],
    info: ["תחום פעילות", "תיאור הפעילות העסקית", "כתובת או אזורי פעילות", "מחזור הכנסות", "קבלת קהל או עבודה באתרי לקוחות", "גבול אחריות מבוקש"],
    faqs: [
      ["מה זה ביטוח צד שלישי לעסק?", "ביטוח צד שלישי לעסק נועד להגן על העסק מפני תביעות של צדדים שלישיים בגין נזקי גוף או רכוש שנגרמו במסגרת הפעילות העסקית."],
      ["האם חבות מעבידים נכללת?", "לא תמיד. חבות מעבידים יכולה להיכלל או להירכש ככיסוי נפרד, בהתאם למבנה הפוליסה ואישור החיתום."],
      ["האם ניתן להתאים את גבול האחריות לדרישות חוזה?", "כן. ניתן לבחון גבולות אחריות בהתאם לדרישות חוזיות, אופי הפעילות, רמת הסיכון ואישור החיתום."]
    ],
  },
};

const supplementalProductPages = {
  "/employers-liability-insurance": {
    title: "ביטוח חבות מעבידים | קופר נינוה",
    description: "פתרונות חבות מעבידים לעסקים, קבלנים וחברות, בכפוף לתנאי פוליסה ואישור חיתום.",
    h1: "ביטוח חבות מעבידים",
    lead: "פתרונות ביטוח לחבות מעבידים עבור עסקים, חברות וקבלנים החשופים לתביעות עובדים, תאונות עבודה ונזקי גוף במסגרת העבודה.",
    primary: ["לקבלת הצעה לחבות מעבידים", "/contact-us"],
    secondary: ["התייעצות עם צוות החיתום", "/contact-us"],
    who: ["עסקים עם עובדים", "קבלנים וספקים", "חברות שירותים", "פעילות באתרי לקוחות", "סוכני ביטוח"],
    coverage: ["תביעות עובדים בגין נזק גוף", "חשיפות הנובעות מתאונות עבודה", "דרישות חוזיות לחבות מעבידים", "הוצאות משפט והגנה", "התאמת גבולות אחריות לפי צורך"],
    info: ["תחום פעילות", "מספר עובדים", "אופי העבודה", "פעילות באתרי לקוחות", "דרישות חוזיות", "ניסיון תביעות"],
    faqs: [
      ["למי מתאים ביטוח חבות מעבידים?", "לעסקים וחברות המעסיקים עובדים או נדרשים להציג כיסוי חבות מעבידים במסגרת פעילותם."],
      ["האם הכיסוי אוטומטי?", "לא. הכיסוי כפוף לתנאי הפוליסה, גבולות האחריות, החריגים ואישור החיתום."],
      ["האם סוכן יכול להגיש בקשה?", "כן. סוכני ביטוח יכולים להעביר פרטי סיכון לבדיקה חיתומית."]
    ],
  },
  "/product-liability-insurance": {
    title: "ביטוח חבות המוצר | קופר נינוה",
    description: "פתרונות חבות מוצר ליצרנים, יבואנים, משווקים וחברות החשופים לתביעות בגין מוצר.",
    h1: "ביטוח חבות המוצר",
    lead: "כיסוי ליצרנים, יבואנים, משווקים וחברות החשופים לתביעות צד שלישי הנובעות ממוצר, פגם, שימוש או נזק שנגרם בעקבות מוצר.",
    primary: ["לקבלת הצעה לחבות המוצר", "/contact-us"],
    secondary: ["בדיקת התאמה ראשונית", "/contact-us"],
    who: ["יצרנים", "יבואנים", "משווקים", "חברות טכנולוגיה וחומרה", "עסקים עם מוצרים פיזיים"],
    coverage: ["תביעות צד שלישי בגין מוצר", "נזק גוף או רכוש", "חשיפות יבוא ושיווק", "דרישות חוזיות", "הוצאות משפט והגנה"],
    info: ["סוג המוצר", "מדינות ייצור ושיווק", "מחזור מכירות", "תקני איכות", "ניסיון תביעות", "גבול אחריות מבוקש"],
    faqs: [
      ["מה זה ביטוח חבות מוצר?", "ביטוח חבות מוצר נועד להגן מפני תביעות צד שלישי הנובעות ממוצר או שימוש בו."],
      ["האם הכיסוי מתאים גם ליבואנים?", "ניתן לבחון פתרונות ליבואנים ומשווקים בהתאם לסוג המוצר, מדינות הפעילות ואישור חיתום."],
      ["איזה מידע נדרש?", "בדרך כלל נדרש מידע על המוצר, מחזור המכירות, אזורי פעילות, תקנים וניסיון תביעות."]
    ],
  },
  "/directors-and-officers-insurance": {
    title: "ביטוח דירקטורים ונושאי משרה | קופר נינוה",
    description: "פתרונות אחריות דירקטורים ונושאי משרה לחברות, הנהלות ודירקטוריונים.",
    h1: "ביטוח דירקטורים ונושאי משרה",
    lead: "פתרונות אחריות נושאי משרה לחברות, הנהלות ודירקטוריונים מול חשיפות ניהוליות, משפטיות ורגולטוריות.",
    primary: ["לקבלת הצעה ל-D&O", "/contact-us"],
    secondary: ["בדיקת התאמה לחברה", "/contact-us"],
    who: ["חברות פרטיות", "חברות בצמיחה", "דירקטוריונים", "נושאי משרה", "סוכני ביטוח"],
    coverage: ["תביעות נגד נושאי משרה", "הוצאות הגנה משפטית", "חשיפות ניהוליות", "דרישות משקיעים או חוזים", "כיסוי לפי תנאי פוליסה"],
    info: ["מבנה החברה", "תחום פעילות", "מחזור הכנסות", "מספר נושאי משרה", "דרישות מיוחדות", "ניסיון תביעות"],
    faqs: [
      ["מהו ביטוח דירקטורים ונושאי משרה?", "כיסוי שנועד להגן על נושאי משרה מפני תביעות הקשורות להחלטות וניהול החברה."],
      ["האם הכיסוי מתאים לחברה פרטית?", "כן, ניתן לבחון פתרונות גם לחברות פרטיות בהתאם לפעילות, מבנה החברה ואישור החיתום."],
      ["האם נדרש מידע פיננסי?", "ברוב המקרים נדרש מידע בסיסי על החברה, פעילותה, מבנה הבעלות והיקף הפעילות."]
    ],
  },
  "/media-production-insurance": {
    title: "ביטוח הפקות מדיה וסרטים | קופר נינוה",
    description: "פתרונות ביטוח להפקות מדיה, סרטים, צוותים, ציוד ולוקיישנים.",
    h1: "ביטוח הפקות מדיה וסרטים",
    lead: "מענה ביטוחי להפקות, צוותי צילום, ציוד, לוקיישנים ופעילות מדיה הדורשת התאמה חיתומית לפי אופי ההפקה.",
    primary: ["לקבלת הצעה להפקה", "/contact-us"],
    secondary: ["בדיקת התאמה להפקה", "/contact-us"],
    who: ["חברות הפקה", "מפיקים", "צוותי צילום", "הפקות מסחריות", "סוכני ביטוח"],
    coverage: ["ציוד הפקה", "אחריות כלפי צד שלישי", "לוקיישנים", "צוותים וספקים", "דרישות חוזיות"],
    info: ["סוג ההפקה", "מועדי צילום", "לוקיישנים", "ציוד ושווי משוער", "מספר אנשי צוות", "דרישות חוזיות"],
    faqs: [
      ["למי מתאים ביטוח הפקות?", "לחברות הפקה, מפיקים וצוותים הזקוקים לכיסוי מותאם לפעילות צילום או מדיה."],
      ["האם אפשר לבטח הפקה קצרה?", "ניתן לבחון פתרונות בהתאם למשך ההפקה, המיקום, הציוד והסיכונים המעורבים."],
      ["איזה מידע כדאי לשלוח?", "מומלץ לשלוח תיאור הפקה, מועדים, לוקיישנים, ציוד, צוות ודרישות חוזיות."]
    ],
  },
  "/special-risks-insurance": {
    title: "ביטוח סיכונים מיוחדים | קופר נינוה",
    description: "בדיקת פתרונות חיתום וביטוח לסיכונים מיוחדים, מורכבים ולא סטנדרטיים.",
    h1: "ביטוח סיכונים מיוחדים",
    lead: "בדיקת פתרונות לסיכונים מורכבים, חריגים או לא סטנדרטיים שאינם נכנסים לתבנית ביטוח רגילה.",
    primary: ["בדיקת סיכון מיוחד", "/contact-us"],
    secondary: ["שיחה עם צוות החיתום", "/contact-us"],
    who: ["סיכונים לא סטנדרטיים", "עסקים עם דרישות מיוחדות", "פרויקטים מורכבים", "סוכני ביטוח", "חברות עם חשיפות ייחודיות"],
    coverage: ["בדיקת התאמה חיתומית", "פתרונות לפי אופי הסיכון", "דרישות חוזיות מיוחדות", "גישה לשווקים רלוונטיים", "ליווי בהשלמת מידע"],
    info: ["תיאור הסיכון", "תחום פעילות", "דרישות ביטוח", "ניסיון תביעות", "מסמכים תומכים", "לוחות זמנים"],
    faqs: [
      ["מה נחשב סיכון מיוחד?", "סיכון שאינו נכנס בקלות למוצר ביטוח רגיל או דורש בדיקה חיתומית מותאמת."],
      ["האם ניתן להבטיח פתרון?", "לא. כל פתרון כפוף לאפשרויות השוק, חיתום, תנאי פוליסה ואישור מתאים."],
      ["איך מתחילים?", "מעבירים תיאור ברור של הסיכון, דרישות הביטוח וכל מסמך רלוונטי לבדיקה ראשונית."]
    ],
  },
};

Object.assign(productPages, supplementalProductPages);

const landingPages = {
  "/lp/professional-liability": {
    title: "ביטוח אחריות מקצועית | קבלת הצעה מקופר נינוה",
    h1: "ביטוח אחריות מקצועית לעסקים ובעלי מקצוע",
    lead: "הגנה מפני תביעות הנובעות מטעות מקצועית, רשלנות, מחדל, ייעוץ שגוי או נזק כספי שנגרם ללקוח במסגרת השירות המקצועי.",
    form: "קבלת הצעה לביטוח אחריות מקצועית",
    bullets: ["יועצים ונותני שירותים", "מהנדסים ואדריכלים", "חברות שירותים וטכנולוגיה", "בעלי מקצוע עם דרישת ביטוח"],
    event: "lead_lp_professional_liability",
  },
  "/lp/cyber-insurance": {
    title: "ביטוח סייבר לעסקים | קבלת הצעה מקופר נינוה",
    h1: "ביטוח סייבר לעסקים, חברות וארגונים",
    lead: "הגנה ביטוחית מפני אירועי סייבר, מתקפות כופר, דליפות מידע, השבתת מערכות, הוצאות שחזור, אובדן הכנסות ותביעות צד שלישי.",
    form: "קבלת הצעה לביטוח סייבר",
    bullets: ["חברות טכנולוגיה", "עסקים המחזיקים מידע", "עסקים עם פעילות אונליין", "משרדי שירותים מקצועיים"],
    event: "lead_lp_cyber",
  },
  "/lp/insurance-agents": {
    title: "פתרונות חיתום לסוכני ביטוח | קופר נינוה",
    h1: "פתרונות חיתום והפקה לסוכני ביטוח",
    lead: "גישה לפתרונות ביטוח מתקדמים בתחומי אחריות מקצועית, סייבר, עבודות קבלניות, חבויות, רשלנות רפואית וסיכונים מיוחדים עם חיתום ושירות מקומי.",
    form: "רוצים לעבוד איתנו כסוכנים?",
    bullets: ["פתרונות לסיכונים מורכבים", "חיתום מקצועי", "שירות והפקה מקומית", "גישה לשווקים בינלאומיים"],
    event: "form_submit_agent",
  },
};

Object.assign(pages, productPages, landingPages);

const englishPrefix = "/en";

const englishMeta = {
  "/": {
    title: "Cooper Ninve | Israel Market Partner",
    description: "A trusted local underwriting, claims and portfolio management partner in Israel for Lloyd's syndicates, international insurers, reinsurers, MGAs and capacity providers.",
  },
  "/israel-market-partner": {
    title: "Israel Market Partner | Cooper Ninve",
    description: "Cooper Ninve supports international insurance markets in Israel with local underwriting support, claims coordination, portfolio management support, distribution access and operational execution.",
  },
  "/insurance-solutions": {
    title: "Underwriting Capabilities in Israel | Cooper Ninve",
    description: "Cooper Ninve supports selected specialty and commercial lines in Israel through local underwriting insight, risk information gathering, policy administration and market coordination, subject to appetite, authority and underwriting approval.",
  },
  "/insurance-agents": {
    title: "Distribution Access in Israel | Cooper Ninve",
    description: "Cooper Ninve works with Israeli insurance distribution channels and market participants to help international partners access organized local risk flow, underwriting information and market coordination.",
  },
  "/business-insurance": {
    title: "Business and Corporate Insurance | Cooper Ninve",
    description: "Insurance solutions for businesses, companies and complex risks in professional liability, cyber, contractors all risks, liabilities and medical malpractice.",
  },
  "/claims": {
    title: "Claims and Operations in Israel | Cooper Ninve",
    description: "Local claims coordination, servicing and operational communication support in Israel, subject to policy terms, authority and market approval.",
  },
  "/about-us": {
    title: "About Cooper Ninve | MGA and Advanced Insurance Solutions",
    description: "Cooper Ninve is an MGA and Coverholder operating in Israel and providing advanced insurance solutions for businesses, agents and complex risks.",
  },
  "/contact-us": {
    title: "Partner with Cooper Ninve in Israel | Cooper Ninve",
    description: "International insurers, syndicates, MGAs and capacity providers can contact Cooper Ninve to discuss Israel-market underwriting appetite, local distribution, policy servicing and claims coordination.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Cooper Ninve",
    description: "General privacy information for Cooper Ninve website users.",
  },
  "/terms-of-use": {
    title: "Terms of Use | Cooper Ninve",
    description: "General terms of use for the Cooper Ninve website.",
  },
  "/disclosure": {
    title: "Disclosure and Regulatory Status | Cooper Ninve",
    description: "General disclosure and regulatory status information for Cooper Ninve.",
  },
  "/public-complaints": {
    title: "Public Complaints Procedure | Cooper Ninve",
    description: "General public complaints and contact procedure information for Cooper Ninve.",
  },
  "/accessibility-statement": {
    title: "Accessibility Statement | Cooper Ninve",
    description: "General accessibility statement for the Cooper Ninve website.",
  },
  "/knowledge-center": {
    title: "Insurance Knowledge Center | Cooper Ninve",
    description: "Professional articles and information about professional liability insurance, cyber, contractors all risks, liabilities, medical malpractice and special risks.",
  },
  "/professional-liability-insurance": {
    title: "Professional Liability Insurance for Businesses and Professionals | Cooper Ninve",
    description: "Professional liability insurance for businesses, consultants, service providers and professionals. Solutions for professional risks, negligence claims and legal expenses.",
  },
  "/cyber-insurance": {
    title: "Cyber Insurance for Businesses and Companies | Cooper Ninve",
    description: "Cyber insurance for businesses against ransomware attacks, data leaks, business interruption, recovery costs and third-party claims.",
  },
  "/contractors-all-risks-insurance": {
    title: "Contractors’ All Risks Insurance | Cooper Ninve",
    description: "Contractors’ All Risks insurance for contractors, developers and projects, including solutions for property, third party, Employers’ Liability and construction risks.",
  },
  "/medical-malpractice-insurance": {
    title: "Medical Malpractice Insurance for Physicians and Clinics | Cooper Ninve",
    description: "Medical malpractice and medical professional liability insurance for physicians, clinics, therapists and healthcare practices, subject to underwriting and policy terms.",
  },
  "/liability-insurance": {
    title: "Third-Party and Business Liability Insurance | Cooper Ninve",
    description: "Third-party and business liability insurance for businesses, companies and service providers against bodily injury, property damage and liability arising from business operations.",
  },
  "/employers-liability-insurance": {
    title: "Employers’ Liability Insurance | Cooper Ninve",
    description: "Employers’ Liability solutions for businesses, contractors and companies, subject to policy terms and underwriting approval.",
  },
  "/product-liability-insurance": {
    title: "Product Liability Insurance | Cooper Ninve",
    description: "Product liability solutions for manufacturers, importers, marketers and companies exposed to product-related claims.",
  },
  "/directors-and-officers-insurance": {
    title: "Directors and Officers Insurance | Cooper Ninve",
    description: "Directors and officers liability solutions for companies, management teams and boards of directors.",
  },
  "/media-production-insurance": {
    title: "Media and Film Production Insurance | Cooper Ninve",
    description: "Insurance solutions for media productions, films, crews, equipment and locations.",
  },
  "/special-risks-insurance": {
    title: "Special Risks Insurance | Cooper Ninve",
    description: "Review of underwriting and insurance solutions for special, complex and non-standard risks.",
  },
  "/lp/professional-liability": {
    title: "Professional Liability Insurance | Get a Quote from Cooper Ninve",
    description: "Professional liability insurance suitability review from Cooper Ninve.",
  },
  "/lp/cyber-insurance": {
    title: "Cyber Insurance for Businesses | Get a Quote from Cooper Ninve",
    description: "Cyber insurance suitability review from Cooper Ninve.",
  },
  "/lp/insurance-agents": {
    title: "Underwriting Solutions for Insurance Agents | Cooper Ninve",
    description: "Underwriting and issuance solutions for insurance agents from Cooper Ninve.",
  },
};

const enText = {
  "קופר נינוה": "Cooper Ninve",
  "דף הבית": "Home",
  "לסוכני ביטוח": "For Insurance Agents",
  "לעסקים": "For Businesses",
  "פתרונות ביטוח": "Insurance Solutions",
  "תביעות": "Claims",
  "מרכז ידע": "Knowledge Center",
  "אודות": "About",
  "צור קשר": "Contact Us",
  "הגשת סיכון": "Submit a Risk",
  "לקבלת הצעה": "Get a Quote",
  "שיחה": "Call",
  "דלג לתוכן": "Skip to content",
  "קופר נינוה - דף הבית": "Cooper Ninve - Home",
  "ניווט ראשי": "Main navigation",
  "פתרונות ביטוח מתקדמים לעסקים, סוכני ביטוח וסיכונים מורכבים.": "Advanced insurance solutions for businesses, insurance agents and complex risks.",
  "רח׳ דיזנגוף 111, תל אביב": "111 Dizengoff St., Tel Aviv",
  "קודם כל יושרה": "First of All, Integrity",
  "אחריות מקצועית": "Professional Liability",
  "סייבר": "Cyber",
  "עבודות קבלניות": "Contractors’ All Risks",
  "רשלנות רפואית": "Medical Malpractice",
  "חבויות וצד שלישי": "Liability and Third-Party Coverage",
  "הגשת סיכון לבדיקה": "Submit a Risk for Review",
  "תחומי חיתום": "Underwriting Areas",
  "שירות ותביעות": "Service and Claims",
  "שירות ומסמכים": "Service and Documents",
  "דיווח תביעה": "Report a Claim",
  "מאמרים ותובנות": "Articles and Insights",
  "M.G.A בביטוח": "M.G.A in Insurance",
  "הגשת סיכון לחיתום": "Submitting a Risk for Underwriting",
  "יצירת קשר": "Contact",
  "© 2026 Cooper Ninve. כל הזכויות שמורות.": "© 2026 Cooper Ninve. All rights reserved.",
  "מדיניות פרטיות": "Privacy Policy",
  "תנאי שימוש": "Terms of Use",
  "גילוי נאות": "Disclosure",
  "תלונות הציבור": "Public Complaints",
  "הכיסוי הביטוחי כפוף לתנאי הפוליסה, חריגים, גבולות אחריות ואישור חיתום.": "Insurance coverage is subject to the policy terms, exclusions, limits of liability and underwriting approval.",
  "קודם כל יושרה.<br>קופר נינוה,<br>מרכז חיתום הבנוי לעתיד.": "First of all, integrity.<br>Cooper Ninve,<br>an underwriting center built for the future.",
  "קופר נינוה מנהלת תיקים בשם-5 מבטחי משנה בשוק בישראל, ומספקת שירות לקרוב ל-1,000 סוכני ביטוח.": "Cooper Ninve manages portfolios on behalf of 5 reinsurers in the Israeli market and provides service to nearly 1,000 insurance agents.",
  "פעילות מול חתמי Lloyd’s ושווקים בינלאומיים": "Work with Lloyd's underwriters and international markets",
  "פתרונות לסיכונים מורכבים": "Solutions for complex risks",
  "חיתום ושירות מקומי בישראל": "Local underwriting and service in Israel",
  "עבודה מול סוכני ביטוח ועסקים": "Work with insurance agents and businesses",
  "פוליסות ושירות מותאמים לשוק הישראלי": "Policies and service adapted to the Israeli market",
  "למה קופר נינוה?": "Why Cooper Ninve?",
  "חיתום ושירות מקומי": "Local underwriting and service",
  "גישה לשווקים בינלאומיים": "Access to international markets",
  "ניסיון בסיכונים מורכבים": "Experience with complex risks",
  "עבודה עם סוכנים ועסקים": "Work with agents and businesses",
  "לא עוד סוכנות ביטוח, תקראו לנו חברת חיתום.": "Not just another insurance agency. Call us an underwriting company.",
  "קופר נינוה היא <span>M.G.A</span>": "Cooper Ninve is an <span>M.G.A</span>",
  "גוף המאגר תחתיו מספר חתמים ממעבר לים אשר נתנו לו סמכויות חיתום נרחבות.": "An entity under which several overseas underwriters have granted broad underwriting authorities.",
  "כלומר, גוף המחזיק סמכויות נרחבות לרבות:תמחור, חיתום ויישוב תביעות מקומי בשם החתמים מעבר לים. M.G.A הוא ONE STOP SHOP המבצע ניהול בחינה והכוונת תיקים בהתאם לתחומי המומחיות של המבטחים העומדים מאחוריו.": "In other words, an entity holding broad authorities, including pricing, underwriting and local claims settlement on behalf of overseas underwriters. An M.G.A is a ONE STOP SHOP that manages, reviews and directs portfolios according to the areas of expertise of the insurers behind it.",
  "עוד על קופר נינוה": "More About Cooper Ninve",
  "גישה לשוק בינלאומי, שירות מקומי.": "International market access, local service.",
  "ייחוד העבודה עם שוק הלוידס": "What Makes Working with the Lloyd's Market Unique",
  "שוק Lloyd’s מאפשר גמישות חיתומית, גישה לידע מקצועי בינלאומי ויכולת לבנות פתרונות ביטוח שאינם תמיד זמינים במסגרת השוק המקומי. קופר נינוה מחברת בין היכולות האלה לבין חיתום, שירות והפקת פוליסות בישראל.": "The Lloyd's market enables underwriting flexibility, access to international professional knowledge and the ability to build insurance solutions that are not always available in the local market. Cooper Ninve connects these capabilities with underwriting, service and policy issuance in Israel.",
  "לדבר עם צוות החיתום": "Speak with the Underwriting Team",
  "עבודה מול מספר סינדיקטים של Lloyd’s, לצד גישה לשווקים בינלאומיים מעבר לשוק המקומי.": "Work with several Lloyd's syndicates, alongside access to international markets beyond the local market.",
  "חתמים בעלי ניסיון והיכרות מקצועית עם דרישות החיתום של שוק Lloyd’s בלונדון.": "Underwriters with experience and professional familiarity with the underwriting requirements of the Lloyd's market in London.",
  "אפשרות לבחון שינויים, הרחבות ותוספות שאינן זמינות תמיד בשוק המקומי.": "The ability to review changes, extensions and additions that are not always available in the local market.",
  "הפקת פוליסות בעברית, המותאמות לפעילות בישראל ולדרישות הרגולציה המקומית.": "Issuance of policies in Hebrew, adapted to activity in Israel and local regulatory requirements.",
  "פתרונות ללקוחות בעלי פעילות עסקית מחוץ לגבולות ישראל.": "Solutions for clients with business activity outside Israel.",
  "יכולת לבנות פוליסות לא סטנדרטיות בהתאמה אישית, לפי מפרטי יועצי ביטוח ובהתאם לרגולציה בישראל.": "The ability to build non-standard, customized policies according to insurance consultant specifications and Israeli regulation.",
  "תהליך עבודה לסוכני ביטוח.": "Workflow for insurance agents.",
  "איך מגישים סיכון לקופר נינוה?": "How Do You Submit a Risk to Cooper Ninve?",
  "תהליך עבודה ברור לסוכני ביטוח — מהגשת הסיכון ועד קבלת הצעה והפקת פוליסה.": "A clear workflow for insurance agents, from risk submission to receiving a quote and issuing a policy.",
  "שולחים פרטי סיכון": "Send Risk Details",
  "הסוכן מעביר מידע ראשוני על הלקוח, תחום הפעילות והכיסוי המבוקש.": "The agent sends initial information about the client, field of activity and requested coverage.",
  "משלימים מידע חיתומי": "Complete Underwriting Information",
  "צוות קופר נינוה מכוון לשאלונים, מסמכים ונתונים נדרשים.": "The Cooper Ninve team guides the process around required questionnaires, documents and data.",
  "בדיקת התאמה": "Suitability Review",
  "הסיכון נבחן מול יכולות החיתום, השווקים והפתרונות הרלוונטיים.": "The risk is reviewed against the relevant underwriting capabilities, markets and solutions.",
  "הצעה, הפקה ושירות": "Quote, Issuance and Service",
  "במקרה של התאמה, מתקבלת הצעה ומתקדם תהליך הפקת הפוליסה ושירות.": "If suitable, a quote is provided and the policy issuance and service process moves forward.",
  "ידע שמחזק החלטות חיתום.": "Knowledge that strengthens underwriting decisions.",
  "ידע שמחזק החלטות חיתום": "Knowledge that Strengthens Underwriting Decisions",
  "מאמרים, מדריכים ותובנות מקצועיות בתחומי חבויות, סייבר, אחריות מקצועית, תביעות וסיכונים מורכבים.": "Articles, guides and professional insights in liabilities, cyber, professional liability, claims and complex risks.",
  "למרכז הידע": "To the Knowledge Center",
  "מה זה M.G.A בביטוח?": "What Is M.G.A in Insurance?",
  "היכרות עם מודל חיתומי שמחבר בין סמכויות, שירות ויכולת מקצועית.": "An introduction to an underwriting model that connects authority, service and professional capability.",
  "מה חשוב לדעת לפני הגשת סיכון לחיתום?": "What Should You Know Before Submitting a Risk for Underwriting?",
  "המידע שמסייע לקדם בדיקה יעילה, מדויקת ומבוססת יותר.": "The information that helps promote a more efficient, accurate and well-founded review.",
  "ביטוח סייבר לעסקים — אילו נתונים נדרשים?": "Cyber Insurance for Businesses: What Data Is Required?",
  "נתוני פעילות, מערכות, בקרות וניסיון אירועים שכדאי להכין מראש.": "Operational data, systems, controls and incident history worth preparing in advance.",
  "אחריות מקצועית מול צד שלישי — מה ההבדל?": "Professional Liability vs. Third Party: What Is the Difference?",
  "הבחנה בסיסית שעוזרת להבין חשיפות מקצועיות ומסחריות.": "A basic distinction that helps clarify professional and commercial exposures.",
  "לקריאה": "Read More",
  "שווקים ושותפים בינלאומיים": "International Markets and Partners",
  "קופר נינוה פועלת מול שווקים, חתמים וספקי ביטוח בינלאומיים לצורך התאמת פתרונות ביטוח לסיכונים מקצועיים ומסחריים.": "Cooper Ninve works with international markets, underwriters and insurance providers to adapt insurance solutions for professional and commercial risks.",
  "השאירו פרטים לבדיקה ראשונית": "Leave Details for an Initial Review",
  "ספרו לנו מי אתם ואיזה פתרון ביטוחי נדרש, וצוות קופר נינוה יחזור אליכם להכוונה ראשונית.": "Tell us who you are and what insurance solution is required, and the Cooper Ninve team will get back to you with initial guidance.",
  "שם מלא": "Full Name",
  "טלפון": "Phone",
  "אימייל": "Email",
  "אני": "I am",
  "סוכן ביטוח": "Insurance Agent",
  "בעל עסק": "Business Owner",
  "אחר": "Other",
  "סוג ביטוח מבוקש": "Requested Insurance Type",
  "לדוגמה: סייבר, אחריות מקצועית, חבויות": "For example: cyber, professional liability, liabilities",
  "הודעה קצרה": "Short Message",
  "כתבו בקצרה את הצורך או הסיכון": "Briefly describe the need or risk",
  "הפרטים ישמשו לצורך חזרה אליכם ובדיקת התאמה בלבד.": "The details will be used only to contact you and review suitability.",
  "שליחת פנייה": "Send Inquiry",
  "הפנייה נקלטה": "Inquiry Received",
  "פתרונות ביטוח לעסקים, סוכני ביטוח וסיכונים מורכבים": "Insurance Solutions for Businesses, Insurance Agents and Complex Risks",
  "לא כל עסק, פרויקט או בעל מקצוע חשופים לאותם סיכונים. פתרון ביטוחי נכון מתחיל בהבנת תחום הפעילות, דרישות חוזיות, ניסיון תביעות ורמת המורכבות.": "Not every business, project or professional is exposed to the same risks. The right insurance solution starts with understanding the field of activity, contractual requirements, claims experience and level of complexity.",
  "פתרונות חיתום וביטוח": "Underwriting and Insurance Solutions",
  "קופר נינוה מספקת פתרונות חיתום, הפקה וניהול פוליסות במגוון תחומים מקצועיים ומסחריים — עבור סוכני ביטוח, עסקים וסיכונים מורכבים.": "Cooper Ninve provides underwriting, issuance and policy management solutions across a range of professional and commercial fields, for insurance agents, businesses and complex risks.",
  "פתרונות חיתום והפקה לסוכני ביטוח": "Underwriting and Issuance Solutions for Insurance Agents",
  "גישה לפתרונות ביטוח מתקדמים בתחומי אחריות מקצועית, סייבר, עבודות קבלניות, חבויות, רשלנות רפואית וסיכונים מיוחדים, עם יכולת חיתום ושירות מקומי.": "Access to advanced insurance solutions in professional liability, cyber, contractors all risks, liabilities, medical malpractice and special risks, with local underwriting and service capabilities.",
  "הצטרפות כסוכן / פתיחת פנייה": "Join as an Agent / Open an Inquiry",
  "למה סוכני ביטוח עובדים עם קופר נינוה?": "Why Do Insurance Agents Work with Cooper Ninve?",
  "קופר נינוה פועלת כ-MGA ו-Coverholder ומספקת לסוכני ביטוח מענה מקצועי לסיכונים שבהם נדרשת יכולת חיתומית, גישה לשווקים בינלאומיים והבנה של השוק הישראלי.": "Cooper Ninve operates as an MGA and Coverholder and provides insurance agents with a professional response for risks that require underwriting capability, access to international markets and an understanding of the Israeli market.",
  "פתרונות ביטוח מתקדמים": "Advanced Insurance Solutions",
  "תמיכה מקצועית בהגשת סיכונים": "Professional Support in Risk Submission",
  "עבודה מול סוכני ביטוח בפריסה רחבה": "Work with a Broad Network of Insurance Agents",
  "רוצים לעבוד איתנו כסוכנים?": "Want to Work with Us as Agents?",
  "השאירו פרטים ונחזור אליכם לבדיקת שיתוף פעולה או הגשת סיכון ראשון.": "Leave your details and we will get back to you regarding cooperation or submitting a first risk.",
  "שם הסוכן": "Agent Name",
  "שם הסוכנות": "Agency Name",
  "תחומי פעילות עיקריים": "Main Areas of Activity",
  "סוגי סיכונים שמעניינים אותך": "Types of Risks of Interest",
  "פתרונות ביטוח לעסקים, חברות וסיכונים מורכבים": "Insurance Solutions for Businesses, Companies and Complex Risks",
  "פתרונות ביטוח מתקדמים לעסקים וחברות תוך התאמה לאופי הפעילות, החשיפות, דרישות החוזה והצרכים המסחריים של העסק.": "Advanced insurance solutions for businesses and companies, adapted to the nature of the activity, exposures, contract requirements and commercial needs of the business.",
  "בדיקת התאמה לעסק": "Business Suitability Review",
  "איזה עסק צריך פתרון ביטוח מותאם?": "Which Business Needs a Tailored Insurance Solution?",
  "עסק טכנולוגי, משרד ייעוץ, קבלן, מרפאה או חברה מקצועית אינם צריכים את אותה פוליסה בדיוק.": "A technology business, consulting firm, contractor, clinic or professional company do not need exactly the same policy.",
  "עסקים המספקים שירות מקצועי": "Businesses Providing Professional Services",
  "חברות טכנולוגיה ועסקים דיגיטליים": "Technology Companies and Digital Businesses",
  "קבלנים ופרויקטים": "Contractors and Projects",
  "מרפאות ומקצועות טיפוליים": "Clinics and Therapeutic Professions",
  "עסקים עם פעילות מול קהל": "Businesses with Public-Facing Activity",
  "התאמת הביטוח לאופי הפעילות, הלקוחות, החשיפה המשפטית והמידע החיתומי.": "Adapting the insurance to the activity, clients, legal exposure and underwriting information.",
  "חיתום מקצועי לסיכונים שאינם תמיד סטנדרטיים.": "Professional underwriting for risks that are not always standard.",
  "מה אנחנו עושים בפועל?": "What Do We Do in Practice?",
  "קופר נינוה בוחנת סיכונים שאינם תמיד נכנסים לתבנית ביטוח רגילה, ומחברת בין צרכי הלקוח לבין פתרון חיתומי מתאים — באמצעות חיתום מקצועי, ניסיון בשווקים בינלאומיים והיכרות עם השוק הישראלי.": "Cooper Ninve reviews risks that do not always fit a standard insurance template and connects client needs with a suitable underwriting solution, through professional underwriting, experience in international markets and familiarity with the Israeli market.",
  "בדיקת פתרון מתאים": "Review a Suitable Solution",
  "לכל פתרונות הביטוח": "All Insurance Solutions",
  "דוגמאות לסיכונים שאנחנו בוחנים": "Examples of Risks We Review",
  "פתרונות מותאמים אישית": "Customized Solutions",
  "פעילות עסקית בחו״ל": "Business Activity Abroad",
  "פרויקטים מורכבים": "Complex Projects",
  "צווארון לבן ואחריות מקצועית טהורה": "White-Collar and Pure Professional Liability",
  "בדיקת התאמה לביטוח עסקי": "Business Insurance Suitability Review",
  "ככל שהמידע הראשוני מלא וברור יותר, ניתן לקדם את בדיקת החיתום בצורה יעילה יותר.": "The more complete and clear the initial information is, the more efficiently the underwriting review can move forward.",
  "שם העסק": "Business Name",
  "תחום פעילות": "Field of Activity",
  "אודות קופר נינוה": "About Cooper Ninve",
  "קופר נינוה היא MGA ו-Coverholder הפועלת בישראל ומספקת פתרונות ביטוח מתקדמים לסוכני ביטוח, עסקים וחברות בתחומי חבויות, אחריות מקצועית, סייבר וסיכונים מיוחדים.": "Cooper Ninve is an MGA and Coverholder operating in Israel and providing advanced insurance solutions for insurance agents, businesses and companies in liabilities, professional liability, cyber and special risks.",
  "דברו איתנו": "Talk to Us",
  "פתרונות הביטוח שלנו": "Our Insurance Solutions",
  "ידע, חיתום ושירות לאורך חיי הפוליסה.": "Knowledge, underwriting and service throughout the policy lifecycle.",
  "הכירו את המומחים שלנו": "Meet Our Experts",
  "צוות קופר נינוה משלב ניסיון חיתומי, ניהולי, משפטי ותפעולי — במטרה לספק לסוכני ביטוח ולעסקים שירות מקצועי לאורך כל חיי הפוליסה.": "The Cooper Ninve team combines underwriting, management, legal and operational experience to provide insurance agents and businesses with professional service throughout the policy lifecycle.",
  "הגישה שלנו": "Our Approach",
  "מקצועיות חיתומית": "Underwriting Professionalism",
  "שירות מקומי": "Local Service",
  "פתרונות מותאמים": "Tailored Solutions",
  "שקיפות בתהליך": "Process Transparency",
  "חדשנות ותהליכים דיגיטליים": "Innovation and Digital Processes",
  "תהליך עבודה מסודר שמתחיל בהבנת הסיכון וממשיך לבדיקת התאמה, הצעה, הפקה ושירות.": "An orderly work process that starts with understanding the risk and continues through suitability review, quote, issuance and service.",
  "צור קשר עם קופר נינוה": "Contact Cooper Ninve",
  "רוצים לקבל הצעה, להגיש סיכון לבדיקה או להבין איזה פתרון ביטוחי מתאים לכם? השאירו פרטים וצוות קופר נינוה יחזור אליכם.": "Want to receive a quote, submit a risk for review or understand which insurance solution is right for you? Leave your details and the Cooper Ninve team will get back to you.",
  "השארת פרטים": "Leave Details",
  "הגשת סיכון כסוכן": "Submit a Risk as an Agent",
  "השאירו פרטים בסיסיים וצוות קופר נינוה יחזור אליכם להכוונה ראשונית.": "Leave basic details and the Cooper Ninve team will get back to you with initial guidance.",
  "השאירו פרטים ונחזור אליכם": "Leave Details and We Will Get Back to You",
  "חברה / סוכנות": "Company / Agency",
  "סוג הפנייה": "Inquiry Type",
  "סוג ביטוח רלוונטי": "Relevant Insurance Type",
  "הודעה": "Message",
  "פרטי התקשרות": "Contact Details",
  "ניתן לפנות אלינו גם ישירות בטלפון או במייל.": "You can also contact us directly by phone or email.",
  "טלפון: 077-9965453": "Phone: 077-9965453",
  "אימייל: info@cooper-ninve.com": "Email: info@cooper-ninve.com",
  "כתובת: רח׳ דיזנגוף 111, תל אביב": "Address: 111 Dizengoff St., Tel Aviv",
  "מרכז ידע ביטוחי": "Insurance Knowledge Center",
  "תוכן מקצועי לסוכני ביטוח, עסקים ובעלי מקצוע על סיכונים, חיתום, מסמכים נדרשים ותהליכי בדיקת התאמה.": "Professional content for insurance agents, businesses and professionals about risks, underwriting, required documents and suitability review processes.",
  "שיחה עם צוות החיתום": "Call the Underwriting Team",
  "מאמרים ונושאים מתוכננים": "Planned Articles and Topics",
  "מרכז הידע מוכן להתרחבות SEO עתידית לפי קבוצות המילים שהוגדרו בפרויקט.": "The knowledge center is ready for future SEO expansion according to the keyword groups defined for the project.",
  "מה זה MGA בביטוח?": "What Is MGA in Insurance?",
  "הסבר מקצועי על מודל MGA, תפקידו מול סוכני ביטוח, חיתום, הפקה ושירות.": "A professional explanation of the MGA model and its role with insurance agents, underwriting, issuance and service.",
  "מה זה Lloyd’s Coverholder?": "What Is a Lloyd's Coverholder?",
  "משמעות מודל Coverholder והקשר לפתרונות ביטוח בינלאומיים.": "The meaning of the Coverholder model and its connection to international insurance solutions.",
  "איזה מידע צריך להצעת ביטוח אחריות מקצועית?": "What Information Is Needed for a Professional Liability Insurance Quote?",
  "רשימת נתונים ומסמכים שמסייעים לקדם בדיקת חיתום יעילה.": "A list of data and documents that help promote an efficient underwriting review.",
  "האם עסק קטן צריך ביטוח סייבר?": "Does a Small Business Need Cyber Insurance?",
  "מתי גם עסק קטן חשוף לאירועי סייבר, דליפות מידע והשבתת פעילות.": "When even a small business is exposed to cyber incidents, data leaks and business interruption.",
  "שאלה לצוות החיתום": "Question for the Underwriting Team",
  "מחפשים תשובה מקצועית?": "Looking for a Professional Answer?",
  "השאירו פרטים ונחזור אליכם עם הכוונה ראשונית.": "Leave your details and we will get back to you with initial guidance.",
  "תביעות ושירות לאורך חיי הפוליסה": "Claims and Service Throughout the Policy Lifecycle",
  "קופר נינוה מלווה סוכנים ולקוחות גם לאחר ההפקה - בשירות, מסמכים, תביעות וניהול תהליכים מול הגורמים הרלוונטיים.": "Cooper Ninve accompanies agents and clients after issuance as well, with service, documents, claims and process management with the relevant parties.",
  "קופר נינוה מלווה סוכנים ולקוחות גם לאחר ההפקה — בשירות, מסמכים, תביעות וניהול תהליכים מול הגורמים הרלוונטיים.": "Cooper Ninve accompanies agents and clients after issuance as well, with service, documents, claims and process management with the relevant parties.",
  "פנייה בנושא תביעה": "Claims Inquiry",
  "שירות לא מסתיים בהפקה.": "Service does not end at issuance.",
  "פתיחת פנייה מסודרת עם פרטי האירוע והמסמכים הרלוונטיים.": "Opening an orderly inquiry with event details and relevant documents.",
  "לדיווח תביעה": "Report a Claim",
  "בקשות שירות, אישורים, מסמכים והכוונה לאחר הפקת הפוליסה.": "Service requests, certificates, documents and guidance after policy issuance.",
  "פנייה לשירות": "Service Inquiry",
  "מה כדאי לצרף לפנייה?": "What Should Be Attached to an Inquiry?",
  "מידע מלא מסייע לקדם טיפול מסודר מול הגורמים הרלוונטיים.": "Complete information helps promote orderly handling with the relevant parties.",
  "מספר פוליסה או פרטי מבוטח": "Policy Number or Insured Details",
  "תיאור האירוע והמועד": "Description and Date of the Event",
  "מסמכים, תמונות או התכתבויות רלוונטיות": "Relevant Documents, Photos or Correspondence",
  "פרטי סוכן הביטוח אם קיים": "Insurance Agent Details, if Applicable",
  "פרטי התקשרות להמשך טיפול": "Contact Details for Follow-Up",
  "איך אפשר לעזור?": "How Can We Help?",
  "בחרו את הפעולה המתאימה, וצוות קופר נינוה ינתב את הפנייה לגורם הרלוונטי.": "Choose the relevant action, and the Cooper Ninve team will route the inquiry to the appropriate party.",
  "לדבר עם חתם": "Speak with an Underwriter",
  "שיחה מקצועית על סיכון, מידע חסר או התאמה ראשונית.": "A professional conversation about a risk, missing information or initial suitability.",
  "פתיחת פנייה": "Open an Inquiry",
  "סוכני ביטוח יכולים להעביר פרטי סיכון לבדיקה חיתומית.": "Insurance agents can submit risk details for underwriting review.",
  "הגשת סיכון": "Submit a Risk",
  "קבלת הצעה לעסק": "Get a Business Quote",
  "בדיקת התאמה לעסק, חברה או בעל מקצוע.": "Suitability review for a business, company or professional.",
  "בדיקה לעסק": "Business Review",
  "פתיחת פנייה בנושא תביעה או אירוע ביטוחי.": "Opening an inquiry regarding a claim or insurance event.",
  "בקשות שירות, אישורים, מסמכים ושאלות לאחר הפקה.": "Service requests, certificates, documents and questions after issuance.",
  "למי זה מתאים?": "Who Is It For?",
  "מתאים לבדיקה חיתומית בהתאם לאופי הפעילות, היקף הסיכון ותנאי הפוליסה.": "Suitable for underwriting review according to the nature of the activity, risk scope and policy terms.",
  "מה הכיסוי יכול לכלול?": "What Can the Coverage Include?",
  "הכיסוי המדויק כפוף לתנאי הפוליסה, אישור חיתום, גבולות אחריות, חריגים, השתתפויות עצמיות והפעילות הספציפית.": "The exact coverage is subject to the policy terms, underwriting approval, limits of liability, exclusions, deductibles and the specific activity.",
  "איזה מידע נדרש לקבלת הצעה?": "What Information Is Required to Receive a Quote?",
  "מידע מלא וברור מאפשר בדיקת התאמה יעילה יותר.": "Complete and clear information enables a more efficient suitability review.",
  "שלחו פרטים לבדיקה ראשונית": "Send Details for an Initial Review",
  "פתרון מתאים גם לסוכני ביטוח": "A Solution Also Suitable for Insurance Agents",
  "סוכנים יכולים להגיש סיכונים, לקבל הכוונה לגבי מידע חסר וללוות את הלקוח בתהליך ההצעה וההפקה.": "Agents can submit risks, receive guidance regarding missing information and accompany the client through the quote and issuance process.",
  "הגשת סיכון על ידי סוכן": "Risk Submission by an Agent",
  "שאלות נפוצות": "Frequently Asked Questions",
  "רוצים לבדוק התאמה?": "Want to Check Suitability?",
  "השאירו פרטים וצוות קופר נינוה יחזור אליכם לבדיקת התאמה ראשונית.": "Leave your details and the Cooper Ninve team will get back to you for an initial suitability review.",
  "קרא עוד": "Read More",
};

Object.assign(enText, {
  "אחריות מקצועית": "Professional Liability",
  "הגנה מפני תביעות הנובעות מטעות מקצועית, רשלנות, ייעוץ שגוי או מחדל במסגרת מתן שירות מקצועי.": "Protection against claims arising from professional negligence, errors, omissions, incorrect advice, or inadequate professional service.",
  "כיסוי לאירועי סייבר, מתקפות כופר, דליפות מידע, השבתת פעילות, הוצאות שחזור ותביעות צד שלישי.": "Coverage for cyber incidents, ransomware attacks, data leaks, business interruption, recovery costs and third-party claims.",
  "צד שלישי": "Third Party",
  "כיסוי לעסקים מפני תביעות צד שלישי בגין נזקי גוף, רכוש או אחריות הנובעת מהפעילות העסקית.": "Coverage for businesses against third-party claims for bodily injury, property damage or liability arising from business activity.",
  "חבות מעבידים": "Employers’ Liability",
  "פתרונות לחבות מעבידים והגנה מפני תביעות עובדים, בכפוף לתנאי הפוליסה ואישור חיתום.": "Employers’ Liability solutions and protection against employee claims, subject to policy terms and underwriting approval.",
  "חבות המוצר": "Product Liability",
  "כיסוי ליצרנים, יבואנים ומשווקים החשופים לתביעות הנובעות ממוצר, פגם או נזק לצד שלישי.": "Coverage for manufacturers, importers and marketers exposed to claims arising from a product, defect or third-party damage.",
  "פתרונות ביטוח לפרויקטים, קבלנים, יזמים ועבודות תשתית, כולל רכוש, צד שלישי וחבות מעבידים.": "Insurance solutions for projects, contractors, developers and infrastructure works, including property, third party and Employers’ Liability.",
  "פתרונות לרופאים, מטפלים, מרפאות וגורמים רפואיים החשופים לתביעות בגין רשלנות מקצועית.": "Solutions for physicians, therapists, clinics and medical providers exposed to claims for professional negligence.",
  "דירקטורים ונושאי משרה": "Directors and Officers",
  "פתרונות אחריות נושאי משרה לחברות, הנהלות ודירקטוריונים מול חשיפות ניהוליות ומשפטיות.": "Directors and officers liability solutions for companies, management teams and boards facing managerial and legal exposures.",
  "הפקות מדיה וסרטים": "Media and Film Productions",
  "מענה ביטוחי להפקות, צוותים, ציוד, לוקיישנים ופעילות מדיה הדורשת התאמה חיתומית.": "Insurance response for productions, crews, equipment, locations and media activity requiring underwriting adaptation.",
  "סיכונים מיוחדים": "Special Risks",
  "בדיקת פתרונות לסיכונים מורכבים, חריגים או לא סטנדרטיים שאינם נכנסים לתבנית רגילה.": "Review of solutions for complex, unusual or non-standard risks that do not fit a regular template.",
});

Object.assign(enText, {
  "קודם כל יושרה.": "First of all, integrity.",
  "קופר נינוה,": "Cooper Ninve,",
  "מרכז חיתום הבנוי לעתיד.": "an underwriting center built for the future.",
  "פתרונות לסוכני ביטוח": "Solutions for Insurance Agents",
  "סוכני ביטוח": "Insurance Agents",
  "קופר נינוה היא": "Cooper Ninve is an",
  "ביטוח אחריות מקצועית לעסקים, יועצים ובעלי מקצוע": "Professional Liability Insurance for Businesses, Consultants and Professionals",
  "הגנה מפני תביעות הנובעות מטעות מקצועית, רשלנות, מחדל, ייעוץ שגוי או נזק כספי שנגרם לצד שלישי במסגרת השירות המקצועי.": "Protection against claims arising from professional negligence, errors, omissions, incorrect advice, or financial loss caused to a third party in the course of professional services.",
  "לקבלת הצעה לביטוח אחריות מקצועית": "Get a Professional Liability Insurance Quote",
  "התייעצות עם צוות החיתום": "Consult with the Underwriting Team",
  "יועצים ונותני שירותים": "Consultants and Service Providers",
  "מהנדסים ואדריכלים": "Engineers and Architects",
  "חברות שירותים": "Service Companies",
  "מקצועות טיפוליים ובריאותיים": "Therapeutic and Healthcare Professions",
  "חברות טכנולוגיה ושירותים דיגיטליים": "Technology and Digital Services Companies",
  "תביעות בגין רשלנות מקצועית": "Professional Negligence Claims",
  "טעות או מחדל במסגרת השירות": "Error or Omission in the Service",
  "ייעוץ שגוי או המלצה מקצועית שגרמה לנזק": "Incorrect Advice or Professional Recommendation That Caused Damage",
  "נזק כספי ללקוח או לצד שלישי": "Financial Loss to a Client or Third Party",
  "הוצאות משפט והגנה משפטית": "Legal Expenses and Legal Defense Costs",
  "תחום פעילות מדויק": "Exact Practice Area",
  "תיאור השירותים": "Description of Services",
  "מחזור הכנסות שנתי": "Annual Revenue",
  "גבול אחריות מבוקש": "Requested Limit of Liability",
  "ניסיון תביעות קודם": "Prior Claims Experience",
  "חוזים או דרישות ביטוח מיוחדות": "Contracts or Special Insurance Requirements",
  "מה זה ביטוח אחריות מקצועית?": "What Is Professional Liability Insurance?",
  "ביטוח אחריות מקצועית נועד להגן על בעל מקצוע או עסק מפני תביעות הנובעות מטעות מקצועית, רשלנות, מחדל או ייעוץ שגוי במסגרת מתן שירות מקצועי.": "Professional liability insurance is intended to protect a professional or business against claims arising from professional negligence, errors, omissions or incorrect advice in the provision of professional services.",
  "מה ההבדל בין אחריות מקצועית לצד שלישי?": "What Is the Difference Between Professional Liability and Third Party?",
  "ביטוח צד שלישי מתייחס לרוב לנזקי גוף או רכוש, בעוד שביטוח אחריות מקצועית מתייחס לנזק שנגרם כתוצאה מטעות מקצועית או שירות מקצועי לקוי.": "Third-party insurance usually relates to bodily injury or property damage, while professional liability insurance relates to damage caused by errors, omissions, or inadequate professional service.",
  "האם סוכן ביטוח יכול להגיש בקשה עבור לקוח?": "Can an Insurance Agent Submit a Request for a Client?",
  "כן. סוכני ביטוח יכולים להעביר מידע על הסיכון לצורך בדיקת התאמה וקבלת הצעה.": "Yes. Insurance agents can send information about the risk for suitability review and quote preparation.",
  "ביטוח סייבר לעסקים, חברות וארגונים": "Cyber Insurance for Businesses, Companies and Organizations",
  "הגנה ביטוחית לעסקים וחברות מפני אירועי אבטחת מידע, מתקפות כופר, דליפות מידע, השבתת פעילות, פגיעה במערכות מידע ותביעות צד שלישי.": "Insurance protection for businesses and companies against information security incidents, ransomware attacks, data leaks, business interruption, damage to information systems and third-party claims.",
  "לקבלת הצעה לביטוח סייבר": "Get a Cyber Insurance Quote",
  "בדיקת התאמה ראשונית": "Initial Suitability Review",
  "חברות טכנולוגיה": "Technology Companies",
  "עסקים המחזיקים מידע אישי": "Businesses Holding Personal Data",
  "חנויות אונליין ועסקים דיגיטליים": "Online Stores and Digital Businesses",
  "משרדי שירותים מקצועיים": "Professional Services Firms",
  "ארגונים עם תלות במערכות מידע": "Organizations Dependent on Information Systems",
  "תגובה ראשונית לאירוע סייבר": "Initial Response to a Cyber Incident",
  "הוצאות מומחי סייבר ו-IT": "Cyber and IT Expert Costs",
  "שחזור מידע ומערכות": "Data and Systems Recovery",
  "אירועי כופר וסחיטה דיגיטלית": "Ransomware and Digital Extortion Events",
  "דליפת מידע ופגיעה בפרטיות": "Data Leakage and Privacy Breach",
  "תביעות צד שלישי": "Third-Party Claims",
  "סוגי מידע שהעסק מחזיק": "Types of Data Held by the Business",
  "פעילות אונליין או סליקה": "Online Activity or Payment Processing",
  "גיבויים ו-MFA": "Backups and MFA",
  "ניסיון אירועי סייבר בעבר": "Prior Cyber Incident Experience",
  "מה זה ביטוח סייבר?": "What Is Cyber Insurance?",
  "ביטוח סייבר נועד לספק הגנה ביטוחית מפני אירועי אבטחת מידע, מתקפות כופר, דליפות מידע, השבתת מערכות ותביעות צד שלישי.": "Cyber insurance is intended to provide insurance protection against information security incidents, ransomware attacks, data leaks, system outages and third-party claims.",
  "האם ביטוח סייבר מתאים גם לעסק קטן?": "Is Cyber Insurance Suitable for a Small Business Too?",
  "כן. גם עסקים קטנים עלולים להיות חשופים לאירועי סייבר, במיוחד אם הם מחזיקים מידע או תלויים במערכות דיגיטליות.": "Yes. Small businesses may also be exposed to cyber incidents, especially if they hold data or depend on digital systems.",
  "האם צריך למלא שאלון סייבר?": "Is a Cyber Questionnaire Required?",
  "ברוב המקרים כן. שאלון סייבר מסייע להבין את רמת החשיפה, בקרות אבטחת המידע והסיכון העסקי.": "In most cases, yes. A cyber questionnaire helps understand the exposure level, information security controls and business risk.",
});

Object.assign(enText, {
  "ביטוח עבודות קבלניות לקבלנים, יזמים ופרויקטים": "Contractors’ All Risks Insurance for Contractors, Developers and Projects",
  "הגנה ביטוחית לפרויקטים בתחום הבנייה, השיפוצים והתשתיות, לרבות נזקים לעבודות, חומרים, צד שלישי, חבות מעבידים וסיכונים נוספים.": "Insurance protection for construction, renovation and infrastructure projects, including damage to the project works and materials on site, third-party liability, Employers’ Liability and additional risks.",
  "לקבלת הצעה לביטוח עבודות קבלניות": "Get a Contractors’ All Risks Insurance Quote",
  "בדיקת התאמה לפרויקט": "Project Suitability Review",
  "קבלנים": "Contractors",
  "יזמים ובעלי פרויקטים": "Developers and Project Owners",
  "עבודות שיפוץ והתאמה": "Renovation and Fit-Out Works",
  "עבודות תשתית": "Infrastructure Works",
  "נזק לעבודות הפרויקט": "Damage to the Project Works",
  "נזק לחומרים באתר": "Damage to Materials on Site",
  "אחריות כלפי צד שלישי": "Liability Toward Third Parties",
  "תקופת תחזוקה אם אושרה": "Maintenance Period if Approved",
  "הרחבות לפי צורכי הפרויקט": "Extensions According to Project Needs",
  "תיאור הפרויקט": "Project Description",
  "מיקום ושווי העבודות": "Location and Value of the Works",
  "תקופת ביצוע": "Execution Period",
  "סוג העבודות": "Type of Works",
  "קבלני משנה": "Subcontractors",
  "חוזה עבודה או כתב כמויות": "Work Contract or Bill of Quantities",
  "מה זה ביטוח עבודות קבלניות?": "What Is Contractors’ All Risks Insurance?",
  "ביטוח עבודות קבלניות מיועד להגן על פרויקטים בתחום הבנייה, השיפוצים והתשתיות מפני נזקים לעבודות, חשיפות צד שלישי וסיכונים נוספים.": "Contractors’ All Risks insurance is intended to protect construction, renovation and infrastructure projects against damage to the project works, third-party exposures and additional risks.",
  "האם הביטוח כולל צד שלישי?": "Does the Insurance Include Third Party?",
  "ביטוח עבודות קבלניות עשוי לכלול פרק צד שלישי, בכפוף לתנאי הפוליסה, גבולות האחריות, החריגים ואישורי החיתום.": "Contractors’ All Risks insurance may include a third-party section, subject to policy terms, limits of liability, exclusions and underwriting approvals.",
  "האם ניתן לבטח פרויקט שכבר התחיל?": "Can a Project That Has Already Started Be Insured?",
  "האפשרות תלויה בנסיבות, בשלב הפרויקט, בהיעדר נזקים ידועים ובאישור החיתום.": "The option depends on the circumstances, project stage, absence of known damage and underwriting approval.",
  "ביטוח רשלנות רפואית ואחריות מקצועית רפואית": "Medical Malpractice and Medical Professional Liability Insurance",
  "פתרונות ביטוח לרופאים, מרפאות, מטפלים ואנשי מקצוע בתחום הבריאות החשופים לתביעות בגין טעות מקצועית, טיפול לקוי, אבחון שגוי או מחדל.": "Insurance solutions for physicians, clinics, therapists and healthcare professionals exposed to claims arising from professional error, negligent treatment, misdiagnosis, omission, or other medical professional liability exposure.",
  "לקבלת הצעה לביטוח רשלנות רפואית": "Get a Medical Malpractice Insurance Quote",
  "רופאים": "Physicians",
  "מרפאות וקליניקות": "Clinics and Practices",
  "מטפלים": "Therapists",
  "מקצועות פרא-רפואיים": "Paramedical Professions",
  "תחומי רפואה משלימה בכפוף לחיתום": "Complementary Medicine Fields Subject to Underwriting",
  "תביעות בגין טעות מקצועית": "Claims Arising from Professional Error",
  "אבחון שגוי או טיפול לקוי": "Misdiagnosis or Negligent Treatment",
  "הוצאות הגנה משפטית": "Legal Defense Costs",
  "אחריות מקצועית רפואית": "Medical Professional Liability",
  "כיסוי לפי תחום עיסוק ותנאי חיתום": "Coverage According to Practice Area and Underwriting Terms",
  "תחום עיסוק והתמחות": "Occupation and Specialty",
  "רישיון או הכשרה": "License or Training",
  "סוג טיפולים": "Types of Treatments",
  "מחזור ומספר מטופלים": "Revenue and Number of Patients",
  "גבול אחריות": "Limit of Liability",
  "ניסיון תביעות": "Claims Experience",
  "מה זה ביטוח רשלנות רפואית?": "What Is Medical Malpractice Insurance?",
  "ביטוח רשלנות רפואית נועד להגן על רופאים, מטפלים ומרפאות מפני תביעות הנובעות מטעות מקצועית, טיפול לקוי או מחדל.": "Medical malpractice insurance is intended to protect physicians, therapists and clinics against claims arising from professional error, negligent treatment or omission.",
  "האם הביטוח מתאים גם למטפלים שאינם רופאים?": "Is the Insurance Also Suitable for Therapists Who Are Not Physicians?",
  "ניתן לבחון פתרונות גם למקצועות פרא-רפואיים, מטפלים ותחומי רפואה משלימה, בכפוף לחיתום ולסוג הפעילות.": "Solutions can also be reviewed for paramedical professions, therapists and complementary medicine fields, subject to underwriting and type of activity.",
  "האם נדרש שאלון הצעה?": "Is a Proposal Form Required?",
  "בדרך כלל כן. השאלון מאפשר להבין את תחום הפעילות, היקף הפעילות, הכשרה מקצועית וניסיון תביעות.": "Usually yes. The questionnaire makes it possible to understand the practice area, scope of activity, professional training and claims experience.",
  "ביטוח צד שלישי וחבויות לעסקים": "Third-Party and Business Liability Insurance",
  "הגנה על עסקים, חברות ונותני שירותים מפני תביעות הנובעות מנזקי גוף, נזקי רכוש או אחריות כלפי צדדים שלישיים במסגרת הפעילות העסקית.": "Protection for businesses, companies and service providers against claims arising from bodily injury, property damage or liability arising from business operations toward third parties.",
  "לקבלת הצעה לביטוח חבויות": "Get a Liability Insurance Quote",
  "עסקים ונותני שירותים": "Businesses and Service Providers",
  "חברות ומשרדים": "Companies and Offices",
  "קבלנים וספקים": "Contractors and Suppliers",
  "פעילות מסחרית מול קהל": "Commercial Activity with the Public",
  "תביעות בגין נזק גוף לצד שלישי": "Claims for Third-Party Bodily Injury",
  "תביעות בגין נזק רכוש": "Claims for Property Damage",
  "אחריות הנובעת מפעילות העסק": "Liability Arising from Business Operations",
  "הוצאות משפט": "Legal Expenses",
  "חבות מעבידים אם נכללת": "Employers’ Liability if Included",
  "דרישות ביטוח חוזיות": "Contractual Insurance Requirements",
  "תיאור הפעילות העסקית": "Description of Business Activity",
  "כתובת או אזורי פעילות": "Address or Areas of Activity",
  "מחזור הכנסות": "Revenue",
  "קבלת קהל או עבודה באתרי לקוחות": "Public Reception or Work at Client Sites",
  "מה זה ביטוח צד שלישי לעסק?": "What Is Third-Party Insurance for a Business?",
  "ביטוח צד שלישי לעסק נועד להגן על העסק מפני תביעות של צדדים שלישיים בגין נזקי גוף או רכוש שנגרמו במסגרת הפעילות העסקית.": "Third-party insurance for a business is intended to protect the business against third-party claims for bodily injury or property damage caused in the course of business activity.",
  "האם חבות מעבידים נכללת?": "Is Employers’ Liability Included?",
  "לא תמיד. חבות מעבידים יכולה להיכלל או להירכש ככיסוי נפרד, בהתאם למבנה הפוליסה ואישור החיתום.": "Not always. Employers’ Liability may be included or purchased as separate coverage, depending on the policy structure and underwriting approval.",
  "האם ניתן להתאים את גבול האחריות לדרישות חוזה?": "Can the Limit of Liability Be Adapted to Contract Requirements?",
  "כן. ניתן לבחון גבולות אחריות בהתאם לדרישות חוזיות, אופי הפעילות, רמת הסיכון ואישור החיתום.": "Yes. Limits of liability can be reviewed according to contractual requirements, the nature of the activity, risk level and underwriting approval.",
});

Object.assign(enText, {
  "ביטוח חבות מעבידים": "Employers’ Liability Insurance",
  "פתרונות ביטוח לחבות מעבידים עבור עסקים, חברות וקבלנים החשופים לתביעות עובדים, תאונות עבודה ונזקי גוף במסגרת העבודה.": "Employers’ Liability insurance solutions for businesses, companies and contractors exposed to employee claims, workplace accidents and bodily injury in the course of work.",
  "לקבלת הצעה לחבות מעבידים": "Get an Employers’ Liability Quote",
  "עסקים עם עובדים": "Businesses with Employees",
  "פעילות באתרי לקוחות": "Work at Client Sites",
  "תביעות עובדים בגין נזק גוף": "Employee Bodily Injury Claims",
  "חשיפות הנובעות מתאונות עבודה": "Exposures Arising from Workplace Accidents",
  "דרישות חוזיות לחבות מעבידים": "Contractual Requirements for Employers’ Liability",
  "התאמת גבולות אחריות לפי צורך": "Adapting Limits of Liability as Needed",
  "מספר עובדים": "Number of Employees",
  "אופי העבודה": "Nature of the Work",
  "דרישות חוזיות": "Contractual Requirements",
  "למי מתאים ביטוח חבות מעבידים?": "Who Is Employers’ Liability Insurance Suitable For?",
  "לעסקים וחברות המעסיקים עובדים או נדרשים להציג כיסוי חבות מעבידים במסגרת פעילותם.": "For businesses and companies that employ workers or are required to provide evidence of Employers’ Liability coverage as part of their activity.",
  "האם הכיסוי אוטומטי?": "Is the Coverage Automatic?",
  "לא. הכיסוי כפוף לתנאי הפוליסה, גבולות האחריות, החריגים ואישור החיתום.": "No. Coverage is subject to the policy terms, limits of liability, exclusions and underwriting approval.",
  "האם סוכן יכול להגיש בקשה?": "Can an Agent Submit a Request?",
  "כן. סוכני ביטוח יכולים להעביר פרטי סיכון לבדיקה חיתומית.": "Yes. Insurance agents can send risk details for underwriting review.",
  "ביטוח חבות המוצר": "Product Liability Insurance",
  "כיסוי ליצרנים, יבואנים, משווקים וחברות החשופים לתביעות צד שלישי הנובעות ממוצר, פגם, שימוש או נזק שנגרם בעקבות מוצר.": "Coverage for manufacturers, importers, marketers and companies exposed to third-party claims arising from a product, defect, use or damage caused by a product.",
  "לקבלת הצעה לחבות המוצר": "Get a Product Liability Quote",
  "יצרנים": "Manufacturers",
  "יבואנים": "Importers",
  "משווקים": "Marketers",
  "חברות טכנולוגיה וחומרה": "Technology and Hardware Companies",
  "עסקים עם מוצרים פיזיים": "Businesses with Physical Products",
  "תביעות צד שלישי בגין מוצר": "Third-Party Product Claims",
  "נזק גוף או רכוש": "Bodily Injury or Property Damage",
  "חשיפות יבוא ושיווק": "Import and Marketing Exposures",
  "הוצאות משפט והגנה": "Legal Expenses and Defense",
  "סוג המוצר": "Product Type",
  "מדינות ייצור ושיווק": "Countries of Manufacture and Marketing",
  "מחזור מכירות": "Sales Turnover",
  "תקני איכות": "Quality Standards",
  "מה זה ביטוח חבות מוצר?": "What Is Product Liability Insurance?",
  "ביטוח חבות מוצר נועד להגן מפני תביעות צד שלישי הנובעות ממוצר או שימוש בו.": "Product liability insurance is intended to protect against third-party claims arising from a product or its use.",
  "האם הכיסוי מתאים גם ליבואנים?": "Is the Coverage Also Suitable for Importers?",
  "ניתן לבחון פתרונות ליבואנים ומשווקים בהתאם לסוג המוצר, מדינות הפעילות ואישור חיתום.": "Solutions for importers and marketers can be reviewed according to product type, countries of activity and underwriting approval.",
  "איזה מידע נדרש?": "What Information Is Required?",
  "בדרך כלל נדרש מידע על המוצר, מחזור המכירות, אזורי פעילות, תקנים וניסיון תביעות.": "Usually, information is required about the product, sales turnover, activity areas, standards and claims experience.",
  "ביטוח דירקטורים ונושאי משרה": "Directors and Officers Insurance",
  "פתרונות אחריות נושאי משרה לחברות, הנהלות ודירקטוריונים מול חשיפות ניהוליות, משפטיות ורגולטוריות.": "Directors and officers liability solutions for companies, management teams and boards facing managerial, legal and regulatory exposures.",
  "לקבלת הצעה ל-D&O": "Get a D&O Quote",
  "בדיקת התאמה לחברה": "Company Suitability Review",
  "חברות פרטיות": "Private Companies",
  "חברות בצמיחה": "Growth Companies",
  "דירקטוריונים": "Boards of Directors",
  "נושאי משרה": "Officers",
  "תביעות נגד נושאי משרה": "Claims Against Officers",
  "חשיפות ניהוליות": "Managerial Exposures",
  "דרישות משקיעים או חוזים": "Investor or Contract Requirements",
  "כיסוי לפי תנאי פוליסה": "Coverage According to Policy Terms",
  "מבנה החברה": "Company Structure",
  "מספר נושאי משרה": "Number of Officers",
  "דרישות מיוחדות": "Special Requirements",
  "מהו ביטוח דירקטורים ונושאי משרה?": "What Is Directors and Officers Insurance?",
  "כיסוי שנועד להגן על נושאי משרה מפני תביעות הקשורות להחלטות וניהול החברה.": "Coverage intended to protect officers against claims related to company decisions and management.",
  "האם הכיסוי מתאים לחברה פרטית?": "Is the Coverage Suitable for a Private Company?",
  "כן, ניתן לבחון פתרונות גם לחברות פרטיות בהתאם לפעילות, מבנה החברה ואישור החיתום.": "Yes, solutions can also be reviewed for private companies according to activity, company structure and underwriting approval.",
  "האם נדרש מידע פיננסי?": "Is Financial Information Required?",
  "ברוב המקרים נדרש מידע בסיסי על החברה, פעילותה, מבנה הבעלות והיקף הפעילות.": "In most cases, basic information is required about the company, its activity, ownership structure and scope of activity.",
  "ביטוח הפקות מדיה וסרטים": "Media and Film Production Insurance",
  "מענה ביטוחי להפקות, צוותי צילום, ציוד, לוקיישנים ופעילות מדיה הדורשת התאמה חיתומית לפי אופי ההפקה.": "Insurance response for productions, film crews, equipment, locations and media activity requiring underwriting adaptation according to the nature of the production.",
  "לקבלת הצעה להפקה": "Get a Production Quote",
  "בדיקת התאמה להפקה": "Production Suitability Review",
  "חברות הפקה": "Production Companies",
  "מפיקים": "Producers",
  "צוותי צילום": "Film Crews",
  "הפקות מסחריות": "Commercial Productions",
  "ציוד הפקה": "Production Equipment",
  "לוקיישנים": "Locations",
  "צוותים וספקים": "Crews and Suppliers",
  "סוג ההפקה": "Production Type",
  "מועדי צילום": "Shooting Dates",
  "ציוד ושווי משוער": "Equipment and Estimated Value",
  "מספר אנשי צוות": "Number of Crew Members",
  "למי מתאים ביטוח הפקות?": "Who Is Production Insurance Suitable For?",
  "לחברות הפקה, מפיקים וצוותים הזקוקים לכיסוי מותאם לפעילות צילום או מדיה.": "For production companies, producers and crews that need coverage adapted to filming or media activity.",
  "האם אפשר לבטח הפקה קצרה?": "Can a Short Production Be Insured?",
  "ניתן לבחון פתרונות בהתאם למשך ההפקה, המיקום, הציוד והסיכונים המעורבים.": "Solutions can be reviewed according to production duration, location, equipment and the risks involved.",
  "איזה מידע כדאי לשלוח?": "What Information Should Be Sent?",
  "מומלץ לשלוח תיאור הפקה, מועדים, לוקיישנים, ציוד, צוות ודרישות חוזיות.": "It is recommended to send a production description, dates, locations, equipment, crew and contractual requirements.",
  "ביטוח סיכונים מיוחדים": "Special Risks Insurance",
  "בדיקת פתרונות לסיכונים מורכבים, חריגים או לא סטנדרטיים שאינם נכנסים לתבנית ביטוח רגילה.": "Review of solutions for complex, unusual or non-standard risks that do not fit a regular insurance template.",
  "בדיקת סיכון מיוחד": "Special Risk Review",
  "סיכונים לא סטנדרטיים": "Non-Standard Risks",
  "עסקים עם דרישות מיוחדות": "Businesses with Special Requirements",
  "חברות עם חשיפות ייחודיות": "Companies with Unique Exposures",
  "בדיקת התאמה חיתומית": "Underwriting Suitability Review",
  "פתרונות לפי אופי הסיכון": "Solutions According to Risk Characteristics",
  "דרישות חוזיות מיוחדות": "Special Contractual Requirements",
  "גישה לשווקים רלוונטיים": "Access to Relevant Markets",
  "ליווי בהשלמת מידע": "Support in Completing Information",
  "תיאור הסיכון": "Risk Description",
  "דרישות ביטוח": "Insurance Requirements",
  "מסמכים תומכים": "Supporting Documents",
  "לוחות זמנים": "Timelines",
  "מה נחשב סיכון מיוחד?": "What Is Considered a Special Risk?",
  "סיכון שאינו נכנס בקלות למוצר ביטוח רגיל או דורש בדיקה חיתומית מותאמת.": "A risk that does not easily fit a standard insurance product or requires a tailored underwriting review.",
  "האם ניתן להבטיח פתרון?": "Can a Solution Be Guaranteed?",
  "לא. כל פתרון כפוף לאפשרויות השוק, חיתום, תנאי פוליסה ואישור מתאים.": "No. Every solution is subject to market availability, underwriting, policy terms and appropriate approval.",
  "איך מתחילים?": "How Do You Start?",
  "מעבירים תיאור ברור של הסיכון, דרישות הביטוח וכל מסמך רלוונטי לבדיקה ראשונית.": "Send a clear description of the risk, insurance requirements and any relevant document for initial review.",
});

Object.assign(enText, {
  "יהושע נתן": "Yehoshua Natan",
  "יו״ר": "Chairman",
  "מוביל את פעילות החברה והחזון האסטרטגי של קופר נינוה.": "Leads the company's activity and Cooper Ninve's strategic vision.",
  "נינה קודנר": "Nina Kodner",
  "חתמת ראשית": "Chief Underwriter",
  "מובילה את תחום החיתום המקצועי והמסחרי של החברה.": "Leads the company's professional and commercial underwriting activity.",
  "פריסילה יוסף": "Priscilla Yosef",
  "סמנכ״לית תפעול": "VP Operations",
  "אחראית על ניהול תהליכי תפעול, שירות וממשקי עבודה בחברה.": "Responsible for managing operations, service and work interfaces in the company.",
  "אילן זיו": "Ilan Ziv",
  "מנכ״ל": "CEO",
  "מוביל את ניהול החברה, פיתוח עסקי וקשרי שוק.": "Leads company management, business development and market relationships.",
  "נטע אילני": "Neta Ilani",
  "יועצת משפטית": "Legal Counsel",
  "אחראית על היבטים משפטיים, רגולציה וליווי מקצועי.": "Responsible for legal aspects, regulation and professional guidance.",
  "אורי קליין": "Uri Klein",
  "מנמ\"ר": "CIO",
  "מנמ": "CIO",
  "מוביל את מערכות העסק.": "Leads the business systems.",
  "אבישי פרץ": "Avishai Peretz",
  "סמנכ״ל כספים": "CFO",
  "אחראי על תחום הכספים, בקרה, גבייה ותהליכים פיננסיים.": "Responsible for finance, control, collection and financial processes.",
  "ליעד לק": "Liad Lek",
  "חתם חבויות ראשי": "Chief Liability Underwriter",
  "עוסק בחיתום, בדיקת סיכונים וליווי מקצועי של תיקי ביטוח.": "Handles underwriting, risk review and professional support for insurance portfolios.",
});

Object.assign(enText, {
  "למי הסיכון מתאים לבחינה?": "Which Risks Are Suitable for Review?",
  "כל פנייה נבחנת לפי אופי הפעילות, המידע החיתומי, תיאבון הסיכון ותנאי הפוליסה הרלוונטיים.": "Each inquiry is reviewed according to the activity, underwriting information, risk appetite and applicable policy terms.",
  "מתאים לבדיקת חיתום בהתאם לאופי הפעילות, היקף הסיכון, המסמכים והאישורים הרלוונטיים.": "Suitable for underwriting review according to the activity, risk scope, documentation and relevant approvals.",
  "מה יכול להיבחן במסגרת החיתום?": "What May Be Reviewed in Underwriting?",
  "הכיסוי המדויק כפוף לתנאי הפוליסה, סמכויות החיתום, אישור השוק הרלוונטי, גבולות אחריות, חריגים, השתתפויות עצמיות והפעילות הספציפית.": "Exact coverage is subject to policy terms, underwriting authority, relevant market approval, limits, exclusions, deductibles and the specific activity.",
  "איזה מידע חיתומי נדרש?": "What Underwriting Information Is Required?",
  "מידע מלא וברור מאפשר לבחון את הסיכון בצורה מקצועית ולזהות האם קיימת התאמה לתיאבון הסיכון ולשווקים הרלוונטיים.": "Complete and clear information supports professional risk review and helps identify fit with risk appetite and relevant markets.",
  "שליחת פרטים לבחינת חיתום": "Submit Details for Underwriting Review",
  "מה משפיע על החלטת החיתום?": "What Affects the Underwriting Decision?",
  "החלטה חיתומית אינה מבוססת רק על שם המוצר. היא נשענת על פרופיל הסיכון, המסמכים, ניסיון התביעות, דרישות השוק והסמכויות הרלוונטיות.": "An underwriting decision is not based only on the product name. It depends on the risk profile, documents, claims experience, market requirements and relevant authority.",
  "תחום פעילות ואופי החשיפה": "Activity and Exposure Profile",
  "מחזור, היקף פעילות וגבולות אחריות": "Turnover, Activity Scope and Limits",
  "ניסיון תביעות קודם": "Prior Claims Experience",
  "דרישות חוזיות או אישורי ביטוח": "Contractual or Certificate Requirements",
  "מידע מקצועי, שאלונים ומסמכים תומכים": "Professional Information, Questionnaires and Supporting Documents",
  "תיאבון סיכון, סמכויות חיתום ואישור השוק הרלוונטי": "Risk Appetite, Underwriting Authority and Relevant Market Approval",
  "תמיכה לסוכנים ולעסקים בתהליך החיתום": "Support for Agents and Businesses in the Underwriting Process",
  "קופר נינוה מסייעת באיסוף מידע, הבנת החשיפה, הכוונה למסמכים נדרשים, בחינת התאמה מול שווקים רלוונטיים והמשך שירות לאורך חיי הפוליסה.": "Cooper Ninve supports information gathering, exposure review, document guidance, suitability review with relevant markets and ongoing servicing throughout the policy lifecycle.",
  "רוצים לבחון סיכון?": "Want to Review a Risk?",
  "השאירו פרטים וצוות קופר נינוה יחזור אליכם לבדיקת חיתום ראשונית, בכפוף למידע שיימסר ולסמכויות הרלוונטיות.": "Leave your details and the Cooper Ninve team will respond for an initial underwriting review, subject to provided information and relevant authority.",
  "הגשת פנייה לחיתום": "Submit an Underwriting Inquiry",
  "שווקים ושותפים בינלאומיים": "International Markets and Partners",
  "קופר נינוה פועלת מול שווקים ושותפים בינלאומיים נבחרים, בכפוף לסמכויות חיתום, תיאבון סיכון, אישור השוק ותנאי הפוליסה הרלוונטיים. הצגת לוגו אינה מלמדת שכל שותף תומך בכל מוצר או סיכון.": "Cooper Nineveh works with selected international insurance markets and partners, subject to underwriting authority, product appetite, market approval and applicable policy terms. Displayed logos do not imply that every partner supports every product or risk.",
});

const app = document.querySelector("[data-app]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mainNav = document.querySelector("[data-main-nav]");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let revealObserver;
let counterObserver;

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

window.addEventListener("popstate", render);
window.addEventListener("DOMContentLoaded", render);
document.addEventListener("click", (event) => {
  const anchor = event.target.closest("a[href^='/']");
  if (!anchor || anchor.target || event.metaKey || event.ctrlKey || event.shiftKey) return;
  const href = anchor.getAttribute("href");
  if (!pages[normalizeRoute(href.split("#")[0])]) return;
  event.preventDefault();
  history.pushState(null, "", href);
  render();
});

function pathFromLocation() {
  const { basePath, english } = routeState();
  if (english && basePath === "/press") return "/";
  return pages[basePath] ? basePath : "/";
}

function link(url) {
  if (!isEnglish() || !url || !url.startsWith("/") || url.startsWith("//")) return url;
  if (url === "/") return englishPrefix;
  if (url.startsWith(`${englishPrefix}/`) || url === englishPrefix) return url;
  return `${englishPrefix}${url}`;
}

function setMeta(page, path) {
  const meta = isEnglish() ? englishMeta[path] : null;
  document.title = meta?.title || page.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", meta?.description || page.description || page.lead || "");
  document.documentElement.lang = isEnglish() ? "en" : "he";
  document.documentElement.dir = isEnglish() ? "ltr" : "rtl";
  setAlternateLinks(path);
}

function render() {
  const path = pathFromLocation();
  const page = pages[path] || pages["/"];
  setMeta(page, path);
  renderChrome(path);
  document.body.classList.toggle("lp", path.startsWith("/lp/"));
  document.body.classList.toggle("lang-en", isEnglish());
  document.body.classList.toggle("lang-he", !isEnglish());
  document.querySelectorAll(".main-nav a").forEach((a) => {
    a.classList.toggle("active", normalizeRoute(a.getAttribute("href")) === path);
  });
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  app.innerHTML = path.startsWith("/lp/") ? landingTemplate(page) : standardTemplate(page, path);
  if (isEnglish()) translateApp();
  renderPartnerLogos();
  bindForms();
  initSketchVisuals();
  initAnimations();
  initDistributionCounters();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function routeState() {
  const pathname = location.pathname.replace(/\/$/, "") || "/";
  const english = pathname === englishPrefix || pathname.startsWith(`${englishPrefix}/`);
  const withoutPrefix = english ? pathname.slice(englishPrefix.length) || "/" : pathname;
  return { english, basePath: withoutPrefix || "/" };
}

function isEnglish() {
  return routeState().english;
}

function normalizeRoute(url) {
  if (!url) return "/";
  if (url === englishPrefix) return "/";
  return url.startsWith(`${englishPrefix}/`) ? url.slice(englishPrefix.length) : url;
}

function translate(value) {
  if (!isEnglish()) return value;
  return enText[value] || value;
}

function translatedUrl(path, toEnglish) {
  const normalized = normalizeRoute(path);
  if (toEnglish) return normalized === "/" ? englishPrefix : `${englishPrefix}${normalized}`;
  return normalized;
}

function matchingLanguagePath(path, toEnglish) {
  const normalized = normalizeRoute(path);
  if (toEnglish && normalized === "/press") return englishPrefix;
  return pages[normalized] ? translatedUrl(normalized, toEnglish) : (toEnglish ? englishPrefix : "/");
}

function setAlternateLinks(path) {
  document.querySelectorAll("link[data-hreflang]").forEach((linkEl) => linkEl.remove());
  const canonical = document.createElement("link");
  canonical.rel = "alternate";
  canonical.hreflang = "he";
  canonical.href = location.origin + matchingLanguagePath(path, false);
  canonical.dataset.hreflang = "true";
  const english = document.createElement("link");
  english.rel = "alternate";
  english.hreflang = "en";
  english.href = location.origin + matchingLanguagePath(path, true);
  english.dataset.hreflang = "true";
  document.head.append(canonical, english);
}

function renderChrome(path) {
  const english = isEnglish();
  const englishSwitchLabel = `<svg width="24" height="16" viewBox="0 0 60 40" aria-hidden="true" focusable="false" style="display:block;border-radius:2px;box-shadow:0 0 0 1px rgba(255,255,255,.2);overflow:hidden;"><path fill="#012169" d="M0 0h60v40H0z"/><path stroke="#fff" stroke-width="8" d="m0 0 60 40M60 0 0 40"/><path stroke="#C8102E" stroke-width="4" d="m0 0 60 40M60 0 0 40"/><path stroke="#fff" stroke-width="13" d="M30 0v40M0 20h60"/><path stroke="#C8102E" stroke-width="8" d="M30 0v40M0 20h60"/></svg>`;
  const navItems = english ? [
    ["/israel-market-partner", "Israel Market Partner"],
    ["/insurance-solutions", "Underwriting Capabilities"],
    ["/claims", "Claims & Operations"],
    ["/insurance-agents", "Distribution Access"],
    ["/about-us", "About"],
    ["/contact-us", "Contact"],
  ] : [
    ["/insurance-agents", "לסוכני ביטוח"],
    ["/business-insurance", "לעסקים"],
    ["/insurance-solutions", "תחומי חיתום"],
    ["/claims", "תביעות"],
    ["/about-us", "אודות"],
    ["/press", "מרכז ידע"],
    ["/contact-us", "צור קשר"],
  ];
  mainNav.setAttribute("aria-label", english ? "Main navigation" : "ניווט ראשי");
  mainNav.innerHTML = `${navItems.map(([href, label]) => `<a href="${link(href)}">${label}</a>`).join("")}<a class="language-switcher nav-language-switcher" href="${matchingLanguagePath(path, !english)}"${english ? "" : ` aria-label="Switch to English"`}>${english ? "עברית / HE" : englishSwitchLabel}</a>`;

  const brand = document.querySelector(".brand");
  if (brand) {
    brand.href = link("/");
    brand.setAttribute("aria-label", english ? "Cooper Ninve - Home" : "קופר נינוה - דף הבית");
  }

  const skipLink = document.querySelector(".skip-link");
  if (skipLink) skipLink.textContent = english ? "Skip to content" : "דלג לתוכן";

  const headerActions = document.querySelector(".header-actions");
  if (headerActions) {
    headerActions.innerHTML = english
      ? `<a class="header-cta" href="${link("/contact-us")}" data-track="click_quote_cta">Partner With Us</a>
      <a class="language-switcher header-language-switcher" href="${matchingLanguagePath(path, false)}">עברית / HE</a>`
      : `<a class="header-cta" href="${link("/contact-us")}" data-track="click_quote_cta">הגשת סיכון לחיתום</a>
      <a class="header-link" href="${link("/contact-us")}">צור קשר</a>
      <a class="language-switcher header-language-switcher" href="${matchingLanguagePath(path, true)}" aria-label="Switch to English">${englishSwitchLabel}</a>`;
  }

  const footer = document.querySelector(".site-footer");
  if (footer) footer.innerHTML = footerHtml(english, path);

  const mobileSticky = document.querySelector(".mobile-sticky");
  if (mobileSticky) {
    mobileSticky.innerHTML = `<a href="${link("/contact-us")}" data-track="click_quote_cta">${english ? "Partner With Us" : "הגשת סיכון"}</a><a href="tel:0779965453" data-track="click_phone">${english ? "Call" : "שיחה"}</a>`;
  }
}

function footerHtml(english, path = "/") {
  const englishPartnerFooter = english && (path === "/contact-us" || path === "/insurance-solutions");
  const footerGroups = englishPartnerFooter ? [
    ["Cooper Ninve", [["Israel Market Partner", "/israel-market-partner"], ["About", "/about-us"], ["Insights", "/knowledge-center"]]],
    ["For Partners", [["Partner With Us", "/contact-us"], ["Underwriting Capabilities", "/insurance-solutions"], ["Claims & Operations", "/claims"]]],
    ["Market Interface", [["Distribution Access", "/insurance-agents"], ["Israeli Market Knowledge", "/business-insurance"], ["Underwriting Capabilities", "/insurance-solutions"]]],
    ["Contact", [["Partner With Us", "/contact-us"], ["077-9965453", "tel:0779965453"], ["info@cooper-ninve.com", "mailto:info@cooper-ninve.com"]]],
  ] : english ? [
    ["Cooper Ninve", [["Israel Market Partner", "/israel-market-partner"], ["About", "/about-us"], ["Knowledge Center", "/knowledge-center"]]],
    ["Underwriting Capabilities", [["Professional Liability", "/professional-liability-insurance"], ["Cyber", "/cyber-insurance"], ["Contractors’ All Risks", "/contractors-all-risks-insurance"], ["Medical Malpractice", "/medical-malpractice-insurance"], ["Liability and Third-Party Coverage", "/liability-insurance"]]],
    ["Distribution Access", [["Distribution Access", "/insurance-agents"], ["Submit a Risk for Review", "/contact-us"], ["Underwriting Capabilities", "/insurance-solutions"]]],
    ["Claims & Operations", [["Claims & Operations", "/claims"], ["Service and Documents", "/contact-us"], ["Report a Claim", "/contact-us"]]],
    ["Knowledge Center", [["Articles and Insights", "/knowledge-center"], ["M.G.A in Insurance", "/knowledge-center"], ["Submitting a Risk for Underwriting", "/knowledge-center"]]],
    ["Contact", [["Contact Us", "/contact-us"], ["077-9965453", "tel:0779965453"], ["info@cooper-ninve.com", "mailto:info@cooper-ninve.com"]]],
  ] : [
    ["קופר נינוה", [["עמוד הבית", "/"], ["אודות", "/about-us"], ["קופר נינוה בתקשורת", "/press"]]],
    ["פתרונות חיתום", [["אחריות מקצועית", "/professional-liability-insurance"], ["סייבר", "/cyber-insurance"], ["עבודות קבלניות", "/contractors-all-risks-insurance"], ["רשלנות רפואית", "/medical-malpractice-insurance"], ["דירקטורים ונושאי משרה", "/directors-and-officers-insurance"]]],
    ["חבויות וסיכונים מיוחדים", [["צד שלישי וחבויות", "/liability-insurance"], ["חבות מעבידים", "/employers-liability-insurance"], ["חבות המוצר", "/product-liability-insurance"], ["הפקות מדיה וסרטים", "/media-production-insurance"], ["סיכונים מיוחדים", "/special-risks-insurance"]]],
    ["עבודה עם קופר נינוה", [["לסוכני ביטוח", "/insurance-agents"], ["לעסקים וחברות", "/business-insurance"], ["תחומי חיתום", "/insurance-solutions"], ["הגשת סיכון לבדיקה", "/contact-us"]]],
    ["תביעות", [["תביעות", "/claims"], ["צור קשר", "/contact-us"]]],
    ["יצירת קשר", [["צור קשר", "/contact-us"], ["077-9965453", "tel:0779965453"], ["info@cooper-ninve.com", "mailto:info@cooper-ninve.com"]]],
  ];
  const contactText = englishPartnerFooter ? "Israel-market underwriting execution, distribution access, policy servicing and claims coordination support for international insurance partners." : english ? "A trusted local underwriting, claims and portfolio management partner in Israel." : "מרכז חיתום ישראלי המחבר בין סוכנים, עסקים ושווקי ביטוח בינלאומיים.";
  const address = english ? "111 Dizengoff St., Tel Aviv" : "רח׳ דיזנגוף 111, תל אביב";
  const rights = english ? "© 2026 Cooper Ninve. All rights reserved." : "© 2026 Cooper Ninve. כל הזכויות שמורות.";
  const legal = english ? [["Privacy Policy", "/privacy-policy"], ["Terms of Use", "/terms-of-use"], ["Disclosure", "/disclosure"], ["Public Complaints", "/public-complaints"], ["Accessibility", "/accessibility-statement"]] : [["מדיניות פרטיות", "/privacy-policy"], ["תנאי שימוש", "/terms-of-use"], ["גילוי נאות", "/disclosure"], ["תלונות הציבור", "/public-complaints"], ["הצהרת נגישות", "/accessibility-statement"]];
  const note = english ? "Insurance coverage is subject to the policy terms, exclusions, limits of liability and underwriting approval." : "הכיסוי הביטוחי כפוף לתנאי הפוליסה, חריגים, גבולות אחריות ואישור חיתום.";
  return `<div class="footer-main">
    <div class="container footer-grid footer-grid-wide">
      <section class="footer-contact">
        <img src="/assets/logo/cooper-ninve-logo-white.png" alt="Cooper Ninve" width="768" height="283" loading="lazy" decoding="async" />
        <p class="footer-slogan" lang="en">First of all, integrity.</p>
        <p>${contactText}</p>
        <ul>
          <li><a href="tel:0779965453" data-track="click_phone">077-9965453</a></li>
          <li><a href="mailto:info@cooper-ninve.com" data-track="click_email">info@cooper-ninve.com</a></li>
          <li>${address}</li>
        </ul>
      </section>
      ${footerGroups.map(([title, links]) => `<section><h3>${title}</h3>${links.map(([label, href]) => `<a href="${href.startsWith("/") ? link(href) : href}">${label}</a>`).join("")}</section>`).join("")}
    </div>
    <div class="container footer-bottom">
      <p>${rights}</p>
      <nav class="footer-legal" aria-label="${english ? "Legal links" : "קישורים משפטיים"}">${legal.map(([label, href]) => `<a href="${link(href)}">${label}</a>`).join("")}</nav>
      <p>${note}</p>
    </div>
  </div>`;
}

function translateApp() {
  translateTextNodes(app);
  app.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((field) => {
    field.placeholder = translate(field.placeholder);
  });
  app.querySelectorAll("img[alt]").forEach((image) => {
    image.alt = translateAlt(image.alt);
  });
  app.querySelectorAll("[aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.getAttribute("aria-label")));
  });
  app.querySelectorAll(".team-fallback").forEach((fallback) => {
    fallback.textContent = "";
  });
  app.querySelectorAll("a[href^='/']").forEach((anchor) => {
    anchor.href = link(normalizeRoute(anchor.getAttribute("href")));
  });
}

function translateAlt(value) {
  if (enText[value]) return enText[value];
  if (value.includes(" - ")) {
    return value.split(" - ").map((part) => translate(part)).join(" - ");
  }
  return value;
}

function translateTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const text = node.nodeValue;
    const trimmed = text.trim();
    if (!trimmed) return;
    const translated = translate(trimmed);
    if (translated !== trimmed) node.nodeValue = text.replace(trimmed, translated);
  });
}

function initAnimations() {
  if (revealObserver) revealObserver.disconnect();

  const heroItems = [...app.querySelectorAll(".hero .eyebrow, .hero-title, .hero-positioning, .hero .lead, .hero-actions .btn, .hero-card")];
  const heroCardItems = [...app.querySelectorAll(".hero-card li")];
  const scrollItems = [
    ...app.querySelectorAll(".card, .workflow-card, .feature-list li, .step, .partner-logo-card, .home-counter-card"),
  ];
  const animatedItems = [...heroItems, ...heroCardItems, ...scrollItems];

  if (!animatedItems.length) return;

  if (motionQuery.matches || !("IntersectionObserver" in window)) {
    animatedItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  animatedItems.forEach((item) => item.classList.add("reveal-item"));

  heroItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 110, 520)}ms`);
  });
  heroCardItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${560 + Math.min(index * 70, 280)}ms`);
  });
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      [...heroItems, ...heroCardItems].forEach((item) => item.classList.add("is-visible"));
    });
  });

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

  app.querySelectorAll(".grid, .workflow-cards, .feature-list, .steps, .partner-logos").forEach((group) => {
    group.querySelectorAll(".card, .workflow-card, li, .step, .partner-logo-card").forEach((item, index) => {
      const isPartnerLogo = item.classList.contains("partner-logo-card");
      const stagger = isPartnerLogo ? 105 : 90;
      const maxDelay = isPartnerLogo ? 630 : 450;
      item.style.setProperty("--reveal-delay", `${Math.min(index * stagger, maxDelay)}ms`);
    });
  });

  animatedItems.forEach((item) => {
    if (!item.classList.contains("is-visible")) revealObserver.observe(item);
  });
}

function initDistributionCounters() {
  if (counterObserver) counterObserver.disconnect();

  const counters = [...app.querySelectorAll("[data-count-to]")];
  if (!counters.length) return;

  const formatCounter = (value, suffix = "") => `${value.toLocaleString("en-US")}${suffix}`;
  const animateCounter = (counter) => {
    if (counter.dataset.counted === "true") return;
    counter.dataset.counted = "true";
    const target = Number(counter.dataset.countTo || 0);
    const suffix = counter.dataset.countSuffix || (target >= 1000 ? "+" : "");
    const finalValue = counter.dataset.countFinal || formatCounter(target, suffix);

    if (motionQuery.matches) {
      counter.textContent = finalValue;
      return;
    }

    const duration = Number(counter.dataset.countDuration || 1800);
    const start = performance.now();
    const finishTimer = window.setTimeout(() => {
      counter.textContent = finalValue;
    }, duration + 120);
    counter.textContent = "0";

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 2.2);
      const value = Math.round(eased * target);

      counter.textContent = t >= 1 ? finalValue : formatCounter(value, suffix);
      if (t >= 1) window.clearTimeout(finishTimer);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const homeCounterBlocks = [...app.querySelectorAll(".home-counters")];
  const standaloneCounters = counters.filter((counter) => !counter.closest(".home-counters"));

  counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const blockCounters = entry.target.matches(".home-counters")
        ? [...entry.target.querySelectorAll("[data-count-to]")]
        : [entry.target];
      blockCounters.forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -14% 0px", threshold: 0.25 });

  homeCounterBlocks.forEach((block) => counterObserver.observe(block));
  standaloneCounters.forEach((counter) => counterObserver.observe(counter));
}

function initSketchVisuals() {
  const sketchBlocks = [...app.querySelectorAll("[data-sketch-src]")];
  if (!sketchBlocks.length) return;

  sketchBlocks.forEach(async (block) => {
    const section = block.closest(".mga-block");
    const src = block.dataset.sketchSrc;
    block.classList.add("is-sketch-enhanced");

    try {
      const response = await fetch(src, { cache: "force-cache" });
      if (!response.ok) throw new Error(`Sketch asset failed: ${response.status}`);
      block.innerHTML = await response.text();
      const svg = block.querySelector("svg");
      const drawableItems = svg ? [...svg.querySelectorAll("path, line, polyline, polygon, rect, circle, ellipse")] : [];
      const fillItems = drawableItems.filter((item) => {
        const fill = item.getAttribute("fill");
        return fill && fill !== "none" && fill !== "transparent";
      });
      const strokeItems = drawableItems.filter((item) => item.getAttribute("stroke") && item.getAttribute("stroke") !== "none");
      const useStrokeDraw = strokeItems.length > 0 && fillItems.length <= strokeItems.length * 0.25;

      block.classList.toggle("is-sketch-reveal", !useStrokeDraw);
      if (useStrokeDraw) {
        strokeItems.forEach((item, index) => {
          item.classList.add("mga-sketch-line");
          item.setAttribute("pathLength", "1");
          item.style.setProperty("--line-delay", `${Math.min(index * 24, 760)}ms`);
        });
      }

      block.classList.add("is-sketch-ready");

      if (motionQuery.matches || !("IntersectionObserver" in window)) {
        section?.classList.add("is-sketch-visible");
        return;
      }

      const sketchObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          section?.classList.add("is-sketch-visible");
          sketchObserver.disconnect();
        });
      }, { rootMargin: "0px 0px -18% 0px", threshold: 0.24 });

      if (section) sketchObserver.observe(section);
    } catch {
      block.classList.remove("is-sketch-enhanced");
      block.classList.add("is-sketch-unavailable");
    }
  });
}

function renderPartnerLogos() {
  const logoGrid = document.querySelector("[data-partner-logos]");
  if (!logoGrid) return;
  logoGrid.innerHTML = partnerLogos.map(({ alt, src, width, height }) => `
    <div class="partner-logo-card">
      <img src="${src}" alt="${alt}" width="${width}" height="${height}" decoding="async" style="--logo-ratio:${width} / ${height}" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
      <span class="partner-logo-fallback" hidden>${alt}</span>
    </div>`).join("");
}

function hero(page, path = "") {
  const isHomeHero = page.sections === "home";
  const isHebrewHomeHero = isHomeHero && !isEnglish();
  const isHebrewInnerHero = !isEnglish() && ["/insurance-agents", "/business-insurance", "/claims"].includes(path);
  const isHebrewClaimsHero = !isEnglish() && path === "/claims";
  const heroTitle = page.positioning
    ? `<h1 class="hero-title"><span class="hero-title-line">${page.h1}</span><br><span class="hero-title-line">${page.positioning.replace(/\n/g, "</span><br><span class=\"hero-title-line\">")}</span></h1>`
    : `<h1 class="hero-title">${page.h1}</h1>`;
  if (isHebrewHomeHero) {
    const homeTitle = page.positioning
      ? `<h1 class="hero-title"><span class="hero-title-line">${page.h1}</span><br><span class="hero-title-line">${page.positioning.replace(/\n/g, "</span><br><span class=\"hero-title-line\">")}</span></h1>`
      : `<h1 class="hero-title">${page.h1}</h1>`;
    return `
    <section class="hero hero-home">
      <div class="hero-precision-visual" aria-hidden="true">
        <svg viewBox="0 0 360 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g class="hero-ruler">
            <path d="M72 46V474" />
            <path d="M56 46H88M56 474H88" />
            <path d="M72 76H104M72 116H94M72 156H104M72 196H94M72 236H104M72 276H94M72 316H104M72 356H94M72 396H104M72 436H94" />
          </g>
          <g class="hero-launch-form">
            <path d="M136 430C166 360 188 292 204 220C216 166 238 104 284 66" />
            <path d="M166 396C208 352 248 324 304 306" />
            <path d="M196 296L228 284M184 336L210 326" />
          </g>
        </svg>
      </div>
      <div class="container hero-inner">
        <div class="hero-copy">
          ${homeTitle}
        </div>
      </div>
    </section>`;
  }
  return `
    <section class="hero${isHomeHero ? " hero-home" : ""}${isHebrewInnerHero ? " hero-inner-page" : ""}${isHebrewClaimsHero ? " hero-claims" : ""}">
      ${isHebrewClaimsHero ? `<div class="claims-hero-visual" aria-hidden="true"><span></span><span></span><span></span></div>` : ""}
      <div class="container hero-inner">
        <div class="hero-copy">
          ${page.hideEyebrow ? "" : `<p class="eyebrow">${page.eyebrow || "קופר נינוה"}</p>`}
          ${heroTitle}
          <p class="lead">${page.lead}</p>
          ${page.supportLine ? `<p class="hero-support-line">${page.supportLine}</p>` : ""}
          ${page.hideActions ? "" : `<div class="hero-actions">
            <a class="btn btn-primary" href="${link(page.primary[1])}" data-track="click_quote_cta">${page.primary[0]}</a>
            <a class="btn btn-secondary" href="${link(page.secondary[1])}">${page.secondary[0]}</a>
          </div>`}
        </div>
      </div>
    </section>`;
}

function standardTemplate(page, path) {
  if (isEnglish() && path === "/") return englishHomeTemplate();
  if (isEnglish() && path === "/israel-market-partner") return englishIsraelMarketPartnerTemplate();
  if (isEnglish() && path === "/insurance-solutions") return englishUnderwritingLinesTemplate();
  if (isEnglish() && path === "/insurance-agents") return englishDistributionTemplate();
  if (isEnglish() && path === "/claims") return englishClaimsOperationsTemplate();
  if (isEnglish() && path === "/contact-us") return englishContactTemplate();
  if (path === "/israel-market-partner") return `${internationalPartnerSections()}`;
  if (["/privacy-policy", "/terms-of-use", "/disclosure", "/public-complaints", "/accessibility-statement"].includes(path)) return `${legalSections(page, path)}`;
  if (path === "/insurance-solutions") return sections(page.sections, path);
  if (path === "/about-us") return `${sections(page.sections, path)}`;
  if (path === "/contact-us") return sections(page.sections, path);
  return `${hero(page, path)}${sections(page.sections, path)}`;
}

function englishHomeTemplate() {
  return `
    <section class="hero hero-home">
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="hero-title">A trusted local underwriting, claims and portfolio management partner in Israel</h1>
          <p class="lead">Cooper Ninve supports Lloyd's syndicates, international insurers, reinsurers, MGAs and capacity providers with local underwriting support, distribution access, policy servicing, claims coordination and portfolio management support in Israel.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${link("/contact-us")}" data-track="click_quote_cta">Partner With Us</a>
            <a class="btn btn-secondary" href="${link("/israel-market-partner")}">Israel Market Partner</a>
          </div>
        </div>
        <aside class="hero-card hero-why-card">
          <h2>Partner capabilities</h2>
          <ul>
            <li>Local Israeli market knowledge</li>
            <li>Local underwriting support</li>
            <li>Access to local distribution</li>
            <li>Claims coordination and servicing</li>
            <li>Portfolio management support</li>
          </ul>
        </aside>
      </div>
    </section>
    ${englishUnderwritingExecutionSection()}
    ${englishInternationalMarketsSection()}
    ${englishPartnerWorkflowSection()}
    ${englishUnderwritingLinesPreview()}
    ${partnerLogosSection()}
    ${englishPartnerInquirySection()}`;
}

function englishIsraelMarketPartnerTemplate() {
  return `
    <section class="hero hero-home">
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Israel Market Partner</p>
          <h1 class="hero-title">Local underwriting, claims and portfolio management support in Israel</h1>
          <p class="lead">Cooper Ninve provides a local operating interface in Israel for Lloyd's syndicates, international insurers, reinsurers, MGAs and capacity providers, subject to agreed authority, appetite, market approval and policy terms.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${link("/contact-us")}" data-track="click_quote_cta">Discuss Partnership</a>
            <a class="btn btn-secondary" href="${link("/insurance-solutions")}">Underwriting Capabilities</a>
          </div>
        </div>
        <aside class="hero-card hero-why-card">
          <h2>Local operating role</h2>
          <ul>
            <li>Underwriting information and review support</li>
            <li>Claims coordination and local servicing</li>
            <li>Portfolio management support and communication</li>
            <li>Israeli distribution access</li>
            <li>Regulatory and local market knowledge</li>
          </ul>
        </aside>
      </div>
    </section>
    ${englishInternationalPartnerCapabilities()}
    ${englishPartnerWorkflowSection()}
    ${englishClaimsOperationsBlock()}
    ${englishPortfolioSupportBlock()}
    ${partnerLogosSection()}
    ${englishPartnerInquirySection()}`;
}

function englishInternationalPartnerCapabilities() {
  const capabilities = [
    ["Local Underwriting Support", "Collection, organization and review of local risk information for selected specialty and commercial submissions."],
    ["Claims Coordination and Servicing", "Local language, documentation and communication support for insured events in Israel, subject to policy terms and authority."],
    ["Portfolio Management Support", "Operational communication and portfolio-level support for selected programs or portfolios where agreed with the relevant market."],
    ["Israeli Market Knowledge", "Understanding of local business practices, distribution behavior, documentation, claims context and regulatory expectations."],
    ["Distribution Access", "Connection to an active Israeli insurance-agent network and local risk flow across relevant specialty lines."],
    ["Operational Execution", "Local servicing, document coordination and communication throughout underwriting, issuance, servicing and claims stages."],
  ];
  return `<section class="section"><div class="container"><div class="center-title"><h2>Why international markets work with a local Israeli partner</h2><p>International markets need more than introductions. They need structured local underwriting information, disciplined communication, claims coordination and reliable servicing on the ground.</p></div>${cards(capabilities.map(([title, text]) => ({ title, text, icon: "◇" })), 3)}</div></section>`;
}

function englishClaimsOperationsBlock() {
  return `<section class="section section-soft"><div class="container split-band"><div><p class="section-slogan">Claims are part of the operating model.</p><h2>Claims coordination and local servicing</h2><p>Cooper Ninve provides local claims coordination and servicing support in Israel, helping international markets manage insured events with local language, documentation, professional communication and market familiarity, subject to policy terms, authority and market approval.</p></div><ul class="feature-list">${["Local insured, agent and service-provider communication", "Collection and coordination of relevant claim documentation", "Communication with relevant market participants", "Support throughout the policy lifecycle", "No promise of coverage outside policy terms or authority"].map((x) => `<li>${x}</li>`).join("")}</ul></div></section>`;
}

function englishPortfolioSupportBlock() {
  return `<section class="section"><div class="container split-band"><div><p class="section-slogan">Portfolio discipline, not only individual placements.</p><h2>Portfolio management support</h2><p>For agreed relationships, Cooper Ninve can support the local operating rhythm of selected portfolios through underwriting communication, servicing coordination, claims visibility and local market feedback.</p></div><ul class="feature-list">${["Local risk-flow context", "Portfolio communication with relevant partners", "Servicing and documentation coordination", "Claims and operational feedback loops", "Support subject to agreed authority and market approval"].map((x) => `<li>${x}</li>`).join("")}</ul></div></section>`;
}

function englishClaimsOperationsTemplate() {
  return `
    <section class="section section-navy">
      <div class="container">
        <div class="center-title">
          <h1>Claims & Operations in Israel</h1>
          <p>Cooper Ninve supports local claims coordination, servicing and operational communication in Israel for insureds, agents and relevant international market participants, subject to policy terms, authority and market approval.</p>
        </div>
      </div>
    </section>
    ${englishClaimsOperationsBlock()}
    ${englishPortfolioSupportBlock()}
    ${englishPartnerInquirySection()}`;
}

function englishUnderwritingExecutionSection() {
  return `<section class="mga-block" aria-labelledby="mga-title"><div class="mga-inner"><div class="mga-copy"><p class="mga-kicker">Specialty underwriting capability with local execution.</p><h2 id="mga-title">Local underwriting execution in Israel</h2><strong>Cooper Ninve combines Israeli market knowledge, underwriting discipline and operational servicing.</strong><p>We help international insurance markets evaluate and support selected specialty risks in Israel, subject to underwriting authority, appetite, policy terms and market approval.</p><a class="btn btn-primary" href="${link("/about-us")}">About Cooper Ninve</a></div></div></section>`;
}

function englishInternationalMarketsSection() {
  const advantages = [
    "A local interface for international markets seeking disciplined underwriting review in Israel.",
    "Documentation, policy administration and servicing support for selected specialty risks.",
    "Familiarity with local distribution, business practices and Israeli market requirements.",
    "Coordination with relevant insurers, syndicates, MGAs or capacity partners where appropriate.",
    "Transparent communication throughout underwriting, issuance, servicing and claims coordination.",
  ];
  return `<section class="lloyds-advantages" aria-labelledby="lloyds-advantages-title"><div class="container lloyds-inner"><div class="lloyds-copy"><p class="section-slogan">International market access, local execution.</p><h2 id="lloyds-advantages-title">A local platform for international insurance partners</h2><p>Cooper Ninve provides a local interface for international markets seeking disciplined underwriting review, documentation, policy administration and servicing support in Israel.</p><a class="btn btn-primary" href="${link("/contact-us")}" data-track="click_quote_cta">Discuss Partnership</a></div><ul class="lloyds-list">${advantages.map((item) => `<li>${item}</li>`).join("")}</ul></div></section>`;
}

function englishPartnerWorkflowSection() {
  const steps = [
    ["Local Risk Intake", "We collect and organize local risk information from Israeli distribution and business sources."],
    ["Underwriting Review", "We assess exposures, documentation and suitability against agreed appetite and underwriting standards."],
    ["Market Coordination", "We coordinate with relevant insurers, syndicates, MGAs or capacity partners where appropriate."],
    ["Policy Servicing", "We support policy administration, documentation and local communication throughout the policy lifecycle."],
    ["Claims Coordination", "We assist with local claims intake, supporting documents and communication with the relevant market."],
  ];
  return `<section class="section section-soft agent-workflow"><div class="container"><div class="section-header"><div><p class="section-slogan">Operational support for international markets.</p><h2>How we support international partners</h2><p>Our role is to help international insurance partners work with Israeli risks through a structured local underwriting and servicing process.</p></div><a class="btn btn-primary" href="${link("/contact-us")}" data-track="click_quote_cta">Partner With Us</a></div><div class="workflow-cards">${steps.map(([title, text], index) => `<article class="workflow-card"><span>${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div></section>`;
}

function englishUnderwritingLinesPreview() {
  const lines = [
    { title: "Professional Liability", icon: "◎", text: "Specialty professional risks reviewed against appetite, authority and policy terms.", url: "/insurance-solutions", cta: "View lines" },
    { title: "Cyber", icon: "◈", text: "Cyber submissions supported by local information gathering and underwriting review.", url: "/insurance-solutions", cta: "View lines" },
    { title: "Construction and CAR", icon: "▧", text: "Local project context for contractors all risks and related construction exposures.", url: "/insurance-solutions", cta: "View lines" },
    { title: "Liability Lines", icon: "◇", text: "Commercial liability exposures reviewed with Israeli market and servicing context.", url: "/insurance-solutions", cta: "View lines" },
    { title: "Specialty Risks", icon: "◌", text: "Selected non-standard risks considered where appetite and market approval allow.", url: "/insurance-solutions", cta: "View lines" },
  ];
  return `<section class="section section-navy"><div class="container"><div class="center-title"><h2>Underwriting appetite and product lines</h2><p>Cooper Ninve supports selected specialty lines in Israel, subject to underwriting authority, appetite, policy terms and market approval.</p></div>${cards(lines, 5)}<div class="section-actions"><a class="btn btn-primary" href="${link("/insurance-solutions")}">View Underwriting Lines</a></div></div></section>`;
}

function englishPartnerInquirySection() {
  return `<section class="section section-soft"><div class="container split-band"><div><h2>Partner with Cooper Ninve in Israel</h2><p>International insurers, syndicates, MGAs and capacity providers can contact us to discuss underwriting appetite, local distribution, servicing and Israel-market execution.</p></div>${englishPartnerInquiryForm()}</div></section>`;
}

function englishPartnerInquiryForm() {
  const fields = ["Full Name", "Phone", "Email", "Company / Market", "Partnership Interest"];
  return `<form class="form-panel" data-form="form_submit_homepage_lead">
    <h2>Partner inquiry</h2>
    <div class="form-grid">
      ${fields.map((field) => `<label><span>${field}</span><input name="${field}" placeholder="${field}"></label>`).join("")}
      <label class="full"><span>Message</span><textarea name="message" placeholder="Briefly describe the opportunity, appetite or partnership question"></textarea></label>
    </div>
    <p class="form-note">Details are used only to respond to your inquiry and assess potential fit.</p>
    <button class="btn btn-primary" type="submit" data-track="form_submit_homepage_lead">Send Partner Inquiry</button>
  </form>`;
}

function englishContactTemplate() {
  return `
    <section class="section">
      <div class="container">
        <div class="center-title">
          <h1>Partner with Cooper Ninve in Israel</h1>
          <p>International insurers, syndicates, MGAs and capacity providers can contact Cooper Ninve to discuss Israel-market underwriting appetite, local distribution, policy servicing and claims coordination.</p>
        </div>
        <div class="split-band">
          ${englishPartnerContactForm()}
          <div>
            <h2>Contact Details</h2>
            <p>Reach Cooper Ninve directly to discuss potential partnership fit, market appetite or Israel-market execution.</p>
            <ul class="feature-list">
              <li>Phone: 077-9965453</li>
              <li>Email: info@cooper-ninve.com</li>
              <li>Address: 111 Dizengoff St., Tel Aviv</li>
            </ul>
          </div>
        </div>
      </div>
    </section>`;
}

function englishPartnerContactForm() {
  const fields = ["Name", "Company", "Role", "Email", "Phone"];
  return `<form class="form-panel" data-form="form_submit_general">
    <h2>Partnership / Market Inquiry</h2>
    <div class="form-grid">
      ${fields.map((field) => `<label><span>${field}</span><input name="${field}" placeholder="${field}"></label>`).join("")}
      <label class="full"><span>Message</span><textarea name="message" placeholder="Tell us about the partnership opportunity"></textarea></label>
    </div>
    <p class="form-note">Details are used only to respond to your inquiry and assess potential fit.</p>
    <button class="btn btn-primary" type="submit" data-track="form_submit_general">Send Partner Inquiry</button>
  </form>`;
}

function englishDistributionTemplate() {
  return `
    <section class="hero">
      <div class="container hero-inner" style="grid-template-columns:minmax(0, 780px);grid-template-areas:'copy';justify-content:center;">
        <div class="hero-copy">
          <h1 class="hero-title">Complex Liability Risks Are Our Starting Point</h1>
          <p class="lead">Cooper Ninve is Israel’s specialist liability underwriting agency, built to support risks that standard local-market solutions do not properly address.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${link("/contact-us")}" data-track="click_quote_cta">Discuss Distribution Access</a>
            <a class="btn btn-secondary" href="${link("/insurance-solutions")}">View Lines of Business</a>
          </div>
        </div>
      </div>
    </section>
    ${englishDistributionWorkflowSection()}
    ${englishDistributionBenefitsSection()}
    ${englishDistributionCtaSection()}`;
}

function englishDistributionWorkflowSection() {
  return `<section class="section section-soft"><div class="container split-band" style="align-items:center;"><div><h2 data-count-to="1000" style="font-size:clamp(76px, 12vw, 148px);line-height:.9;color:var(--navy);letter-spacing:0;">0</h2><p class="section-slogan" style="margin-top:22px;font-size:clamp(23px, 3vw, 34px);line-height:1.2;color:var(--navy);">Insurance Agencies Across Israel</p></div><ul class="feature-list">${["Deep understanding of the Israeli and international insurance markets", "Product-building capability for complex liability risks", "Local claims coordination and market communication"].map((x) => `<li>${x}</li>`).join("")}</ul></div></section>`;
}

function englishDistributionBenefitsSection() {
  const benefits = [
    ["Specialist Liability Focus", "Focused on liability and complex commercial risks that require specialist underwriting review."],
    ["Structured Underwriting Submissions", "We organize local risk information, documentation and exposure details into market-ready submissions."],
    ["Israeli & International Market Context", "Local Israeli knowledge combined with an understanding of international underwriting expectations."],
    ["Policy and Claims Coordination", "Support across documentation, policy servicing and local claims communication."],
  ];
  return `<section class="section"><div class="container"><div class="center-title"><h2>What International Markets Need in Israel</h2><p>International insurers, syndicates and MGAs need more than local access. They need structured underwriting information, liability expertise and reliable policy servicing on the ground.</p></div><div class="grid grid-2">${benefits.map(([title, text]) => `<article class="card"><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div></section>`;
}

function englishDistributionCtaSection() {
  return `<section class="section section-soft"><div class="container section-header"><div><h2>Discuss distribution access in Israel</h2><p>International insurers, syndicates, MGAs and capacity providers can contact Cooper Ninve to discuss local distribution, risk flow, underwriting information and market coordination in Israel.</p></div><a class="btn btn-primary" href="${link("/contact-us")}" data-track="click_quote_cta">Partner With Us</a></div></section>`;
}

function englishUnderwritingLinesTemplate() {
  const lines = [
    { title: "Professional Liability", icon: "◎", text: "Specialty professional exposures reviewed with local risk information, policy terms and agreed underwriting appetite.", url: "/professional-liability-insurance", cta: "View Line" },
    { title: "Cyber", icon: "◈", text: "Cyber submissions supported by Israeli market context, documentation review and coordination with relevant markets.", url: "/cyber-insurance", cta: "View Line" },
    { title: "Third-Party Liability", icon: "◇", text: "Commercial liability exposures considered with local operating, contractual and servicing context.", url: "/liability-insurance", cta: "View Line" },
    { title: "Employers’ Liability", icon: "▥", text: "Employers’ liability opportunities reviewed subject to appetite, policy terms and underwriting approval.", url: "/employers-liability-insurance", cta: "View Line" },
    { title: "Product Liability", icon: "▣", text: "Product-related exposures for manufacturers, importers and distributors assessed with Israeli market information.", url: "/product-liability-insurance", cta: "View Line" },
    { title: "Contractors’ All Risks", icon: "▧", text: "Construction and project risks supported through local project context, documentation and market coordination.", url: "/contractors-all-risks-insurance", cta: "View Line" },
    { title: "Medical Malpractice", icon: "✚", text: "Healthcare and professional medical exposures reviewed according to underwriting appetite and policy terms.", url: "/medical-malpractice-insurance", cta: "View Line" },
    { title: "Directors’ and Officers’ Liability (D&O)", icon: "◉", text: "Management liability exposures considered with local corporate, governance and risk information.", url: "/directors-and-officers-insurance", cta: "View Line" },
    { title: "Media and Film Production", icon: "▤", text: "Selected production risks reviewed where local documentation and market appetite support further consideration.", url: "/media-production-insurance", cta: "View Line" },
    { title: "Special Risks", icon: "◌", text: "Non-standard and complex risks reviewed where appetite, authority and market approval allow.", url: "/special-risks-insurance", cta: "View Line" },
  ];
  return `
    <section class="section section-navy">
      <div class="container">
        <div class="center-title">
          <h1>Underwriting Lines in Israel</h1>
          <p>Cooper Ninve supports selected specialty and commercial lines in Israel through local underwriting insight, risk information gathering, policy administration and market coordination, subject to appetite, authority and underwriting approval.</p>
        </div>
        ${cards(lines, 5)}
        <div class="section-actions">
          <a class="btn btn-primary" href="${link("/contact-us")}" data-track="click_quote_cta">Discuss Underwriting Appetite</a>
        </div>
      </div>
    </section>`;
}

function cards(items, cols = 3) {
  return `<div class="grid grid-${cols}">${items.map((item) => `
    ${item.url ? `<a class="card card-link" href="${link(item.url)}">` : `<article class="card">`}
      <div class="icon-circle">${item.icon || "•"}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      ${item.url ? `<span class="card-cta">${item.cta || "קרא עוד"}</span>` : ""}
    ${item.url ? `</a>` : `</article>`}`).join("")}</div>`;
}

function productCards() {
  return cards(products, 5);
}

function sections(type, path) {
  if (productPages[path]) return productTemplate(productPages[path], path);
  const map = {
    home: homeSections,
    solutions: solutionsSections,
    agents: agentsSections,
    business: businessSections,
    claims: claimsSections,
    about: aboutSections,
    press: pressSections,
    contact: contactSections,
    knowledge: knowledgeSections,
    international: internationalPartnerSections,
  };
  return (map[type] || homeSections)();
}

function internationalPartnerSections() {
  return `
    <section class="section section-navy"><div class="container"><div class="center-title"><h1>Israel Market Partner</h1><p>קופר נינוה פועלת כשותף מקומי בישראל עבור שווקי ביטוח בינלאומיים, תוך תמיכה בחיתום, תפעול, שירות, תביעות וניהול תיקים, בכפוף לסמכויות ולאישורים הרלוונטיים.</p></div></div></section>
    <section class="section"><div class="container"><div class="center-title"><h2>יכולות מקומיות עבור שותפים בינלאומיים</h2><p>העמוד מיועד לשווקים, מבטחים, מבטחי משנה, סינדיקטים, MGAs וספקי Capacity המבקשים שותף מקומי מקצועי בישראל.</p></div>${cards([
      { title: "תמיכת חיתום מקומית", icon: "◇", text: "איסוף, ארגון ובחינת מידע חיתומי מסיכונים בישראל." },
      { title: "תיאום תביעות ושירות", icon: "▧", text: "תקשורת מקומית, מסמכים ותיאום מול גורמים רלוונטיים בישראל." },
      { title: "ניהול תיקים", icon: "◎", text: "תמיכה תפעולית ותקשורת שוטפת סביב תיקים ופורטפוליו מוסכם." },
      { title: "ידע שוק ישראלי", icon: "◈", text: "היכרות עם פעילות עסקית, סוכנים, מסמכים, שירות ותביעות בישראל." },
      { title: "גישה להפצה מקומית", icon: "▥", text: "עבודה מול רשת רחבה של סוכני ביטוח וגורמי שוק מקומיים." },
      { title: "ביצוע תפעולי", icon: "▣", text: "ליווי תהליך החיתום, ההפקה, השירות והתביעות לאורך חיי הפוליסה." },
    ], 3)}</div></section>
    ${partnerLogosSection()}
    ${finalCta("לדבר עם קופר נינוה", "פנייה זו מיועדת לשותפי שוק בינלאומיים המבקשים לדון ביכולות חיתום, תפעול, תביעות וניהול תיקים בישראל.")}`;
}

function legalSections(page, path) {
  const english = isEnglish();
  const legalCopy = {
    "/privacy-policy": english
      ? ["Privacy Policy", ["This page provides general privacy information for website users.", "Personal details submitted through website forms are intended to be used for responding to inquiries and reviewing suitability.", "A full legal privacy policy should be approved by Cooper Ninve's legal advisers before final publication."]]
      : ["מדיניות פרטיות", ["עמוד זה מספק מידע כללי על פרטיות משתמשי האתר.", "פרטים הנמסרים בטפסים באתר מיועדים לצורך חזרה לפונה ובדיקת התאמה בלבד.", "נוסח משפטי מלא של מדיניות הפרטיות יאושר על ידי יועצי החברה לפני פרסום סופי."]],
    "/terms-of-use": english
      ? ["Terms of Use", ["The website content is provided for general information only.", "Nothing on the website constitutes a binding insurance offer, coverage confirmation or legal advice.", "Insurance coverage is subject to policy terms, underwriting approval, exclusions, deductibles and applicable law."]]
      : ["תנאי שימוש", ["תוכן האתר נועד למידע כללי בלבד.", "אין לראות במידע באתר הצעת ביטוח מחייבת, אישור כיסוי או ייעוץ משפטי.", "כל כיסוי ביטוחי כפוף לתנאי הפוליסה, אישור חיתום, חריגים, השתתפויות עצמיות והוראות הדין."]],
    "/disclosure": english
      ? ["Disclosure and Regulatory Status", ["Cooper Ninve's role, authority and services may vary by product, market and agreement.", "Displayed partner or market references do not imply that every partner supports every product or risk.", "All activity is subject to relevant authority, product appetite, market approval and applicable policy terms."]]
      : ["גילוי נאות ומעמד רגולטורי", ["תפקידה, סמכויותיה ושירותיה של קופר נינוה עשויים להשתנות לפי מוצר, שוק והסכם רלוונטי.", "הצגת שותפים או שווקים אינה מלמדת שכל שותף תומך בכל מוצר או סיכון.", "כל פעילות כפופה לסמכויות הרלוונטיות, תיאבון הסיכון, אישור השוק ותנאי הפוליסה החלים."]],
    "/public-complaints": english
      ? ["Public Complaints Procedure", ["Public inquiries and complaints may be sent through the contact channels on this website.", "Please include identifying details, policy or claim information where relevant, and a clear description of the issue.", "This placeholder should be replaced with the company's approved complaints procedure."]]
      : ["תלונות הציבור", ["ניתן להעביר פניות או תלונות באמצעות פרטי הקשר באתר.", "מומלץ לצרף פרטים מזהים, מספר פוליסה או תביעה ככל שקיים, ותיאור ברור של הנושא.", "עמוד זה הוא בסיס לנוהל תלונות מאושר של החברה."]],
    "/accessibility-statement": english
      ? ["Accessibility Statement", ["Cooper Ninve aims to make the website accessible to a broad audience.", "If you encounter an accessibility issue, please contact the company through the contact details on the website.", "A full accessibility statement should be completed after accessibility review."]]
      : ["הצהרת נגישות", ["קופר נינוה שואפת להנגיש את האתר לקהל רחב ככל האפשר.", "אם נתקלתם בקושי נגישות, ניתן לפנות לחברה דרך פרטי הקשר באתר.", "הצהרת נגישות מלאה תושלם לאחר בדיקת נגישות ייעודית."]],
  };
  const [title, items] = legalCopy[path] || [page.h1, [page.lead]];
  return `<section class="section"><div class="container split-band"><div><h1>${title}</h1><p>${page.lead || ""}</p></div><ul class="feature-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul></div></section>`;
}

function homeSections() {
  return `
    ${homeCountersBlock()}
    ${mgaPositioningBlock()}
    ${lloydsAdvantagesSection()}
    ${homePressTeaserSection()}
    ${partnerLogosSection()}`;
}

function homeCountersBlock() {
  const counters = [
    ["5", "מבטחי משנה"],
    ["1,000+", "סוכנויות ביטוח"],
    ["10,000+", "לקוחות מרוצים"],
  ];
  return `<section class="home-counters" aria-label="נתוני אמון">
    <div class="container home-counters-heading">
      <h2>כמה סיבות טובות לעבוד עם קופר נינוה</h2>
    </div>
    <div class="container home-counters-inner">
      ${counters.map(([value, label]) => {
        const countTo = value.replace(/[^\d]/g, "");
        const suffix = value.includes("+") ? "+" : "";
        return `<article class="home-counter-card"><strong data-count-to="${countTo}" data-count-suffix="${suffix}" data-count-final="${value}" data-count-duration="1700">${value}</strong><span>${label}</span></article>`;
      }).join("")}
    </div>
  </section>`;
}

function homePressTeaserSection() {
  return `<section class="section section-soft home-press-teaser"><div class="container press-teaser-inner"><div><p class="section-slogan">כתבו עלינו</p><h2>קופר נינוה בתקשורת</h2><p>כתבות, ראיונות ואזכורים מקצועיים על פעילות קופר נינוה, תחומי החיתום והקשר לשוק הביטוח הבינלאומי.</p></div><a class="btn btn-primary" href="/press">לכל הכתבות</a></div></section>`;
}

function mgaPositioningBlock() {
  return `<section class="mga-block" aria-labelledby="mga-title"><div class="mga-inner"><div class="mga-copy"><p class="mga-kicker">לא עוד סוכנות ביטוח, תקראו לנו חברת חיתום.</p><h2 id="mga-title">קופר נינוה היא <span>M.G.A</span></h2><strong>גוף המאגד תחתיו חתמים מעבר לים אשר העניקו לו סמכויות חיתום.</strong><p>M.G.A הוא ONE STOP SHOP המבצע ניהול בחינה והכוונת תיקים בהתאם לתחומי המומחיות של המבטחים העומדים מאחוריו. כלומר, גוף המחזיק סמכויות נרחבות לרבות: תמחור, חיתום ויישוב תביעות מקומי בשם החתמים מעבר לים.</p><a class="btn btn-primary" href="/about-us">עוד על קופר נינוה</a></div></div></section>`;
}

function lloydsAdvantagesSection() {
  const advantages = [
    "עבודה מול מספר סינדיקטים של Lloyd’s, לצד גישה לשווקים בינלאומיים מעבר לשוק המקומי.",
    "חתמים בעלי ניסיון והיכרות מקצועית עם דרישות החיתום של שוק Lloyd’s בלונדון.",
    "אפשרות לבחון שינויים, הרחבות ותוספות שאינן זמינות תמיד בשוק המקומי.",
    "הפקת פוליסות בעברית, המותאמות לפעילות בישראל ולדרישות הרגולציה המקומית.",
    "פתרונות ללקוחות בעלי פעילות עסקית מחוץ לגבולות ישראל.",
    "יכולת לבנות פוליסות לא סטנדרטיות בהתאמה אישית, לפי מפרטי יועצי ביטוח ובהתאם לרגולציה בישראל.",
  ];
  return `<section class="lloyds-advantages" aria-labelledby="lloyds-advantages-title"><div class="container lloyds-inner"><div class="lloyds-copy"><p class="section-slogan">גישה לשוק בינלאומי, שירות מקומי.</p><h2 id="lloyds-advantages-title">ייחוד העבודה עם שוק הלוידס</h2><p>שוק Lloyd’s מאפשר גמישות חיתומית, גישה לידע מקצועי בינלאומי ויכולת לבנות פתרונות ביטוח שאינם תמיד זמינים במסגרת השוק המקומי. קופר נינוה מחברת בין היכולות האלה לבין חיתום, שירות והפקת פוליסות בישראל.</p><a class="btn btn-primary" href="/contact-us" data-track="click_quote_cta">לדבר עם צוות החיתום</a></div><ul class="lloyds-list">${advantages.map((item) => `<li>${item}</li>`).join("")}</ul></div></section>`;
}

function underwritingExamplesSection() {
  const useCases = [
    "פתרונות מותאמים אישית",
    "פעילות עסקית בחו״ל",
    "פרויקטים מורכבים",
    "צווארון לבן ואחריות מקצועית טהורה",
  ];
  return `<section class="section underwriting-examples"><div class="container underwriting-bridge"><div class="underwriting-copy"><p class="section-slogan">חיתום מקצועי לסיכונים שאינם תמיד סטנדרטיים.</p><h2>מה אנחנו עושים בפועל?</h2><p>קופר נינוה בוחנת סיכונים שאינם תמיד נכנסים לתבנית רגילה, ומחברת בין צרכי הלקוח לבין תהליך חיתומי מתאים באמצעות ניסיון בשווקים בינלאומיים והיכרות עם השוק הישראלי.</p><div class="section-actions"><a class="btn btn-primary" href="/contact-us" data-track="click_quote_cta">בחינת סיכון לחיתום</a><a class="btn btn-secondary" href="/insurance-solutions">לכל תחומי החיתום</a></div></div><div class="example-chips" aria-label="דוגמאות לסיכונים שאנחנו בוחנים"><h3>דוגמאות לסיכונים שאנחנו בוחנים</h3><div class="example-chip-list">${useCases.map((title) => `<span class="example-chip">${title}</span>`).join("")}</div></div></div></section>`;
}

function solutionsSections() {
  return `
    <section class="section section-navy">
      <div class="container">
        <div class="center-title"><h2>תחומי חיתום ובחינת סיכונים</h2><p>קופר נינוה בוחנת סיכונים מקצועיים ומסחריים במגוון תחומים, ומקדמת תהליך חיתום, הפקה, שירות וניהול לאורך חיי הפוליסה בכפוף לסמכויות, תיאבון סיכון ואישור השוק הרלוונטי.</p></div>
        ${productCards()}
      </div>
    </section>`;
}

function agentsSections() {
  const agentBenefits = [
    ["הסוכן נשאר מול הלקוח", "קופר נינוה מספקת גב חיתומי מקצועי, בלי להחליף את מערכת היחסים בין הסוכן למבוטח."],
    ["פתרון לסיכונים מורכבים", "בחינת סיכונים לא שגרתיים מול שווקים וחתמים רלוונטיים."],
    ["גישה לשווקים בינלאומיים", "חיבור לשווקי ביטוח מעבר לים, בהתאם לתיאבון החיתום והסמכויות הרלוונטיות."],
    ["תהליך חיתום מסודר", "ריכוז שאלונים, מסמכים ונתונים חיתומיים לצורך בחינה מקצועית של הסיכון, לצד פוליסות וליווי בעברית לאורך חיי הפוליסה."],
  ];
  return `
    ${agentJourneySection()}
    <section class="section agent-workflow"><div class="container"><div class="section-header"><div><h2>כשסיכון לא נכנס למסלול הרגיל — קופר נינוה נכנסת לתמונה</h2><p>קופר נינוה עובדת עם סוכני ביטוח כשותף חיתומי מאחורי הקלעים — מסייעת בבחינת סיכונים מורכבים, התאמתם לשווקים רלוונטיים והפקת פוליסות בעברית, תוך שמירה על מקומו המרכזי של הסוכן מול הלקוח.</p></div></div><div class="workflow-cards">${agentBenefits.map(([title, text]) => `<article class="workflow-card"><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div></section>
    <section class="section section-soft"><div class="container section-header"><div><p class="section-slogan">שיתוף פעולה עם סוכנים</p><h2>סוכני ביטוח? בואו לעבוד איתנו</h2><p>קופר נינוה עובדת עם סוכני ביטוח ומתווכים מקצועיים בבחינת סיכונים, חיתום, הפקה ושירות בתחומים מסחריים ומורכבים, בכפוף לתחומי החיתום ולשווקים הרלוונטיים.</p></div><a class="btn btn-primary" href="/contact-us">מעבר לעמוד צור קשר</a></div></section>`;
}

function businessSections() {
  return `
    <section class="section business-risk-section"><div class="container"><div class="center-title business-risk-copy"><h2>איזה עסק צריך בחינת סיכון מקצועית?</h2><p>לא כל עסק מתאים למסלול ביטוח סטנדרטי. כאשר הפעילות מורכבת, החשיפה גבוהה, קיימות דרישות חוזיות מיוחדות או שהשוק המקומי אינו נותן מענה מספק — נדרשת בחינת סיכון מקצועית.</p><p>במקרים כאלה, השאלה אינה רק איזו פוליסה נדרשת, אלא כיצד נכון להבין את הסיכון, אילו נתונים חשוב להציג בפני החתמים, ומהו השוק המתאים לבחינה. קופר נינוה בוחנת את מאפייני העסק, תחום הפעילות, היקף החשיפה והמידע החיתומי הרלוונטי, במטרה לבחון אפשרות להתאמת פתרון ביטוחי מול השווקים והחתמים הרלוונטיים, בכפוף לתיאבון החיתום, תנאי הפוליסה ואישור השוק.</p></div></div></section>
    <section class="section section-soft business-cta-section"><div class="container section-header"><div><p class="section-slogan">בדיקת התאמה ראשונית</p><h2>רוצים לבחון סיכון עסקי מול קופר נינוה?</h2><p>קופר נינוה מסייעת בבחינת סיכונים עסקיים ומורכבים, תוך התאמה לתחומי החיתום ולשווקים הרלוונטיים.</p><a class="btn btn-primary" href="/contact-us">מעבר לעמוד צור קשר</a></div></div></section>`;
}

function aboutSections() {
  return `
    ${teamSection()}
    <section class="section about-article-section"><div class="container"><article class="about-article"><h2>אודות קופר נינוה</h2><p>קופר נינוה היא אחת מסוכנויות הביטוח הוותיקות והמובילות בישראל בענף הביטוח הכללי, וחברת בת של נינוה סוכנות לביטוח בע״מ, אשר נוסדה בשנת 1973. קופר נינוה פועלת כ־Coverholder בשוק לויד׳ס בישראל, ועובדת עם חברות ביטוח ומבטחי משנה מהגדולים בעולם, תוך החזקת סמכויות חיתום בשם מבטחי לויד׳ס לונדון.</p><p>קופר נינוה עובדת עם מבטחי משנה ושווקים בינלאומיים, יתרון המאפשר למבוטחים ולסוכנים העובדים עמנו גישה ישירה לעולם הביטוח הבינלאומי.</p><p>המשמעות של ביצוע החיתום בישראל גדולה הן עבור המבוטחים והן עבור הסוכנים, בעיקר בשני היבטים מרכזיים: זמן וכסף. קיצור תהליך החיתום וצמצום מספר הגורמים המטפלים בבקשה עשויים לסייע ביצירת תהליך יעיל, מדויק ונגיש יותר.</p><p>אנו מתמחים בסיכונים מיוחדים ובביטוחי חבויות, לרבות חבות מעבידים, אחריות המוצר, צד שלישי, אחריות מקצועית, רשלנות רפואית, ביטוח דירקטורים ונושאי משרה, כספים בהעברה ותחומים נוספים. הדגש הוא על מתן פתרונות בתחומים שבהם השוק המקומי מתקשה לעיתים לתת מענה מלא, תוך התאמה לצורכי הביטוח המשתנים של המבוטח.</p><p>קופר נינוה מתאימה פתרונות מיוחדים לחברות ישראליות, לרבות חברות ישראליות בעלות פעילות בינלאומית.</p><p>כאשר מדובר בפרויקטים ובסיכונים מורכבים, הדגש הוא על לימוד והבנה של פעילות הלקוח, מאפייני הסיכון והחשיפות האפשריות הנובעות מפעילותו. קופר נינוה שואפת להעניק למבוטחים ולסוכנים העובדים עמה שירות מקצועי ואישי, זמינות גבוהה, וליווי בתהליכי חיתום ותביעות באמצעות הגורמים המקצועיים הרלוונטיים.</p></article></div></section>`;
}

function pressSections() {
  return `<section class="section press-list-section"><div class="container press-groups">${pressGroups.map((group, groupIndex) => `<section class="press-group" aria-labelledby="press-group-${groupIndex + 1}"><h2 id="press-group-${groupIndex + 1}">${group.title}</h2><div class="press-card-grid">${group.items.map((item) => {
    const external = /^https?:\/\//.test(item.url);
    return `<article class="press-card"><p class="press-source">${item.source}</p><h3>${item.title}</h3><p>${item.description}</p><a class="card-cta" href="${item.url}"${external ? ` target="_blank" rel="noopener"` : ""}>${item.cta}</a></article>`;
  }).join("")}</div></section>`).join("")}</div></section>`;
}

function teamSection() {
  return `<section class="section team-section" aria-labelledby="team-title"><div class="container"><div class="center-title"><h2 id="team-title">הכירו את המומחים שלנו</h2></div><div class="team-grid">${teamMembers.map((member) => `<article class="team-card"><div class="team-photo"><img src="${member.image}" alt="${member.name} - ${member.role}" loading="lazy" width="420" height="320"></div><div class="team-copy"><h3>${member.name}</h3><p class="team-role">${member.role}</p><p>${member.bio}</p></div></article>`).join("")}</div></div></section>`;
}

function contactSections() {
  return `
    <section class="section"><div class="container"><div class="center-title"><h2>צור קשר עם קופר נינוה</h2><p>השאירו פרטים בסיסיים להגשת סיכון, פנייה כסוכן, בדיקת חשיפה עסקית או פנייה בנושא שירות ותביעות.</p></div><div class="split-band">${form("form_submit_general", ["שם מלא", "טלפון", "אימייל", "חברה / סוכנות", "סוג הפנייה", "תחום חיתום רלוונטי"])}<div><h2>פרטי התקשרות</h2><p>ניתן לפנות אלינו גם ישירות בטלפון או במייל.</p><ul class="feature-list"><li>טלפון: 077-9965453</li><li>אימייל: info@cooper-ninve.com</li><li>כתובת: רח׳ דיזנגוף 111, תל אביב</li></ul></div></div></div></section>`;
}

function knowledgeSections() {
  const articles = [
    ["מה זה MGA בביטוח?", "הסבר מקצועי על מודל MGA, תפקידו מול סוכני ביטוח, חיתום, הפקה ושירות."],
    ["מה זה Lloyd’s Coverholder?", "משמעות מודל Coverholder והקשר לפתרונות ביטוח בינלאומיים."],
    ["איזה מידע צריך להצעת ביטוח אחריות מקצועית?", "רשימת נתונים ומסמכים שמסייעים לקדם בדיקת חיתום יעילה."],
    ["האם עסק קטן צריך ביטוח סייבר?", "מתי גם עסק קטן חשוף לאירועי סייבר, דליפות מידע והשבתת פעילות."],
  ];
  return `${insightsSection()}<section class="section"><div class="container split-band"><div><h2>נושאי ידע וחיתום</h2><p>מרכז הידע מרכז נושאים מקצועיים שמסייעים לסוכנים ולעסקים להבין מידע חיתומי, מסמכים נדרשים ותהליכי בחינת סיכון.</p></div><div class="knowledge-list">${articles.map(([t, p]) => `<article><h3>${t}</h3><p>${p}</p><a href="/contact-us">שאלה לצוות החיתום</a></article>`).join("")}</div></div></section>${finalCta("מחפשים תשובה מקצועית?", "השאירו פרטים ונחזור אליכם עם הכוונה ראשונית.")}`;
}

function claimsSections() {
  return `${claimsServiceSection()}`;
}

function productTemplate(page, path) {
  const factors = page.factors || ["תחום פעילות ואופי החשיפה", "מחזור, היקף פעילות וגבולות אחריות", "ניסיון תביעות קודם", "דרישות חוזיות או אישורי ביטוח", "מידע מקצועי, שאלונים ומסמכים תומכים", "תיאבון סיכון, סמכויות חיתום ואישור השוק הרלוונטי"];
  if (!isEnglish()) {
    return `
      <section class="section product-detail-section">
        <div class="container product-detail-layout">
          ${productSidebar(path)}
          <article class="product-detail-content">
            <div class="product-intro-block">
              <p>${page.lead}</p>
            </div>
            ${productDetailList("למי זה רלוונטי?", page.who)}
            ${productDetailList("מה נבחן במסגרת החיתום?", page.coverage)}
            ${productDetailList("מידע שעשוי להידרש", page.info)}
            <p class="product-compliance-note">הכיסוי הביטוחי כפוף לתנאי הפוליסה, חריגים, גבולות אחריות ואישור חיתום.</p>
          </article>
        </div>
      </section>`;
  }
  return `
    <section class="section"><div class="container"><div class="center-title"><h2>למי הסיכון מתאים לבחינה?</h2><p>כל פנייה נבחנת לפי אופי הפעילות, המידע החיתומי, תיאבון הסיכון ותנאי הפוליסה הרלוונטיים.</p></div>${cards(page.who.map((title) => ({ title, icon: "◇", text: "מתאים לבדיקת חיתום בהתאם לאופי הפעילות, היקף הסיכון, המסמכים והאישורים הרלוונטיים." })), 3)}</div></section>
    <section class="section section-soft"><div class="container split-band"><div><h2>מה יכול להיבחן במסגרת החיתום?</h2><p>הכיסוי המדויק כפוף לתנאי הפוליסה, סמכויות החיתום, אישור השוק הרלוונטי, גבולות אחריות, חריגים, השתתפויות עצמיות והפעילות הספציפית.</p></div><ul class="feature-list">${page.coverage.map((x) => `<li>${x}</li>`).join("")}</ul></div></section>
    <section class="section"><div class="container split-band"><div><h2>איזה מידע חיתומי נדרש?</h2><p>מידע מלא וברור מאפשר לבחון את הסיכון בצורה מקצועית ולזהות האם קיימת התאמה לתיאבון הסיכון ולשווקים הרלוונטיים.</p><a class="btn btn-primary" href="/contact-us" data-track="click_quote_cta">שליחת פרטים לבחינת חיתום</a></div><ul class="feature-list">${page.info.map((x) => `<li>${x}</li>`).join("")}</ul></div></section>
    <section class="section section-soft"><div class="container split-band"><div><h2>מה משפיע על החלטת החיתום?</h2><p>החלטה חיתומית אינה מבוססת רק על שם המוצר. היא נשענת על פרופיל הסיכון, המסמכים, ניסיון התביעות, דרישות השוק והסמכויות הרלוונטיות.</p></div><ul class="feature-list">${factors.map((x) => `<li>${x}</li>`).join("")}</ul></div></section>
    <section class="section section-navy"><div class="container"><div class="section-header"><div><h2>תמיכה לסוכנים ולעסקים בתהליך החיתום</h2><p>קופר נינוה מסייעת באיסוף מידע, הבנת החשיפה, הכוונה למסמכים נדרשים, בחינת התאמה מול שווקים רלוונטיים והמשך שירות לאורך חיי הפוליסה.</p></div><a class="btn btn-primary" href="/insurance-agents">הגשת סיכון על ידי סוכן</a></div></div></section>
    ${faqBlock(page.faqs)}
    ${finalCta("רוצים לבחון סיכון?", "השאירו פרטים וצוות קופר נינוה יחזור אליכם לבדיקת חיתום ראשונית, בכפוף למידע שיימסר ולסמכויות הרלוונטיות.")}`;
}

function productDetailList(title, items = []) {
  if (!items.length) return "";
  return `<section class="product-detail-block"><h2>${title}</h2><ul class="product-detail-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul></section>`;
}

function productSidebar(currentPath) {
  const links = products.map((item) => {
    const active = item.url === currentPath;
    return active
      ? `<span class="product-side-link is-active" aria-current="page">${item.title}</span>`
      : `<a class="product-side-link" href="${link(item.url)}">${item.title}</a>`;
  }).join("");
  return `<aside class="product-sidebar" aria-label="תחומי חיתום נוספים">
    <nav class="product-side-nav">
      <h2>תחומי חיתום נוספים</h2>
      <div class="product-side-links">${links}</div>
    </nav>
    <div class="product-side-cta">
      <h2>רוצים לבחון סיכון?</h2>
      <p>שלחו לנו פרטים ראשוניים ונבחן האם ניתן להתאים את הסיכון לתחומי החיתום הרלוונטיים.</p>
      <a class="btn btn-primary" href="${link("/contact-us")}" data-track="click_quote_cta">יצירת קשר</a>
    </div>
  </aside>`;
}

function audienceRouting() {
  return `${cards([
    { title: "לסוכני ביטוח", icon: "◇", text: "מרכז חיתום שמאפשר להגיש סיכונים, לקבל הכוונה מקצועית וללוות לקוחות בתהליך מסודר.", url: "/insurance-agents", cta: "מסלול לסוכנים" },
    { title: "לעסקים", icon: "◎", text: "פתרונות ביטוח לעסקים, חברות ובעלי מקצוע שזקוקים להתאמה חיתומית ולא רק לפוליסה מדף.", url: "/business-insurance", cta: "בדיקת התאמה לעסק" },
    { title: "תביעות", icon: "▧", text: "שירות, מסמכים וליווי תהליכים לאורך חיי הפוליסה, גם לאחר ההפקה.", url: "/claims", cta: "פנייה בנושא תביעה" },
    { title: "סיכונים מורכבים", icon: "◈", text: "מענה לסיכונים מיוחדים, דרישות חוזיות או מצבים שלא נכנסים לתבנית ביטוח רגילה.", url: "/contact-us", cta: "בדיקת סיכון מורכב" },
  ], 4)}`;
}

function whyCooperSection() {
  return `<section class="section section-soft"><div class="container split-band"><div><p class="section-slogan">ידע, חיתום ושירות לאורך חיי הפוליסה.</p><h2>למה קופר נינוה?</h2><p>שילוב בין ידע מקצועי, ניסיון חיתומי, גישה לשווקים בינלאומיים והיכרות עמוקה עם הצרכים של סוכני ביטוח ועסקים בישראל.</p></div><ul class="feature-list">${["יכולת חיתום מקומית", "גישה לשווקים בינלאומיים", "התמחות בסיכונים מורכבים", "שירות לסוכני ביטוח", "פתרונות לעסקים"].map((x) => `<li>${x}</li>`).join("")}</ul></div></section>`;
}

function agentJourneySection(extraClass = "") {
  const steps = [
    ["שולחים פרטי סיכון", "הסוכן מעביר מידע ראשוני על הלקוח, תחום הפעילות והכיסוי המבוקש."],
    ["משלימים מידע חיתומי", "צוות קופר נינוה מכוון לשאלונים, מסמכים ונתונים נדרשים."],
    ["בדיקת התאמה", "הסיכון נבחן מול יכולות החיתום, השווקים והפתרונות הרלוונטיים."],
    ["הצעה, הפקה ושירות", "במקרה של התאמה, מתקבלת הצעה ומתקדם תהליך הפקת הפוליסה ושירות."],
  ];
  const workflowCards = `<div class="workflow-cards">${steps.map(([title, text], index) => `<article class="workflow-card"><span>${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>`;
  if (extraClass) {
    return `<section class="section section-soft agent-workflow ${extraClass}"><div class="container split-band"><div class="workflow-copy"><p class="section-slogan">תהליך עבודה לסוכני ביטוח.</p><h2>איך מגישים סיכון לקופר נינוה?</h2><p>תהליך עבודה ברור לסוכני ביטוח — מהגשת הסיכון ועד קבלת הצעה והפקת פוליסה.</p><a class="btn btn-primary" href="/contact-us" data-track="click_quote_cta">הגשת סיכון לבדיקה</a></div>${workflowCards}</div></section>`;
  }
  return `<section class="section section-soft agent-workflow"><div class="container"><div class="section-header"><div><p class="section-slogan">תהליך עבודה לסוכני ביטוח.</p><h2>איך מגישים סיכון לקופר נינוה?</h2><p>תהליך עבודה ברור לסוכני ביטוח — מהגשת הסיכון ועד קבלת הצעה והפקת פוליסה.</p></div><a class="btn btn-primary" href="/contact-us" data-track="click_quote_cta">הגשת סיכון לבדיקה</a></div>${workflowCards}</div></section>`;
}

function claimsServiceSection() {
  return `<section class="section claims-service-section"><div class="container"><div class="claims-flow-header"><p class="section-slogan">תהליך תביעה מסודר</p><h2>איך מתנהל טיפול בתביעה?</h2><p>הטיפול בתביעה מתבצע, ככלל, באמצעות סוכן הביטוח או הגורם המקצועי המטפל. המטרה היא לרכז את המידע הרלוונטי, להעבירו בצורה מסודרת לגורמים המתאימים, ולשמור על תהליך מקצועי בהתאם לתנאי הפוליסה ולסמכויות הרלוונטיות.</p></div><div class="claims-flow" aria-label="תהליך טיפול בתביעה"><article class="claims-step"><span class="claims-step-number">01</span><h3>ריכוז פרטי האירוע</h3><p>סוכן הביטוח או הגורם המטפל מרכז את פרטי האירוע, פרטי הפוליסה, מסמכים תומכים וכל מידע נוסף הדרוש לבחינה ראשונית של התביעה.</p></article><article class="claims-step"><span class="claims-step-number">02</span><h3>תיאום מול הגורמים הרלוונטיים</h3><p>קופר נינוה מסייעת בתיאום המידע מול הגורמים המקצועיים, החתמים או המבטחים הרלוונטיים, בכפוף לתנאי הפוליסה, סמכויות החיתום ואישור הגורמים המוסמכים.</p></article></div><p class="claims-flow-note">הטיפול בתביעה אינו מהווה התחייבות לאישור התביעה או לתשלום תגמולי ביטוח, והוא כפוף לתנאי הפוליסה ולהחלטת הגורמים המוסמכים.</p></div></section>`;
}

function insightsSection() {
  return `<section class="section section-soft"><div class="container"><div class="section-header"><div><p class="section-slogan">ידע שמחזק החלטות חיתום.</p><h2>ידע שמחזק החלטות חיתום</h2><p>מאמרים, מדריכים ותובנות מקצועיות בתחומי חבויות, סייבר, אחריות מקצועית, תביעות וסיכונים מורכבים.</p></div><a class="btn btn-outline" href="/knowledge-center">למרכז הידע</a></div>${cards([
    { title: "מה זה M.G.A בביטוח?", icon: "◇", text: "היכרות עם מודל חיתומי שמחבר בין סמכויות, שירות ויכולת מקצועית.", url: "/knowledge-center", cta: "לקריאה" },
    { title: "מה חשוב לדעת לפני הגשת סיכון לחיתום?", icon: "◎", text: "המידע שמסייע לקדם בדיקה יעילה, מדויקת ומבוססת יותר.", url: "/knowledge-center", cta: "לקריאה" },
    { title: "ביטוח סייבר לעסקים — אילו נתונים נדרשים?", icon: "◈", text: "נתוני פעילות, מערכות, בקרות וניסיון אירועים שכדאי להכין מראש.", url: "/knowledge-center", cta: "לקריאה" },
    { title: "אחריות מקצועית מול צד שלישי — מה ההבדל?", icon: "▧", text: "הבחנה בסיסית שעוזרת להבין חשיפות מקצועיות ומסחריות.", url: "/knowledge-center", cta: "לקריאה" },
  ], 4)}</div></section>`;
}

function actionContactSection() {
  return `<section class="section"><div class="container"><div class="center-title"><h2>איך אפשר לעזור?</h2><p>בחרו את הפעולה המתאימה, וצוות קופר נינוה ינתב את הפנייה לגורם הרלוונטי.</p></div>${cards([
    { title: "לדבר עם חתם", icon: "◇", text: "שיחה מקצועית על סיכון, מידע חסר או התאמה ראשונית.", url: "/contact-us", cta: "פתיחת פנייה" },
    { title: "הגשת סיכון כסוכן", icon: "◎", text: "סוכני ביטוח יכולים להעביר פרטי סיכון לבדיקה חיתומית.", url: "/insurance-agents", cta: "הגשת סיכון" },
    { title: "קבלת הצעה לעסק", icon: "◈", text: "בדיקת התאמה לעסק, חברה או בעל מקצוע.", url: "/business-insurance", cta: "בדיקה לעסק" },
    { title: "דיווח תביעה", icon: "▧", text: "פתיחת פנייה בנושא תביעה או אירוע ביטוחי.", url: "/claims", cta: "דיווח תביעה" },
    { title: "שירות ומסמכים", icon: "✚", text: "בקשות שירות, אישורים, מסמכים ושאלות לאחר הפקה.", url: "/contact-us", cta: "פנייה לשירות" },
  ], 5)}</div></section>`;
}

function partnerLogosSection() {
  const english = isEnglish();
  const title = english ? "Selected International Markets and Partners" : "שווקים ושותפים בינלאומיים";
  const text = english
    ? "Cooper Nineveh works with selected international insurance markets and partners, subject to underwriting authority, product appetite, market approval and applicable policy terms. Displayed logos do not imply that every partner supports every product or risk."
    : "קופר נינוה פועלת מול שווקים ושותפים בינלאומיים נבחרים, בכפוף לסמכויות חיתום, תיאבון סיכון, אישור השוק ותנאי הפוליסה הרלוונטיים. הצגת לוגו אינה מלמדת שכל שותף תומך בכל מוצר או סיכון.";
  return `<section class="partner-band" aria-labelledby="home-partners-title"><div class="container"><h2 id="home-partners-title">${title}</h2><p>${text}</p><div class="partner-logos" data-partner-logos></div></div></section>`;
}

function whyProcessCta() {
  return `
    ${whyCooperSection()}
    ${processBlock(["משאירים פרטים", "מעבירים מידע בסיסי", "בדיקת חיתום", "קבלת הצעה", "הפקה ושירות"])}
    ${faqBlock([
      ["מה קופר נינוה עושה?", "קופר נינוה מספקת פתרונות ביטוח מתקדמים לעסקים, סוכני ביטוח וסיכונים מורכבים בתחומי אחריות מקצועית, סייבר, עבודות קבלניות, חבויות ורשלנות רפואית."],
      ["האם קופר נינוה עובדת עם סוכני ביטוח?", "כן. קופר נינוה עובדת עם סוכני ביטוח המעבירים סיכונים לבדיקה ומקבלים תמיכה בתהליכי חיתום, הצעה, הפקה ושירות."],
      ["האם אפשר לפנות גם כבעל עסק?", "כן. עסקים וחברות יכולים לפנות לבדיקה ראשונית, ובמידת הצורך התהליך יתבצע יחד עם סוכן ביטוח או באמצעותו."]
    ])}
    ${finalCta("רוצים לבדוק התאמה לפתרון ביטוחי?", "השאירו פרטים ונחזור אליכם לבדיקת התאמה ראשונית.")}`;
}

function processBlock(steps) {
  return `<section class="section"><div class="container"><div class="center-title"><h2>איך עובד התהליך?</h2></div><div class="steps">${steps.map((title) => `<article class="step"><div><h3>${title}</h3><p>צוות קופר נינוה מקדם את הבדיקה בצורה מסודרת, בהתאם למידע שנמסר ולדרישות החיתום.</p></div></article>`).join("")}</div></div></section>`;
}

function faqBlock(faqs) {
  return `<section class="section section-soft"><div class="container"><div class="center-title"><h2>שאלות נפוצות</h2></div><div class="faq">${faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div></div><script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) })}</script></section>`;
}

function finalCta(title, text) {
  return `<section class="section section-navy"><div class="container section-header"><div><h2>${title}</h2><p>${text}</p></div><a class="btn btn-primary" href="/contact-us" data-track="click_quote_cta">${isEnglish() ? "Discuss Partnership" : "הגשת פנייה לחיתום"}</a></div></section>`;
}

function form(eventName, fields) {
  return `<form class="form-panel" data-form="${eventName}">
    <h2>השאירו פרטים ונחזור אליכם</h2>
    <div class="form-grid">
      ${fields.map((field) => `<label><span>${field}</span><input name="${field}" placeholder="${field}"></label>`).join("")}
      <label class="full"><span>הודעה</span><textarea name="message" placeholder="כתבו בקצרה את הצורך או הסיכון"></textarea></label>
    </div>
    <p class="form-note">הפרטים ישמשו לצורך חזרה אליכם ובדיקת התאמה בלבד.</p>
    <button class="btn btn-primary" type="submit" data-track="${eventName}">שליחת פנייה</button>
  </form>`;
}

function landingTemplate(page) {
  return `
    <section class="hero">
      <div class="container hero-inner">
        <div>
          <p class="eyebrow">קופר נינוה - בדיקת התאמה ראשונית</p>
          <h1>${page.h1}</h1>
          <p class="lead">${page.lead}</p>
          <p class="lead">בחינת סיכון באמצעות MGA ו-Coverholder עם ניסיון בחיתום סיכונים מקצועיים ומורכבים, בכפוף לתנאי הפוליסה ואישור חיתום.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="#lead-form">הגשת פנייה לחיתום</a><a class="btn btn-secondary" href="tel:0779965453" data-track="click_phone">שיחה עם צוות החיתום</a></div>
        </div>
        <div id="lead-form" class="landing-form">${form(page.event, ["שם מלא", "טלפון", "אימייל", "שם העסק / הסוכנות", "תחום פעילות", "האם יש סוכן ביטוח?"])}</div>
      </div>
    </section>
    <section class="section"><div class="container"><div class="center-title"><h2>למי זה מתאים?</h2></div>${cards(page.bullets.map((title) => ({ title, icon: "◇", text: "בדיקת התאמה ראשונית בהתאם לאופי הפעילות, המידע החיתומי והצרכים הביטוחיים." })), 4)}</div></section>
    <section class="section section-soft"><div class="container split-band"><div><h2>למה קופר נינוה?</h2><p>ניסיון בסיכונים מורכבים, גישה לשווקים בינלאומיים, חיתום ושירות מקומי ועבודה מסודרת מול סוכנים ועסקים.</p></div><ul class="feature-list">${["הגשת מידע ראשוני", "בדיקת חיתום מקצועית", "הכוונה לגבי מידע חסר", "תהליך מותאם לשוק הישראלי"].map((x) => `<li>${x}</li>`).join("")}</ul></div></section>
    ${faqBlock([
      ["האם אפשר לפנות ישירות או דרך סוכן?", "ניתן לפנות לבדיקה ראשונית. בהתאם לסוג הפנייה, ייתכן שהתהליך יתבצע יחד עם סוכן ביטוח או באמצעותו."],
      ["כמה זמן לוקח לקבל הצעה?", "משך הזמן תלוי במורכבות הסיכון ובשלמות המידע שהועבר."],
      ["האם הכיסוי מובטח?", "לא. כל הצעה וכיסוי כפופים לחיתום, תנאי פוליסה, גבולות אחריות, חריגים והשתתפויות עצמיות."]
    ])}`;
}

function bindForms() {
  document.querySelectorAll("form").forEach((formEl) => {
    formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const btn = formEl.querySelector("button[type='submit']");
      btn.textContent = isEnglish() ? "Inquiry Received" : "הפנייה נקלטה";
      btn.disabled = true;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: formEl.dataset.form || "form_submit_general", page_url: location.href, page_title: document.title });
    });
  });
}

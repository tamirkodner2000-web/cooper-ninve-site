const partnerLogos = [
  { alt: "Tokio Marine Kiln", src: "/assets/logos/partners/tokio-marine-kiln-logo.jpg", width: 780, height: 300 },
  { alt: "Ascot", src: "/assets/logos/partners/ascot-partner-logo.png", width: 900, height: 550 },
  { alt: "Miller", src: "/assets/logos/partners/miller-partner-logo.png", width: 514, height: 183 },
  { alt: "Beazley", src: "/assets/logos/partners/beazley-logo.png", width: 1024, height: 323 },
  { alt: "CFC", src: "/assets/logos/partners/cfc-logo.jpg", width: 623, height: 241 },
  { alt: "QBE", src: "/assets/logos/partners/qbe-partner-logo.png", width: 1249, height: 506 },
];

const products = [
  { title: "אחריות מקצועית", url: "/professional-liability-insurance", icon: "◎", text: "הגנה מפני תביעות הנובעות מטעות מקצועית, רשלנות, ייעוץ שגוי או מחדל במסגרת מתן שירות מקצועי." },
  { title: "סייבר", url: "/cyber-insurance", icon: "◈", text: "כיסוי לאירועי סייבר, מתקפות כופר, דליפות מידע, השבתת פעילות, הוצאות שחזור ותביעות צד שלישי." },
  { title: "צד שלישי", url: "/liability-insurance", icon: "◇", text: "כיסוי לעסקים מפני תביעות צד שלישי בגין נזקי גוף, רכוש או אחריות הנובעת מהפעילות העסקית." },
  { title: "חבות מעבידים", url: "/employers-liability-insurance", icon: "▥", text: "פתרונות לחבות מעבידים והגנה מפני תביעות עובדים, בכפוף לתנאי הפוליסה ואישור חיתום." },
  { title: "חבות המוצר", url: "/product-liability-insurance", icon: "▣", text: "כיסוי ליצרנים, יבואנים ומשווקים החשופים לתביעות הנובעות ממוצר, פגם או נזק לצד שלישי." },
  { title: "עבודות קבלניות", url: "/contractors-all-risks-insurance", icon: "▧", text: "פתרונות ביטוח לפרויקטים, קבלנים, יזמים ועבודות תשתית, כולל רכוש, צד שלישי וחבות מעבידים." },
  { title: "רשלנות רפואית", url: "/medical-malpractice-insurance", icon: "✚", text: "פתרונות לרופאים, מטפלים, מרפאות וגורמים רפואיים החשופים לתביעות בגין רשלנות מקצועית." },
  { title: "דירקטורים ונושאי משרה", url: "/directors-and-officers-insurance", icon: "◉", text: "פתרונות אחריות נושאי משרה לחברות, הנהלות ודירקטוריונים מול חשיפות ניהוליות ומשפטיות." },
  { title: "הפקות מדיה וסרטים", url: "/media-production-insurance", icon: "▤", text: "מענה ביטוחי להפקות, צוותים, ציוד, לוקיישנים ופעילות מדיה הדורשת התאמה חיתומית." },
  { title: "סיכונים מיוחדים", url: "/special-risks-insurance", icon: "◌", text: "בדיקת פתרונות לסיכונים מורכבים, חריגים או לא סטנדרטיים שאינם נכנסים לתבנית רגילה." },
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

const pages = {
  "/": {
    title: "קופר נינוה | מרכז חיתום הבנוי לעתיד",
    description: "קופר נינוה היא מרכז חיתום מתקדם ו־MGA המספק פתרונות חיתום, הפקה וניהול פוליסות לסוכני ביטוח, עסקים וסיכונים מקצועיים ומסחריים מורכבים.",
    eyebrow: "MGA ו-Coverholder בישראל",
    hideEyebrow: true,
    h1: "קודם כל יושרה.<br>קופר נינוה,<br>מרכז חיתום הבנוי לעתיד.",
    lead: "קופר נינוה מנהלת תיקים בשם-5 מבטחי משנה בשוק בישראל, ומספקת שירות לקרוב ל-1,000 סוכני ביטוח.",
    primary: ["צור קשר", "/contact-us"],
    secondary: ["פתרונות לסוכני ביטוח", "/insurance-agents"],
    highlights: ["פעילות מול חתמי Lloyd’s ושווקים בינלאומיים", "פתרונות לסיכונים מורכבים", "חיתום ושירות מקומי בישראל", "עבודה מול סוכני ביטוח ועסקים", "פוליסות ושירות מותאמים לשוק הישראלי"],
    sections: "home",
  },
  "/insurance-solutions": {
    title: "פתרונות ביטוח לעסקים וסיכונים מורכבים | קופר נינוה",
    description: "פתרונות ביטוח מתקדמים בתחומי אחריות מקצועית, סייבר, עבודות קבלניות, רשלנות רפואית, חבויות וסיכונים מיוחדים.",
    h1: "פתרונות ביטוח לעסקים, סוכני ביטוח וסיכונים מורכבים",
    lead: "לא כל עסק, פרויקט או בעל מקצוע חשופים לאותם סיכונים. פתרון ביטוחי נכון מתחיל בהבנת תחום הפעילות, דרישות חוזיות, ניסיון תביעות ורמת המורכבות.",
    primary: ["לקבלת הצעה", "/contact-us"],
    secondary: ["פתרונות לסוכני ביטוח", "/insurance-agents"],
    sections: "solutions",
  },
  "/insurance-agents": {
    title: "פתרונות חיתום לסוכני ביטוח | קופר נינוה",
    description: "קופר נינוה מספקת לסוכני ביטוח פתרונות חיתום, הפקה ושירות בתחומי אחריות מקצועית, סייבר, קבלנים, חבויות וסיכונים מיוחדים.",
    h1: "פתרונות חיתום והפקה לסוכני ביטוח",
    lead: "גישה לפתרונות ביטוח מתקדמים בתחומי אחריות מקצועית, סייבר, עבודות קבלניות, חבויות, רשלנות רפואית וסיכונים מיוחדים, עם יכולת חיתום ושירות מקומי.",
    primary: ["הצטרפות כסוכן / פתיחת פנייה", "/contact-us"],
    secondary: ["הגשת סיכון לבדיקה", "/contact-us"],
    sections: "agents",
  },
  "/business-insurance": {
    title: "ביטוח לעסקים וחברות | קופר נינוה",
    description: "פתרונות ביטוח לעסקים, חברות וסיכונים מורכבים בתחומי אחריות מקצועית, סייבר, עבודות קבלניות, חבויות ורשלנות רפואית.",
    h1: "פתרונות ביטוח לעסקים, חברות וסיכונים מורכבים",
    lead: "פתרונות ביטוח מתקדמים לעסקים וחברות תוך התאמה לאופי הפעילות, החשיפות, דרישות החוזה והצרכים המסחריים של העסק.",
    primary: ["בדיקת התאמה לעסק", "/contact-us"],
    secondary: ["לקבלת הצעה", "/contact-us"],
    sections: "business",
  },
  "/claims": {
    title: "תביעות ושירות | קופר נינוה",
    description: "פנייה בנושא תביעה, שירות, מסמכים וניהול תהליכים לאורך חיי הפוליסה מול קופר נינוה.",
    h1: "תביעות ושירות לאורך חיי הפוליסה",
    lead: "קופר נינוה מלווה סוכנים ולקוחות גם לאחר ההפקה - בשירות, מסמכים, תביעות וניהול תהליכים מול הגורמים הרלוונטיים.",
    primary: ["פנייה בנושא תביעה", "/contact-us"],
    secondary: ["שירות ומסמכים", "/contact-us"],
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
  "/contact-us": {
    title: "צור קשר | קופר נינוה",
    description: "צרו קשר עם קופר נינוה לקבלת מידע, הצעת ביטוח או בדיקת התאמה בתחומי אחריות מקצועית, סייבר, קבלנים, חבויות וסיכונים מיוחדים.",
    h1: "צור קשר עם קופר נינוה",
    lead: "רוצים לקבל הצעה, להגיש סיכון לבדיקה או להבין איזה פתרון ביטוחי מתאים לכם? השאירו פרטים וצוות קופר נינוה יחזור אליכם.",
    primary: ["השארת פרטים", "/contact-us"],
    secondary: ["הגשת סיכון כסוכן", "/insurance-agents"],
    sections: "contact",
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

const app = document.querySelector("[data-app]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mainNav = document.querySelector("[data-main-nav]");

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

window.addEventListener("popstate", render);
window.addEventListener("DOMContentLoaded", render);
document.addEventListener("click", (event) => {
  const anchor = event.target.closest("a[href^='/']");
  if (!anchor || anchor.target || event.metaKey || event.ctrlKey || event.shiftKey) return;
  event.preventDefault();
  history.pushState(null, "", anchor.getAttribute("href"));
  render();
});

function pathFromLocation() {
  return pages[location.pathname] ? location.pathname : "/";
}

function link(url) {
  return url;
}

function setMeta(page) {
  document.title = page.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", page.description || page.lead || "");
}

function render() {
  const path = pathFromLocation();
  const page = pages[path] || pages["/"];
  setMeta(page);
  document.body.classList.toggle("lp", path.startsWith("/lp/"));
  document.querySelectorAll(".main-nav a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === path);
  });
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  app.innerHTML = path.startsWith("/lp/") ? landingTemplate(page) : standardTemplate(page, path);
  renderPartnerLogos();
  bindForms();
  window.scrollTo({ top: 0, behavior: "instant" });
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

function hero(page) {
  const isHomeHero = page.sections === "home";
  const heroTitle = page.positioning
    ? `<h1 class="hero-title"><span class="hero-title-line">${page.h1}</span><br><span class="hero-title-line">${page.positioning.replace(/\n/g, "</span><br><span class=\"hero-title-line\">")}</span></h1>`
    : `<h1 class="hero-title">${page.h1}</h1>`;
  return `
    <section class="hero${isHomeHero ? " hero-home" : ""}">
      <div class="container hero-inner">
        <div class="hero-copy">
          ${page.hideEyebrow ? "" : `<p class="eyebrow">${page.eyebrow || "קופר נינוה"}</p>`}
          ${heroTitle}
          <p class="lead">${page.lead}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${link(page.primary[1])}" data-track="click_quote_cta">${page.primary[0]}</a>
            <a class="btn btn-secondary" href="${link(page.secondary[1])}">${page.secondary[0]}</a>
          </div>
        </div>
        <aside class="hero-card hero-why-card">
          <h2>למה קופר נינוה?</h2>
          <ul>${(page.highlights || ["חיתום ושירות מקומי", "גישה לשווקים בינלאומיים", "ניסיון בסיכונים מורכבים", "עבודה עם סוכנים ועסקים"]).map((x) => `<li>${x}</li>`).join("")}</ul>
        </aside>
      </div>
    </section>`;
}

function breadcrumb(path, current) {
  if (path === "/") return "";
  return `<div class="breadcrumb"><div class="container"><a href="/">דף הבית</a> / ${current}</div></div>`;
}

function standardTemplate(page, path) {
  return `${breadcrumb(path, page.h1)}${hero(page)}${sections(page.sections, path)}`;
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
  if (productPages[path]) return productTemplate(productPages[path]);
  const map = {
    home: homeSections,
    solutions: solutionsSections,
    agents: agentsSections,
    business: businessSections,
    claims: claimsSections,
    about: aboutSections,
    contact: contactSections,
    knowledge: knowledgeSections,
  };
  return (map[type] || homeSections)();
}

function homeSections() {
  return `
    ${mgaPositioningBlock()}
    ${lloydsAdvantagesSection()}
    ${agentJourneySection()}
    <section class="section section-navy">
      <div class="container">
        <div class="section-header"><div><p class="section-slogan">פתרונות לסיכונים שלא נכנסים לתבנית רגילה.</p><h2>פתרונות חיתום וביטוח</h2><p>קופר נינוה מספקת פתרונות חיתום, הפקה וניהול פוליסות במגוון תחומים מקצועיים ומסחריים — עבור סוכני ביטוח, עסקים וסיכונים מורכבים.</p></div><a class="btn btn-primary" href="/insurance-solutions">לכל הפתרונות</a></div>
        ${productCards()}
      </div>
    </section>
    ${whyCooperSection()}
    ${claimsServiceSection()}
    ${insightsSection()}
    ${partnerLogosSection()}
    ${processBlock(["משאירים פרטים", "מעבירים מידע בסיסי", "בדיקת חיתום", "קבלת הצעה", "הפקה ושירות"])}
    ${actionContactSection()}
    ${homepageLeadForm()}`;
}

function mgaPositioningBlock() {
  return `<section class="mga-block" aria-labelledby="mga-title"><div class="mga-inner"><div class="mga-copy"><p class="mga-kicker">לא עוד סוכנות ביטוח, תקראו לנו חברת חיתום.</p><h2 id="mga-title">קופר נינוה היא <span>M.G.A</span></h2><p>קופר נינוה פועלת כמרכז חיתום עבור סוכני ביטוח ועסקים, ומעמידה פתרונות ביטוח מתקדמים בתחומי אחריות מקצועית, חבויות, קבלנים, סייבר, רשלנות רפואית וסיכונים מיוחדים.</p><strong>ONE STOP SHOP חיתומי לסוכני ביטוח ולעסקים המחפשים מענה מקצועי, מהיר ומדויק.</strong><a class="btn btn-primary" href="/about-us">עוד על קופר נינוה</a></div></div></section>`;
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

function solutionsSections() {
  return `
    <section class="section">
      <div class="container">
        <div class="center-title"><h2>פתרונות חיתום וביטוח</h2><p>קופר נינוה מספקת פתרונות חיתום, הפקה וניהול פוליסות במגוון תחומים מקצועיים ומסחריים — עבור סוכני ביטוח, עסקים וסיכונים מורכבים.</p></div>
        ${productCards()}
      </div>
    </section>
    <section class="section section-soft"><div class="container">${audienceRouting()}</div></section>
    ${faqBlock([
      ["איזה סוגי ביטוח קופר נינוה מספקת?", "פתרונות בתחומי אחריות מקצועית, סייבר, עבודות קבלניות, רשלנות רפואית, חבויות, צד שלישי וסיכונים מיוחדים."],
      ["האם הפנייה מתאימה גם לסוכני ביטוח?", "כן. סוכני ביטוח יכולים להגיש סיכונים דרך עמוד הסוכנים או דרך טופס יצירת הקשר."],
      ["האם ניתן לבדוק סיכון מורכב?", "כן. ניתן לשלוח סיכונים מורכבים לבדיקה ראשונית, בכפוף לאפשרויות החיתום והשוק."]
    ])}
    ${finalCta("רוצים לבדוק איזה פתרון ביטוחי מתאים לכם?", "השאירו פרטים ונחזור אליכם לבדיקת התאמה ראשונית.")}`;
}

function agentsSections() {
  return `
    ${agentJourneySection()}
    <section class="section"><div class="container split-band"><div><h2>למה סוכני ביטוח עובדים עם קופר נינוה?</h2><p>קופר נינוה פועלת כ-MGA ו-Coverholder ומספקת לסוכני ביטוח מענה מקצועי לסיכונים שבהם נדרשת יכולת חיתומית, גישה לשווקים בינלאומיים והבנה של השוק הישראלי.</p></div><ul class="feature-list">${["פתרונות ביטוח מתקדמים", "ניסיון בסיכונים מורכבים", "תמיכה מקצועית בהגשת סיכונים", "חיתום ושירות מקומי", "עבודה מול סוכני ביטוח בפריסה רחבה"].map((x) => `<li>${x}</li>`).join("")}</ul></div></section>
    <section class="section section-soft"><div class="container"><div class="center-title"><h2>אילו סיכונים ניתן להגיש?</h2></div>${productCards()}</div></section>
    ${processBlock(["פתיחת פנייה", "השלמת מידע חיתומי", "בדיקת חיתום", "קבלת הצעה", "הפקה ושירות"])}
    <section class="section"><div class="container split-band"><div><h2>רוצים לעבוד איתנו כסוכנים?</h2><p>השאירו פרטים ונחזור אליכם לבדיקת שיתוף פעולה או הגשת סיכון ראשון.</p></div>${form("form_submit_agent", ["שם הסוכן", "שם הסוכנות", "טלפון", "אימייל", "תחומי פעילות עיקריים", "סוגי סיכונים שמעניינים אותך"])}</div></section>`;
}

function businessSections() {
  return `
    <section class="section"><div class="container"><div class="center-title"><h2>איזה עסק צריך פתרון ביטוח מותאם?</h2><p>עסק טכנולוגי, משרד ייעוץ, קבלן, מרפאה או חברה מקצועית אינם צריכים את אותה פוליסה בדיוק.</p></div>${cards(["עסקים המספקים שירות מקצועי", "חברות טכנולוגיה ועסקים דיגיטליים", "קבלנים ופרויקטים", "מרפאות ומקצועות טיפוליים", "עסקים עם פעילות מול קהל"].map((title) => ({ title, icon: "◇", text: "התאמת הביטוח לאופי הפעילות, הלקוחות, החשיפה המשפטית והמידע החיתומי." })), 3)}</div></section>
    <section class="section section-navy"><div class="container"><div class="section-header"><div><h2>פתרונות ביטוח מרכזיים לעסקים</h2><p>מענה עסקי בתחומי אחריות מקצועית, סייבר, קבלנים, רשלנות רפואית וחבויות.</p></div></div>${productCards()}</div></section>
    ${processBlock(["משאירים פרטים", "מבינים את הצורך", "משלימים מידע", "בדיקת חיתום", "הצעה והפקה"])}
    <section class="section section-soft"><div class="container split-band"><div><h2>בדיקת התאמה לביטוח עסקי</h2><p>ככל שהמידע הראשוני מלא וברור יותר, ניתן לקדם את בדיקת החיתום בצורה יעילה יותר.</p></div>${form("form_submit_quote_request", ["שם מלא", "טלפון", "אימייל", "שם העסק", "תחום פעילות", "סוג ביטוח מבוקש"])}</div></section>`;
}

function aboutSections() {
  return `
    <section class="section"><div class="container split-band"><div><p class="section-slogan" lang="en">First of all, integrity.</p><h2>מי אנחנו?</h2><p>קופר נינוה מתמחה במתן פתרונות ביטוח לסיכונים עסקיים, מקצועיים ומורכבים, תוך שילוב בין ניסיון חיתומי, היכרות עם השוק הישראלי וגישה לשווקים בינלאומיים.</p></div><ul class="feature-list">${["חיתום מקומי", "הפקה ושירות בישראל", "גישה לשווקים בינלאומיים", "מומחיות בסיכונים מקצועיים ומסחריים"].map((x) => `<li>${x}</li>`).join("")}</ul></div></section>
    ${teamSection()}
    <section class="section section-soft"><div class="container"><div class="center-title"><h2>במה אנחנו מתמחים?</h2></div>${productCards()}</div></section>
    <section class="section"><div class="container"><div class="center-title"><h2>הגישה שלנו</h2></div>${cards(["מקצועיות חיתומית", "שירות מקומי", "פתרונות מותאמים", "שקיפות בתהליך", "חדשנות ותהליכים דיגיטליים"].map((title) => ({ title, icon: "•", text: "תהליך עבודה מסודר שמתחיל בהבנת הסיכון וממשיך לבדיקת התאמה, הצעה, הפקה ושירות." })), 3)}</div></section>
    ${finalCta("רוצים לדעת איך קופר נינוה יכולה לעזור לכם?", "השאירו פרטים ונחזור אליכם לבדיקת התאמה ראשונית.")}`;
}

function teamSection() {
  return `<section class="section team-section" aria-labelledby="team-title"><div class="container"><div class="center-title"><p class="section-slogan">ידע, חיתום ושירות לאורך חיי הפוליסה.</p><h2 id="team-title">הכירו את המומחים שלנו</h2><p>צוות קופר נינוה משלב ניסיון חיתומי, ניהולי, משפטי ותפעולי — במטרה לספק לסוכני ביטוח ולעסקים שירות מקצועי לאורך כל חיי הפוליסה.</p></div><div class="team-grid">${teamMembers.map((member) => `<article class="team-card"><div class="team-photo"><img src="${member.image}" alt="${member.name} - ${member.role}" loading="lazy" width="420" height="320" onerror="this.hidden=true; this.nextElementSibling.hidden=false;"><span class="team-fallback" hidden>${member.initials}</span></div><div class="team-copy"><h3>${member.name}</h3><p class="team-role">${member.role}</p><p>${member.bio}</p></div></article>`).join("")}</div></div></section>`;
}

function contactSections() {
  return `
    ${actionContactSection()}
    <section class="section"><div class="container split-band"><div><h2>השאירו פרטים</h2><p>בחרתם את סוג הפנייה? השאירו פרטים בסיסיים וצוות קופר נינוה ינתב את הפנייה לגורם המתאים.</p></div>${form("form_submit_general", ["שם מלא", "טלפון", "אימייל", "חברה / סוכנות", "סוג הפנייה", "סוג ביטוח רלוונטי"])}</div></section>
    <section class="section section-soft"><div class="container"><div class="center-title"><h2>פרטי התקשרות</h2></div>${cards([
      { title: "טלפון", icon: "☎", text: "077-9965453" },
      { title: "אימייל", icon: "✉", text: "info@cooper-ninve.com" },
      { title: "כתובת", icon: "⌖", text: "רח׳ דיזנגוף 111, תל אביב" },
    ])}</div></section>
    ${faqBlock([
      ["האם אפשר לפנות גם אם אני לא יודע איזה ביטוח אני צריך?", "כן. ניתן להשאיר פרטים בסיסיים על העסק או הסיכון, וצוות קופר נינוה יכוון את הפנייה לגורם המתאים."],
      ["האם סוכן ביטוח יכול להגיש סיכון דרך האתר?", "כן. סוכני ביטוח יכולים להגיש פנייה דרך טופס האתר ולצרף מידע, שאלונים או מסמכים רלוונטיים."],
      ["אילו מסמכים כדאי לצרף?", "כדאי לצרף שאלון הצעה, פוליסה קיימת, דרישות ביטוח חוזיות, ניסיון תביעות או כל מסמך שמתאר את הסיכון."]
    ])}`;
}

function knowledgeSections() {
  const articles = [
    ["מה זה MGA בביטוח?", "הסבר מקצועי על מודל MGA, תפקידו מול סוכני ביטוח, חיתום, הפקה ושירות."],
    ["מה זה Lloyd’s Coverholder?", "משמעות מודל Coverholder והקשר לפתרונות ביטוח בינלאומיים."],
    ["איזה מידע צריך להצעת ביטוח אחריות מקצועית?", "רשימת נתונים ומסמכים שמסייעים לקדם בדיקת חיתום יעילה."],
    ["האם עסק קטן צריך ביטוח סייבר?", "מתי גם עסק קטן חשוף לאירועי סייבר, דליפות מידע והשבתת פעילות."],
  ];
  return `${insightsSection()}<section class="section"><div class="container split-band"><div><h2>מאמרים ונושאים מתוכננים</h2><p>מרכז הידע מוכן להתרחבות SEO עתידית לפי קבוצות המילים שהוגדרו בפרויקט.</p></div><div class="knowledge-list">${articles.map(([t, p]) => `<article><h3>${t}</h3><p>${p}</p><a href="/contact-us">שאלה לצוות החיתום</a></article>`).join("")}</div></div></section>${finalCta("מחפשים תשובה מקצועית?", "השאירו פרטים ונחזור אליכם עם הכוונה ראשונית.")}`;
}

function claimsSections() {
  return `
    ${claimsServiceSection()}
    <section class="section section-soft"><div class="container split-band"><div><h2>מה כדאי לצרף לפנייה?</h2><p>מידע מלא מסייע לקדם טיפול מסודר מול הגורמים הרלוונטיים.</p></div><ul class="feature-list">${["מספר פוליסה או פרטי מבוטח", "תיאור האירוע והמועד", "מסמכים, תמונות או התכתבויות רלוונטיות", "פרטי סוכן הביטוח אם קיים", "פרטי התקשרות להמשך טיפול"].map((x) => `<li>${x}</li>`).join("")}</ul></div></section>
    ${actionContactSection()}`;
}

function productTemplate(page) {
  return `
    <section class="section"><div class="container"><div class="center-title"><h2>למי זה מתאים?</h2></div>${cards(page.who.map((title) => ({ title, icon: "◇", text: "מתאים לבדיקה חיתומית בהתאם לאופי הפעילות, היקף הסיכון ותנאי הפוליסה." })), 3)}</div></section>
    <section class="section section-soft"><div class="container split-band"><div><h2>מה הכיסוי יכול לכלול?</h2><p>הכיסוי המדויק כפוף לתנאי הפוליסה, אישור חיתום, גבולות אחריות, חריגים, השתתפויות עצמיות והפעילות הספציפית.</p></div><ul class="feature-list">${page.coverage.map((x) => `<li>${x}</li>`).join("")}</ul></div></section>
    <section class="section"><div class="container split-band"><div><h2>איזה מידע נדרש לקבלת הצעה?</h2><p>מידע מלא וברור מאפשר בדיקת התאמה יעילה יותר.</p><a class="btn btn-primary" href="/contact-us" data-track="click_quote_cta">שלחו פרטים לבדיקה ראשונית</a></div><ul class="feature-list">${page.info.map((x) => `<li>${x}</li>`).join("")}</ul></div></section>
    <section class="section section-navy"><div class="container"><div class="section-header"><div><h2>פתרון מתאים גם לסוכני ביטוח</h2><p>סוכנים יכולים להגיש סיכונים, לקבל הכוונה לגבי מידע חסר וללוות את הלקוח בתהליך ההצעה וההפקה.</p></div><a class="btn btn-primary" href="/insurance-agents">הגשת סיכון על ידי סוכן</a></div></div></section>
    ${faqBlock(page.faqs)}
    ${finalCta("רוצים לבדוק התאמה?", "השאירו פרטים וצוות קופר נינוה יחזור אליכם לבדיקת התאמה ראשונית.")}`;
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

function agentJourneySection() {
  return `<section class="section section-soft"><div class="container split-band"><div><p class="section-slogan">מרכז חיתום לסוכנים ולעסקים שחושבים קדימה.</p><h2>מרכז חיתום לסוכני ביטוח</h2><p>קופר נינוה מספקת לסוכני ביטוח גישה לפתרונות חיתום, הפקה ושירות בתחומי אחריות מקצועית, סייבר, חבויות, עבודות קבלניות, רשלנות רפואית וסיכונים מיוחדים.</p><a class="btn btn-primary" href="/contact-us" data-track="click_quote_cta">הגשת סיכון לבדיקה</a></div><ul class="feature-list">${["הכוונה לגבי מידע חיתומי חסר", "בדיקת התאמה לסיכונים מורכבים", "הפקה ושירות מקומי", "ליווי לאורך חיי הפוליסה"].map((x) => `<li>${x}</li>`).join("")}</ul></div></section>`;
}

function claimsServiceSection() {
  return `<section class="section"><div class="container split-band"><div><p class="section-slogan">שירות לא מסתיים בהפקה.</p><h2>תביעות ושירות לאורך חיי הפוליסה</h2><p>קופר נינוה מלווה סוכנים ולקוחות גם לאחר ההפקה — בשירות, מסמכים, תביעות וניהול תהליכים מול הגורמים הרלוונטיים.</p><a class="btn btn-outline" href="/claims">פנייה בנושא תביעה</a></div>${cards([{ title: "דיווח תביעה", icon: "▧", text: "פתיחת פנייה מסודרת עם פרטי האירוע והמסמכים הרלוונטיים.", url: "/claims", cta: "לדיווח תביעה" }, { title: "שירות ומסמכים", icon: "◎", text: "בקשות שירות, אישורים, מסמכים והכוונה לאחר הפקת הפוליסה.", url: "/contact-us", cta: "פנייה לשירות" }], 2)}</div></section>`;
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
  return `<section class="partner-band" aria-labelledby="home-partners-title"><div class="container"><h2 id="home-partners-title">שווקים ושותפים בינלאומיים</h2><p>קופר נינוה פועלת מול שווקים, חתמים וספקי ביטוח בינלאומיים לצורך התאמת פתרונות ביטוח לסיכונים מקצועיים ומסחריים.</p><div class="partner-logos" data-partner-logos></div></div></section>`;
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
  return `<section class="section section-navy"><div class="container section-header"><div><h2>${title}</h2><p>${text}</p></div><a class="btn btn-primary" href="/contact-us" data-track="click_quote_cta">לקבלת הצעה</a></div></section>`;
}

function homepageLeadForm() {
  return `<section class="section section-soft"><div class="container split-band"><div><h2>השאירו פרטים לבדיקה ראשונית</h2><p>ספרו לנו מי אתם ואיזה פתרון ביטוחי נדרש, וצוות קופר נינוה יחזור אליכם להכוונה ראשונית.</p></div><form class="form-panel" data-form="form_submit_homepage_lead">
    <h2>פנייה מהירה</h2>
    <div class="form-grid">
      <label><span>שם מלא</span><input name="name" placeholder="שם מלא" autocomplete="name"></label>
      <label><span>טלפון</span><input name="phone" placeholder="טלפון" autocomplete="tel"></label>
      <label><span>אימייל</span><input name="email" placeholder="אימייל" autocomplete="email"></label>
      <label><span>אני</span><select name="audience"><option>סוכן ביטוח</option><option>בעל עסק</option><option>אחר</option></select></label>
      <label class="full"><span>סוג ביטוח מבוקש</span><input name="insurance_type" placeholder="לדוגמה: סייבר, אחריות מקצועית, חבויות"></label>
      <label class="full"><span>הודעה קצרה</span><textarea name="message" placeholder="כתבו בקצרה את הצורך או הסיכון"></textarea></label>
    </div>
    <p class="form-note">הפרטים ישמשו לצורך חזרה אליכם ובדיקת התאמה בלבד.</p>
    <button class="btn btn-primary" type="submit" data-track="form_submit_homepage_lead">שליחת פנייה</button>
  </form></div></section>`;
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
          <p class="lead">פתרונות ביטוח מתקדמים באמצעות MGA ו-Coverholder עם ניסיון בסיכונים מקצועיים ומורכבים.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="#lead-form">לקבלת הצעה</a><a class="btn btn-secondary" href="tel:0779965453" data-track="click_phone">שיחה עם צוות החיתום</a></div>
        </div>
        <div id="lead-form" class="landing-form">${form(page.event, ["שם מלא", "טלפון", "אימייל", "שם העסק / הסוכנות", "תחום פעילות", "האם יש סוכן ביטוח?"])}</div>
      </div>
    </section>
    <section class="section"><div class="container"><div class="center-title"><h2>למי זה מתאים?</h2></div>${cards(page.bullets.map((title) => ({ title, icon: "◇", text: "בדיקת התאמה ראשונית בהתאם לאופי הפעילות, המידע החיתומי והצרכים הביטוחיים." })), 4)}</div></section>
    <section class="section section-soft"><div class="container split-band"><div><h2>למה קופר נינוה?</h2><p>ניסיון בסיכונים מורכבים, גישה לשווקים בינלאומיים, חיתום ושירות מקומי ועבודה מסודרת מול סוכנים ועסקים.</p></div><ul class="feature-list">${["הגשת פנייה מהירה", "בדיקת חיתום מקצועית", "הכוונה לגבי מידע חסר", "תהליך מותאם לשוק הישראלי"].map((x) => `<li>${x}</li>`).join("")}</ul></div></section>
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
      btn.textContent = "הפנייה נקלטה";
      btn.disabled = true;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: formEl.dataset.form || "form_submit_general", page_url: location.href, page_title: document.title });
    });
  });
}

/* =========================================================
   EBRAHIM AL-SHABEBI — PORTFOLIO INTERACTIONS
   ========================================================= */

const projects = [
  {
    name: "Shamaa",
    category: "full-stack",
    label: "Full-Stack",
    description:
      "A full-stack e-commerce platform for Shamaa, a handmade candle business. Customers can browse products, add items to their basket, and place orders through a complete shopping experience powered by a custom frontend, backend, and PostgreSQL database.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    preview: "https://shamaa.shop/",
    url: "https://shamaa.shop/",
  },

  {
    name: "Ebdaa Media",
    category: "full-stack",
    label: "Full-Stack",
    description:
      "A full-stack media portfolio platform built with React and Vite, featuring a custom admin panel for managing the company's work showcase. Administrators can add and manage images and videos displayed in the Our Work section, with PostgreSQL handling the project's data and a responsive custom-designed frontend.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "PostgreSQL",
      "Node.js",
      "Express.js",
    ],
    preview: "https://ebdaa-media.com/",
    url: "https://ebdaa-media.com/",
  },

  {
    name: "Turbo Travel",
    category: "full-stack",
    label: "Full-Stack",
    description:
      "A full-stack travel management platform built with React, featuring a custom admin panel for managing customers, tickets, destinations, and complete trip details. The system also automates customer communication by sending trip information and booking details directly through WhatsApp.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "PostgreSQL",
      "Node.js",
      "Express.js",
    ],
    preview: "https://turbotravel.net/",
    url: "https://turbotravel.net/",
  },

  {
    name: "Muwahjeh",
    category: "full-stack",
    label: "Full-Stack",
    description:
      "A university guidance platform designed to help students discover the academic majors that best match their interests. Students can take a Holland-based career interest assessment, receive their top-matching majors based on their results, and explore universities, faculties, and available study programs. The platform also includes a complete user authentication system and PostgreSQL database for managing student accounts and assessment data.",
    technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
    preview: "https://muwajeh.com/",
    url: "https://muwajeh.com/",
  },

  {
    name: "Erasmus",
    category: "wordpress",
    label: "WordPress",
    description:
      "A team-developed Erasmus website for Istanbul Aydın University. We first designed and developed the complete website from scratch using HTML, CSS, and JavaScript, then converted the project into a WordPress website using the Blocksy theme while preserving its original structure, design, and functionality.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Blocksy"],
    preview: "https://ebrahimalshabebi.github.io/Erasmus/",
    url: "https://ebrahimalshabebi.github.io/Erasmus/",
  },

  {
    name: "Delightful",
    category: "frontend",
    label: "Frontend",
    description:
      "A team-developed website for a short-term Erasmus program, created with the same Erasmus project team. The website was designed and developed from scratch with a custom frontend, focusing on a clear, engaging presentation of the program, its information, and the overall participant experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    preview: "https://mo-melhi.github.io/Delightful/index.html",
    url: "https://mo-melhi.github.io/Delightful/index.html",
  },

  {
    name: "Annona",
    category: "full-stack",
    label: "Full-Stack",
    description:
      "A university group project focused on making teamwork more transparent and measurable. Annona helps teams organize tasks through a Kanban board, track individual contributions, calculate contribution scores based on activity and completed work, and visualize team performance through analytics, leaderboards, and activity logs.",
    technologies: ["React", "Node.js", "SQL"],
    preview: "https://mo-melhi.github.io/Annona/",
    url: "https://mo-melhi.github.io/Annona/",
  },

  {
    name: "Anisphone Rate Us",
    category: "frontend",
    label: "Frontend",
    description:
      "A lightweight customer feedback and rating page developed for Anisphone and designed for quick access through QR codes. Customers can scan the QR code, open the rating page instantly, and submit their feedback through a simple, mobile-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    preview: "https://rateus.anisfon.com/",
    url: "https://rateus.anisfon.com/",
  },

  {
    name: "Ghassan",
    category: "frontend",
    label: "Frontend",
    description:
      "A modern informational website developed for Ghassan Trading as a lightweight frontend foundation. The project presents the company and its services through a clean, responsive interface while providing a foundation that can be expanded with additional functionality and content in the future.",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    preview: "https://ghbotrading.com/",
    url: "https://ghbotrading.com/",
  },
];

/* =========================================================
   PROJECT GRID
   ========================================================= */

const projectsGrid = document.getElementById("projectsGrid");

/* =========================================================
   LANGUAGE / TRANSLATIONS
   ========================================================= */

let currentLanguage = localStorage.getItem("portfolio-language") || "en";

const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.talk": "Let's talk",

    "hero.available": "Available for web projects",
    "hero.kicker": "FULL-STACK WEB DEVELOPER",
    "hero.title1": "Building the web",
    "hero.title2": "from idea to reality.",
    "hero.description":
      "I build complete web applications from concept to deployment — combining frontend, backend, databases, APIs, authentication, and administrative systems into practical products.",
    "hero.viewWork": "View my work",
    "hero.workTogether": "Let's work together",
    "hero.downloadCV": "Download CV",
    "hero.location": "Istanbul, Türkiye",
    "hero.educationMeta": "Computer Engineering · 2023—2027",
    "hero.coreStack": "CORE STACK",
    "hero.scroll": "Scroll to explore",
    "hero.laptopSub": "FULL-STACK WEB DEVELOPER",

    "about.label": "ABOUT ME",
    "about.title1": "More than code.",
    "about.title2": "I build complete systems.",
    "about.largeCopy":
      "I'm <strong>Ebrahim Al-Shabebi</strong>, a Full-Stack Web Developer and Web Development Lead focused on turning ideas into reliable, usable web applications.",
    "about.bodyCopy":
      "My work covers the full path from interface design and frontend functionality to backend services, databases, APIs, authentication, administrative panels, deployment, and maintenance.",
    "about.signature": "Frontend + Backend + Database",
    "about.stat1": "client websites delivered",
    "about.stat2": "projects ready to showcase",
    "about.stat3": "full-stack mindset from concept to deployment",
    "about.tag1": "Web Development Lead",
    "about.tag2": "Full-Stack Development",
    "about.tag3": "Database-driven Apps",
    "about.tag4": "REST APIs",
    "about.tag5": "Authentication",
    "about.tag6": "Admin Systems",

    "skills.label": "SKILLS / TECHNOLOGIES",
    "skills.title1": "The tools behind",
    "skills.title2": "the work.",
    "skills.intro":
      "A practical stack for building, connecting, deploying, and maintaining modern web applications.",
    "skills.frontend.title": "Frontend",
    "skills.frontend.desc":
      "Interfaces that are responsive, clear, and built for real users.",
    "skills.backend.title": "Backend",
    "skills.backend.desc":
      "Application logic, APIs, authentication, CRUD, and admin systems.",
    "skills.db.title": "Databases",
    "skills.db.desc":
      "Structured data, relationships, queries, and database-driven products.",
    "skills.cms.title": "CMS / Web",
    "skills.cms.desc":
      "Website customization and maintenance for content-driven projects.",
    "skills.programming.title": "Programming",
    "skills.programming.desc":
      "Additional programming foundations for problem solving and systems.",
    "skills.tools.title": "Tools",
    "skills.tools.desc":
      "Version control, collaboration, deployment, and ongoing delivery.",
    "skills.stack": "TECHNOLOGY STACK",

    "projects.label": "SELECTED WORK",
    "projects.title1": "Projects that show",
    "projects.title2": "what I can build.",
    "projects.all": "All",
    "projects.fullstack": "Full-Stack",
    "projects.frontend": "Frontend",
    "projects.wordpress": "WordPress",

    "experience.label": "EXPERIENCE",
    "experience.ebdaa.company": "Ebdaa Media",
    "experience.erasmus.company":
      "Erasmus Department — Istanbul Aydın University",
    "experience.title1": "Where I've been",
    "experience.title2": "building.",
    "experience.ebdaa.type": "WEB DEVELOPMENT LEAD & FULL-STACK DEVELOPER",
    "experience.ebdaa.desc":
      "Lead the company's web development activities and oversee websites and web applications for clients.",
    "experience.erasmus.type": "WEB DEVELOPER",
    "experience.erasmus.desc":
      "Develop and maintain websites for the Erasmus Department while implementing new requirements and improving existing experiences.",
    "experience.date1": "2025 — PRESENT",
    "experience.date2": "2025 — 2026",

    "education.label": "EDUCATION",
    "education.university": "Istanbul Aydın University",
    "education.degree": "Bachelor's Degree in Computer Engineering",
    "training.label": "ADDITIONAL TRAINING",
    "training.1": "Full-Stack Web Development — Udemy",
    "training.2": "Data Structures & Algorithms — Udemy",
    "training.3": "Java Programming — Udemy",
    "training.4": "Python Programming — Udemy",

    "cta.label": "LET'S WORK TOGETHER",
    "cta.title1": "Have an idea?",
    "cta.title2": "Let's build it.",
    "cta.copy":
      "Whether you're looking for a full web application, a client website, or help turning a concept into a working product, let's talk.",
    "cta.getInTouch": "Get in touch",
    "contact.email": "EMAIL",
    "contact.phone": "PHONE",
    "contact.github": "GITHUB",
    "contact.instagram": "INSTAGRAM",
    "footer.role": "Full-Stack Web Developer · Web Development Lead",
    "footer.location": "Yemen · Türkiye",
  },

  ar: {
    "nav.about": "نبذة عني",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.experience": "الخبرة",
    "nav.talk": "لنتحدث",

    "hero.available": "متاح لمشاريع الويب",
    "hero.kicker": "مطور ويب متكامل",
    "hero.title1": "أبني الويب",
    "hero.title2": "من الفكرة إلى الواقع.",
    "hero.description":
      "أبني تطبيقات ويب متكاملة من الفكرة وحتى الإطلاق، من خلال الجمع بين الواجهات الأمامية والخلفية وقواعد البيانات وواجهات API والمصادقة وأنظمة الإدارة في منتجات عملية.",
    "hero.viewWork": "شاهد أعمالي",
    "hero.workTogether": "لنعمل معًا",
    "hero.downloadCV": "تحميل السيرة الذاتية",
    "hero.location": "إسطنبول، تركيا",
    "hero.educationMeta": "هندسة الحاسوب · 2023—2027",
    "hero.coreStack": "التقنيات الأساسية",
    "hero.scroll": "مرر لاستكشاف الموقع",
    "hero.laptopSub": "مطور ويب متكامل",

    "about.label": "نبذة عني",
    "about.title1": "أكثر من مجرد كود.",
    "about.title2": "أبني أنظمة متكاملة.",
    "about.largeCopy":
      "أنا <strong>إبراهيم الشبيبي</strong>، مطور ويب متكامل وقائد تطوير ويب، أركز على تحويل الأفكار إلى تطبيقات ويب موثوقة وعملية وسهلة الاستخدام.",
    "about.bodyCopy":
      "يشمل عملي المسار الكامل بدايةً من تصميم الواجهات ووظائف الواجهة الأمامية، وصولًا إلى خدمات الواجهة الخلفية وقواعد البيانات وواجهات API والمصادقة ولوحات الإدارة والنشر والصيانة.",
    "about.signature": "واجهة أمامية + خلفية + قاعدة بيانات",
    "about.stat1": "موقعًا لعملاء تم تسليمها",
    "about.stat2": "مشاريع جاهزة للعرض",
    "about.stat3": "عقلية تطوير متكاملة من الفكرة إلى الإطلاق",
    "about.tag1": "قائد تطوير ويب",
    "about.tag2": "تطوير Full-Stack",
    "about.tag3": "تطبيقات تعتمد على قواعد البيانات",
    "about.tag4": "واجهات REST API",
    "about.tag5": "المصادقة",
    "about.tag6": "أنظمة الإدارة",

    "skills.label": "المهارات / التقنيات",
    "skills.title1": "الأدوات التي تقف خلف",
    "skills.title2": "كل عمل.",
    "skills.intro":
      "مجموعة تقنيات عملية لبناء تطبيقات الويب الحديثة وربطها ونشرها وصيانتها.",
    "skills.frontend.title": "الواجهة الأمامية",
    "skills.frontend.desc":
      "واجهات متجاوبة وواضحة ومصممة للمستخدمين الحقيقيين.",
    "skills.backend.title": "الواجهة الخلفية",
    "skills.backend.desc":
      "منطق التطبيقات وواجهات API والمصادقة وعمليات CRUD وأنظمة الإدارة.",
    "skills.db.title": "قواعد البيانات",
    "skills.db.desc":
      "البيانات المنظمة والعلاقات والاستعلامات والمنتجات المعتمدة على قواعد البيانات.",
    "skills.cms.title": "CMS / الويب",
    "skills.cms.desc": "تخصيص وصيانة المواقع التي تعتمد على المحتوى.",
    "skills.programming.title": "البرمجة",
    "skills.programming.desc":
      "أساسيات برمجية إضافية لحل المشكلات وبناء الأنظمة.",
    "skills.tools.title": "الأدوات",
    "skills.tools.desc":
      "إدارة الإصدارات والتعاون والنشر والاستمرار في تطوير المشاريع.",
    "skills.stack": "التقنيات المستخدمة",

    "projects.label": "أبرز الأعمال",
    "projects.title1": "مشاريع تُظهر",
    "projects.title2": "ما أستطيع بناءه.",
    "projects.all": "الكل",
    "projects.fullstack": "Full-Stack",
    "projects.frontend": "Frontend",
    "projects.wordpress": "WordPress",

    "experience.ebdaa.company": "إبداع ميديا",
    "experience.erasmus.company": "قسم إيراسموس — جامعة إسطنبول أيدن",
    "experience.label": "الخبرة",
    "experience.title1": "أين كنت",
    "experience.title2": "أبني وأطور.",
    "experience.ebdaa.type": "قائد تطوير ويب ومطور Full-Stack",
    "experience.ebdaa.desc":
      "قيادة أنشطة تطوير الويب في الشركة والإشراف على المواقع وتطبيقات الويب الخاصة بالعملاء.",
    "experience.erasmus.type": "مطور ويب",
    "experience.erasmus.desc":
      "تطوير وصيانة مواقع قسم إيراسموس وتنفيذ المتطلبات الجديدة وتحسين التجارب الحالية.",
    "experience.date1": "2025 — حتى الآن",
    "experience.date2": "2025 — 2026",

    "education.label": "التعليم",
    "education.university": "جامعة إسطنبول أيدن",
    "education.degree": "بكالوريوس هندسة الحاسوب",
    "training.label": "دورات إضافية",
    "training.1": "تطوير الويب Full-Stack — Udemy",
    "training.2": "هياكل البيانات والخوارزميات — Udemy",
    "training.3": "برمجة Java — Udemy",
    "training.4": "برمجة Python — Udemy",

    "cta.label": "لنعمل معًا",
    "cta.title1": "لديك فكرة؟",
    "cta.title2": "لنبنها معًا.",
    "cta.copy":
      "سواء كنت تبحث عن تطبيق ويب متكامل أو موقع لعميل أو تحتاج إلى تحويل فكرة إلى منتج يعمل، لنتحدث.",
    "cta.getInTouch": "تواصل معي",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف",
    "contact.github": "جيت هب",
    "contact.instagram": "إنستغرام",
    "footer.role": "مطور ويب متكامل · قائد تطوير ويب",
    "footer.location": "اليمن · تركيا",
  },
};

const projectArabic = {
  Shamaa: {
    name: "شمعة",
    label: "Full-Stack",
    description:
      "منصة تجارة إلكترونية متكاملة لشمعاء، وهي علامة متخصصة في الشموع اليدوية. يمكن للعملاء تصفح المنتجات وإضافة العناصر إلى السلة وإتمام الطلب من خلال تجربة شراء متكاملة مدعومة بواجهة أمامية وخلفية مخصصة وقاعدة بيانات PostgreSQL.",
  },

  "Ebdaa Media": {
    name: "إبداع ميديا",
    label: "Full-Stack",
    description:
      "منصة إعلامية متكاملة مبنية باستخدام React وVite، وتتضمن لوحة تحكم مخصصة لإدارة قسم أعمال الشركة. يمكن للمسؤولين إضافة وإدارة الصور والفيديوهات التي تظهر في قسم أعمالنا، مع استخدام PostgreSQL لإدارة بيانات المشروع وواجهة أمامية مخصصة ومتجاوبة.",
  },

  "Turbo Travel": {
    name: "تربو ترافل",
    label: "Full-Stack",
    description:
      "منصة متكاملة لإدارة السفر مبنية باستخدام React، وتتضمن لوحة تحكم مخصصة لإدارة العملاء والتذاكر والوجهات وجميع تفاصيل الرحلات. كما يقوم النظام بأتمتة التواصل مع العملاء عبر إرسال تفاصيل الرحلة والحجز مباشرة من خلال WhatsApp.",
  },

  Muwahjeh: {
    name: "موجّه",
    label: "Full-Stack",
    description:
      "منصة للإرشاد الجامعي تساعد الطلاب على اكتشاف التخصصات الأكاديمية التي تتوافق مع اهتماماتهم. يمكن للطالب إجراء اختبار ميول مهني مبني على نموذج Holland والحصول على أفضل التخصصات المناسبة لنتيجته، ثم استكشاف الجامعات والكليات والبرامج الدراسية، مع نظام مصادقة كامل وقاعدة بيانات PostgreSQL لإدارة الحسابات وبيانات الاختبارات.",
  },

  Erasmus: {
    name: "إيراسموس",
    label: "WordPress",
    description:
      "موقع إيراسموس تم تطويره ضمن فريق لجامعة إسطنبول أيدن. بدأنا بتصميم وتطوير الموقع كاملًا من الصفر باستخدام HTML وCSS وJavaScript، ثم قمنا بتحويل المشروع إلى WordPress باستخدام قالب Blocksy مع الحفاظ على البنية والتصميم والوظائف الأساسية.",
  },

  Delightful: {
    name: "دِلايتفُل",
    label: "Frontend",
    description:
      "موقع تم تطويره ضمن فريق مشروع إيراسموس نفسه لبرنامج إيراسموس قصير المدى. تم تصميم وتطوير الموقع من الصفر بواجهة أمامية مخصصة تركز على تقديم البرنامج ومعلوماته وتجربة المشاركين بطريقة واضحة وجذابة.",
  },

  Annona: {
    name: "أنونا",
    label: "Full-Stack",
    description:
      "مشروع جامعي جماعي يهدف إلى جعل العمل ضمن الفرق أكثر وضوحًا وقابلية للقياس. تساعد Annona الفرق على تنظيم المهام من خلال لوحة Kanban وتتبع مساهمات الأعضاء وحساب درجات المشاركة بناءً على النشاط والعمل المنجز وعرض أداء الفريق من خلال التحليلات ولوحات المتصدرين وسجل النشاط.",
  },

  "Anisphone Rate Us": {
    name: " أنيس فون",
    label: "Frontend",
    description:
      "صفحة خفيفة لتقييم العملاء تم تطويرها لشركة Anisphone ومصممة للوصول السريع من خلال رموز QR. يمكن للعملاء مسح الرمز وفتح صفحة التقييم مباشرة وإرسال ملاحظاتهم من خلال واجهة بسيطة ومتوافقة مع الهواتف.",
  },

  Ghassan: {
    name: "غسان",
    label: "Frontend",
    description:
      "موقع معلوماتي حديث تم تطويره لشركة Ghassan Trading كواجهة أمامية خفيفة وقابلة للتوسع. يعرض المشروع الشركة وخدماتها من خلال واجهة نظيفة ومتجاوبة، مع توفير أساس يمكن تطويره وإضافة وظائف ومحتوى إليه مستقبلًا.",
  },
};

const experienceArabic = {
  ebdaaBullets: [
    "تطوير تطبيقات Full-Stack تشمل الواجهة الأمامية والخلفية وقواعد البيانات وواجهات API والمصادقة ولوحات الإدارة.",
    "تطوير وتسليم أكثر من 5 مواقع إلكترونية لعملاء الشركة.",
    "بناء نظام إدارة داخلي للمشاريع والمهام وسير العمل.",
    "إدارة النشر والصيانة والتطوير التقني المستمر.",
  ],
  erasmusBullets: [
    "تطوير والعمل على موقعي Erasmus وDelightful.",
    "بناء واجهات ويب متجاوبة وسهلة الاستخدام.",
    "تنفيذ وظائف الواجهة الأمامية باستخدام HTML وCSS وJavaScript.",
    "تخصيص وصيانة مواقع WordPress باستخدام Blocksy.",
    "الحفاظ على محتوى المواقع ووظائفها وتحديثها.",
  ],
};

function applyLanguage(language) {
  currentLanguage = language === "ar" ? "ar" : "en";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  document.body.classList.toggle("arabic", currentLanguage === "ar");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key] !== undefined) {
      element.innerHTML = translations[currentLanguage][key];
    }
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("portfolio-language", currentLanguage);

  restartHeroTypewriter();

  renderProjects(
    document.querySelector(".filter.active")?.dataset.filter || "all",
  );
  translateExperienceLists();
}

function translateExperienceLists() {
  const lists = document.querySelectorAll(".experience-card ul");
  if (lists.length < 2) return;

  const englishLists = [
    [
      "Develop full-stack applications across frontend, backend, databases, APIs, authentication, and admin panels.",
      "Developed and delivered 5+ websites for company clients.",
      "Built an internal management system for projects, tasks, and workflow.",
      "Handle deployment, maintenance, and ongoing technical development.",
    ],
    [
      "Developed and worked on the Erasmus and Delightful websites.",
      "Build responsive and user-friendly web interfaces.",
      "Implement frontend functionality using HTML, CSS, and JavaScript.",
      "Customize and maintain WordPress websites using Blocksy.",
      "Maintain and update website content and functionality.",
    ],
  ];

  const listsContent =
    currentLanguage === "ar"
      ? [experienceArabic.ebdaaBullets, experienceArabic.erasmusBullets]
      : englishLists;

  lists.forEach((list, listIndex) => {
    const items = listsContent[listIndex] || [];
    list.querySelectorAll("li").forEach((item, itemIndex) => {
      if (items[itemIndex]) item.textContent = items[itemIndex];
    });
  });
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

/* =========================================================
   HERO LAPTOP — TYPING TEXT
   ========================================================= */

let heroTypingTimer = null;

const heroTypingPhrases = {
  en: [
    "I BUILD FULL-STACK WEB APPS",
    "I BUILD E-COMMERCE PLATFORMS",
    "I BUILD ADMIN SYSTEMS",
    "I BUILD REAL PRODUCTS",
  ],
  ar: [
    "أبني تطبيقات ويب متكاملة",
    "أبني منصات تجارة إلكترونية",
    "أبني أنظمة إدارة",
    "أبني منتجات رقمية حقيقية",
  ],
};

function restartHeroTypewriter() {
  const element = document.getElementById("heroTypingText");
  if (!element) return;

  if (heroTypingTimer) {
    clearTimeout(heroTypingTimer);
  }

  const phrases = heroTypingPhrases[currentLanguage] || heroTypingPhrases.en;
  let phraseIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  element.textContent = "";

  function tick() {
    const phrase = phrases[phraseIndex];

    if (!deleting) {
      characterIndex++;
      element.textContent = phrase.slice(0, characterIndex);

      if (characterIndex >= phrase.length) {
        deleting = true;
        heroTypingTimer = setTimeout(tick, 1900);
        return;
      }

      heroTypingTimer = setTimeout(tick, 72);
      return;
    }

    characterIndex--;
    element.textContent = phrase.slice(0, characterIndex);

    if (characterIndex <= 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      heroTypingTimer = setTimeout(tick, 380);
      return;
    }

    heroTypingTimer = setTimeout(tick, 38);
  }

  tick();
}

/* =========================================================
   PROJECT BACKGROUND STYLES
   ========================================================= */

function previewStyle(index) {
  const variants = [
    "linear-gradient(135deg, #0b0b0d, #2c080e 45%, #0b0b0d)",
    "linear-gradient(135deg, #090a0b, #161616 50%, #390b12)",
    "linear-gradient(135deg, #16080b, #070708 52%, #201015)",
    "linear-gradient(135deg, #0b0b0c, #24080e 48%, #101011)",
    "linear-gradient(135deg, #060607, #310b12 55%, #0a0a0b)",
    "linear-gradient(135deg, #0c0c0d, #1b1b1c 52%, #380912)",
    "linear-gradient(135deg, #19070a, #080809 52%, #250a0f)",
    "linear-gradient(135deg, #080809, #22080d 50%, #0d0d0e)",
    "linear-gradient(135deg, #0d0d0e, #191012 50%, #3a0b13)",
  ];

  return variants[index % variants.length];
}

/* =========================================================
   RENDER PROJECTS
   ========================================================= */

function renderProjects(filter = "all") {
  projectsGrid.innerHTML = projects
    .map((project, index) => {
      const isVisible = filter === "all" || project.category === filter;

      const localized =
        currentLanguage === "ar" ? projectArabic[project.name] || {} : {};

      const projectName = localized.name || project.name;
      const projectLabel = localized.label || project.label;
      const projectDescription = localized.description || project.description;

      return `
        <article
          class="project-card ${isVisible ? "" : "hidden"}"
          data-category="${project.category}"
          style="--project-index:${index}"
        >

          <div
            class="project-preview"
            style="background:${previewStyle(index)}"
          >

            ${
              project.preview
                ? `
                  <div class="preview-ui">

                    <iframe
                      class="project-preview-frame"
                      src="${project.preview}"
                      title="${project.name} website preview"
                      loading="lazy"
                    ></iframe>

                  </div>
                `
                : `
                  <div class="preview-ui">
                    <div class="preview-accent"></div>
                  </div>
                `
            }

            <span class="project-number">
              ${String(index + 1).padStart(2, "0")}
            </span>

          </div>


          <div class="project-content">

            <div class="project-topline">

              <span class="project-category">
                ${projectLabel}
              </span>

              <a
                class="project-arrow"
                href="${project.url}"
                ${project.url !== "#" ? 'target="_blank" rel="noreferrer"' : ""}
                aria-label="Open ${project.name}"
              >
                ↗
              </a>

            </div>


            <h3>${projectName}</h3>


            <p>
              ${projectDescription}
            </p>


            <div class="project-tech">

              ${project.technologies
                .map((tech) => `<span>${tech}</span>`)
                .join("")}

            </div>


            <a
              class="project-link"
              href="${project.url}"
              ${project.url !== "#" ? 'target="_blank" rel="noreferrer"' : ""}
            >

            ${
              project.url === "#"
                ? currentLanguage === "ar"
                  ? "إضافة رابط الموقع"
                  : "Add live link"
                : currentLanguage === "ar"
                  ? "عرض الموقع"
                  : "View website"
            }

              <span>↗</span>

            </a>

          </div>

        </article>
      `;
    })
    .join("");

  /*
   * Wait until the browser has created the
   * new cards before calculating iframe sizes.
   */
  requestAnimationFrame(() => {
    scaleProjectPreviews();
  });
}

/* =========================================================
   PROJECT FILTERS
   ========================================================= */

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    renderProjects(button.dataset.filter);
  });
});

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */

let revealObserver;

function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("is-visible");
    });

    return;
  }

  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
    revealObserver.observe(el);
  });
}

/*
 * Render the projects once when the page loads.
 */
renderProjects();

/* =========================================================
   SCALE PROJECT WEBSITE PREVIEWS
   ========================================================= */

function scaleProjectPreviews() {
  document.querySelectorAll(".preview-ui").forEach((preview) => {
    const iframe = preview.querySelector(".project-preview-frame");

    if (!iframe) {
      return;
    }

    const previewWidth = preview.clientWidth;

    const previewHeight = preview.clientHeight;

    const desktopWidth = 1280;
    const desktopHeight = 800;

    const scaleX = previewWidth / desktopWidth;

    const scaleY = previewHeight / desktopHeight;

    /*
     * Keep the website in desktop proportions
     * and scale it down to fit the card.
     */
    const scale = Math.min(scaleX, scaleY);

    preview.style.setProperty("--preview-scale", scale);
  });
}

/* =========================================================
   PROJECT PREVIEW RESIZE
   ========================================================= */

window.addEventListener("resize", scaleProjectPreviews);

if ("ResizeObserver" in window) {
  const previewResizeObserver = new ResizeObserver(() => {
    scaleProjectPreviews();
  });

  document.querySelectorAll(".preview-ui").forEach((preview) => {
    previewResizeObserver.observe(preview);
  });
}

/* Apply saved language after the initial DOM/project render. */
applyLanguage(currentLanguage);

/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");

  menuToggle.classList.toggle("active", open);

  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* =========================================================
   SCROLL PROGRESS + BACK TO TOP
   ========================================================= */

const progress = document.querySelector(".scroll-progress span");

const backToTop = document.getElementById("backToTop");

function updateScrollUI() {
  const scrollTop = window.scrollY;

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  progress.style.width = `${
    maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0
  }%`;

  backToTop.classList.toggle("visible", scrollTop > 650);
}

window.addEventListener("scroll", updateScrollUI, {
  passive: true,
});

updateScrollUI();

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* =========================================================
   GENERAL PAGE REVEALS
   ========================================================= */

observeReveals();

/* =========================================================
   SUBTLE LIQUID-GLASS POINTER MOVEMENT
   ========================================================= */

const canHover = window.matchMedia(
  "(hover: hover) and (pointer: fine)",
).matches;

if (canHover) {
  document.querySelectorAll(".glass-panel, .project-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();

      const x = ((event.clientX - rect.left) / rect.width) * 100;

      const y = ((event.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--pointer-x", `${x}%`);

      card.style.setProperty("--pointer-y", `${y}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--pointer-x");

      card.style.removeProperty("--pointer-y");
    });
  });
}

/* =========================================================
   YEAR
   ========================================================= */

document.getElementById("year").textContent = new Date().getFullYear();

/* =========================================================
   PREVENT PLACEHOLDER PROJECT LINKS
   ========================================================= */

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href="#"]');

  if (link && !link.hasAttribute("data-placeholder-link")) {
    event.preventDefault();

    alert("Add the live project URL in script.js.");
  }
});

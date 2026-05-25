const body = document.body;
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("#nav-links");
const themeButton = document.querySelector("[data-theme-toggle]");
const languageButton = document.querySelector("[data-language-toggle]");
const languageLabel = document.querySelector("[data-language-label]");
const links = document.querySelectorAll(".nav-links a");

body.classList.add("has-js");

const translations = {
    en: {
        pageTitle: "Brian Ramirez | Workflow Automation Specialist",
        metaDescription: "Brian Ramirez, Workflow Automation Specialist building Python, Power Automate, Excel/VBA, and SQL Server systems that cut hours of manual work out of daily operations.",
        languageLabel: "EN",
        languageAria: "Cambiar idioma a Espanol",
        skipLink: "Skip to content",
        navAbout: "About",
        navProjects: "Projects",
        navSkills: "Skills",
        navExperience: "Experience",
        navCertifications: "Certifications",
        navFeedback: "Feedback",
        navContact: "Contact",
        heroTitle: "I'm <span>Brian Ramirez</span>",
        heroLede: "Workflow Automation Specialist helping retail, e-commerce, and financial teams cut hours of manual work out of daily operations.",
        viewProjects: "View Projects",
        downloadCv: "Download Resume",
        connectLinkedIn: "Connect on LinkedIn",
        githubRepo: "GitHub Repository",
        situationLabel: "Situation",
        situationText: "Teams lose hours to recurring exports, manual cleanup, scattered KPIs, and fragile spreadsheets.",
        taskLabel: "Task",
        taskText: "Create dependable reporting and automation workflows that operations teams can reuse with confidence.",
        actionLabel: "Action",
        actionText: "Build practical systems with Excel, VBA, Python, SQL, Power BI, Power Query, and automation logic.",
        resultLabel: "Result",
        resultText: "Cleaner reporting, fewer repetitive steps, and more time for decisions instead of spreadsheet repair.",
        dashboardLabel: "Operational automation",
        dashboardValue: "30+ shipped",
        credibilityOne: "Python · Power Automate · Excel/VBA",
        credibilityTwoTitle: "Open-source portfolio",
        credibilityTwo: "9 production projects on GitHub with READMEs and tests",
        credibilityThreeTitle: "Measurable impact",
        credibilityThree: "70%+ workload reduction across 5 years",
        credibilityFourTitle: "Sector experience",
        credibilityFour: "Built for ops teams in retail, e-commerce, and financial firms",
        mediaHi: "Hi there.",
        mediaIntro: "Allow me to introduce myself.",
        aboutEyebrow: "Professional Summary",
        aboutTitle: "Turning manual ops work into reliable, scalable systems.",
        aboutLead: "Over the last 5+ years I've shipped production automations across marketplace operations, KPI reporting, and ERP data flows.",
        aboutImpactHeading: "Recent impact",
        aboutImpact1: "Reduced manual data-pull time across Amazon Seller Central, eBay, and Walmart by 90%+ — Focus Camera (current role)",
        aboutImpact2: "Built KPI trackers and payroll automations that lifted CSAT 20% in 3 months for a 40-agent team — Advensus",
        aboutImpact3: "Migrated Excel/VBA + SAP data flows into self-maintaining templates used across stores nationwide — Avolta",
        aboutNextHeading: "What I'm building next",
        aboutNext: "AI-augmented automation in Python and JavaScript — integrating LLMs, MCP servers, and AI agents into custom workflows.",
        statsEyebrow: "The numbers matter",
        statsTitle: "Useful automation should show up in the workday.",
        statsText: "Not as decoration, but as fewer repetitive steps, clearer reporting, and more time for decisions.",
        statOne: "automations shipped",
        statTwo: "workload reduction",
        statThree: "years of experience",
        projectsEyebrow: "Featured Projects",
        projectsTitle: "Production systems built around real business problems.",
        projectsText: "Each project is a working repo on GitHub — open source where it can be, with READMEs, architecture diagrams, and (where applicable) tests + CI.",
        projectOneIndex: "Project 01",
        projectOneTitle: "Self-driving Job Search Automation",
        projectOneSummary: "End-to-end LLM-powered automation that runs 3× daily, searches multiple job markets, dedupes results, tailors per-role resumes, maintains an Excel tracker, and emails a polished HTML digest — all running locally on macOS.",
        projectOneProblem: "Job searching is a daily grind of redundant searches, manual filtering, and ad-hoc resume tailoring.",
        projectOneSolution: "LLM agent (Claude CLI + Indeed MCP) runs on launchd 3× daily, applies salary + recency filters, scores matches against the target stack, generates per-role DOCX resumes, updates a 29-column Excel tracker, and emails a matplotlib-rendered HTML digest.",
        projectOneImpact: "Replaced ~2 hours/day of manual job-search work with a self-running daily digest; only surfaces matches worth applying to.",
        projectTwoIndex: "Project 02",
        projectTwoTitle: "eBay Best Offers Decision Engine",
        projectTwoSummary: "Daily automation that closes pending Best Offers across multiple eBay seller accounts using a configurable profit-margin decision rule.",
        projectTwoProblem: "Manually reviewing and responding to every pending Best Offer across multiple seller accounts is slow and inconsistent.",
        projectTwoSolution: "Scrapes the pending-offers grid, syncs to SQL Server, decides Accept/Counter/Remove per offer against a profit-margin rule (with branch-coverage pytest), drives the browser to act on the decision, emails an end-of-day summary.",
        projectTwoImpact: "Replaced manual per-offer judgement with a deterministic decision rule applied consistently across the seller fleet.",
        projectThreeIndex: "Project 03",
        projectThreeTitle: "Amazon Account Health Monitor",
        projectThreeSummary: "Weekday automation that scrapes Amazon Seller Central health metrics (Late Shipment Rate, Prime Performance, SFP), pixel-crops speed-distribution chart screenshots, pastes them into a macro-enabled workbook, and emails the workbook.",
        projectThreeProblem: "Tracking account health across multiple Amazon seller storefronts required logging into each, manually copying metrics, screenshotting charts, and pasting into a tracker workbook.",
        projectThreeSolution: "SeleniumBase scrapes each storefront, Pillow + Windows clipboard handle chart screenshot + paste, xlwings drives the macro-enabled workbook, APScheduler runs the whole pipeline Mon–Fri 11:00.",
        projectThreeImpact: "Reliable daily snapshot of account health across all storefronts with zero manual touch.",
        projectFourIndex: "Project 04",
        projectFourTitle: "Seller Automation Toolkit (Python library)",
        projectFourSummary: "Pip-installable Python library wrapping Selenium browser bootstrap, Outlook COM, xlwings Excel automation, SQL Server inserts, scheduling, and structured logging — used by 6 production automations.",
        projectFourProblem: "Six separate marketplace automations were duplicating login flows, scheduler boilerplate, OTP polling, and SQL inserts.",
        projectFourSolution: "Extracted the shared substrate into a versioned library (semver, CHANGELOG, pytest, GitHub Actions CI) that the seller-automation suite consumes via pip + git URL.",
        projectFourImpact: "Single source of truth for browser bootstrap, login flows, OTP polling, scheduled execution, and SQL-Server bulk inserts across the marketplace stack.",
        projectFiveIndex: "Project 05",
        projectFiveTitle: "SellerCloud Daily Catalog ETL",
        projectFiveSummary: "Daily ETL that loads the SellerCloud catalog export into SQL Server with idempotency guards, feeding downstream reports across the entire seller-automation suite.",
        projectFiveProblem: "Multiple downstream reports were tightly coupled to a long-running nightly catalog scrape that occasionally failed early.",
        projectFiveSolution: "Extracted catalog refresh into its own decoupled job: reads the daily SellerCloud Excel export, normalizes column dtypes, bulk-inserts into SQL Server via parameterized writes, with same-day-mtime guard against accidental re-runs.",
        projectFiveImpact: "Removed a hidden dependency on a fragile job; downstream reports now have reliable catalog data by 05:30 every day.",
        viewOnGithub: "View on GitHub →",
        detailProblem: "Problem",
        detailSolution: "Solution",
        detailImpact: "Impact",
        skillsEyebrow: "Technical Stack",
        skillsTitle: "Tools grouped by the work they support.",
        skillAutomation: "Workflow Automation",
        skillData: "Data & Integration",
        skillOps: "AI-Augmented Stack",
        experienceEyebrow: "Experience Snapshot",
        experienceTitle: "The professional path behind the systems.",
        experienceText: "Five years, three roles, one throughline: turning manual ops into systems that scale.",
        experienceDisclaimer: "The resume carries the full detail.",
        exp1Role: "Automation & Workflow Specialist",
        exp1Company: "Focus Camera",
        exp1Dates: "Jan 2024 – Present",
        exp1Bullet1: "Designed and maintained Python, Power Automate, and Excel/VBA automation workflows.",
        exp1Bullet2: "Reduced manual operational workload by 70%+ through process automation.",
        exp1Bullet3: "Integrated and validated data from Amazon, eBay, Walmart, and BestBuy into SQL Server reporting.",
        exp2Role: "Master Data Analyst",
        exp2Company: "Avolta",
        exp2Dates: "Aug 2023 – Dec 2023",
        exp2Bullet1: "Built advanced Excel-based solutions to extract and analyze SAP data.",
        exp2Bullet2: "Improved stock visibility across multiple locations.",
        exp2Bullet3: "Developed dashboards using DAX to support business decisions.",
        exp3Role: "Operations Supervisor",
        exp3Company: "Advensus",
        exp3Dates: "Nov 2021 – Aug 2023",
        exp3Bullet1: "Led a team of 40 agents, improving performance and efficiency.",
        exp3Bullet2: "Developed KPI tracking tools in Excel (AHT, CSAT, QA, attendance).",
        exp3Bullet3: "Increased customer satisfaction (CSAT) by 20% through data-driven coaching.",
        exp3Bullet4: "Automated payroll tracking, improving accuracy and efficiency.",
        feedbackEyebrow: "Client Feedback",
        feedbackTitle: "Some love from people I have helped.",
        feedbackIntro: "Selected reviews from Upwork projects.",
        upworkBadge: "★★★★★ on Upwork",
        certEyebrow: "Certifications",
        certTitle: "Continuous learning with practical application.",
        certDepthLine: "Plus 60+ additional courses across SQL, Python, Power BI, Excel, AI, and Data Visualization.",
        certViewAll: "View all on LinkedIn →",
        contactEyebrow: "Contact",
        contactTitle: "Have a workflow problem? Let's talk.",
        emailMe: "Email Me",
        footerText: "Workflow Automation Specialist focused on practical systems, clean reporting, and measurable business impact."
    },
    es: {
        pageTitle: "Brian Ramirez | Especialista en Automatización de Procesos",
        metaDescription: "Brian Ramirez, Especialista en Automatización de Procesos que construye sistemas con Python, Power Automate, Excel/VBA y SQL Server para eliminar horas de trabajo manual de las operaciones diarias.",
        languageLabel: "ES",
        languageAria: "Switch language to English",
        skipLink: "Saltar al contenido",
        navAbout: "Sobre mí",
        navProjects: "Proyectos",
        navSkills: "Stack",
        navExperience: "Experiencia",
        navCertifications: "Certificaciones",
        navFeedback: "Feedback",
        navContact: "Contacto",
        heroTitle: "Soy <span>Brian Ramirez</span>",
        heroLede: "Especialista en Automatización de Procesos ayudando a equipos de retail, e-commerce y finanzas a eliminar horas de trabajo manual de sus operaciones diarias.",
        viewProjects: "Ver proyectos",
        downloadCv: "Descargar CV",
        connectLinkedIn: "Conectar en LinkedIn",
        githubRepo: "Repositorio GitHub",
        situationLabel: "Situación",
        situationText: "Los equipos pierden horas en exportaciones recurrentes, limpieza manual, KPIs dispersos y hojas de cálculo frágiles.",
        taskLabel: "Tarea",
        taskText: "Crear flujos confiables de reporting y automatización que los equipos operativos puedan reutilizar con seguridad.",
        actionLabel: "Acción",
        actionText: "Construir sistemas prácticos con Excel, VBA, Python, SQL, Power BI, Power Query y lógica de automatización.",
        resultLabel: "Resultado",
        resultText: "Reporting más limpio, menos pasos repetitivos y más tiempo para decidir en lugar de reparar hojas de cálculo.",
        dashboardLabel: "Automatización operativa",
        dashboardValue: "30+ implementadas",
        credibilityOne: "Python · Power Automate · Excel/VBA",
        credibilityTwoTitle: "Portafolio open-source",
        credibilityTwo: "9 proyectos en producción en GitHub con READMEs y tests",
        credibilityThreeTitle: "Impacto medible",
        credibilityThree: "70%+ reducción de carga en 5 años",
        credibilityFourTitle: "Experiencia sectorial",
        credibilityFour: "Para equipos de operaciones en retail, e-commerce y finanzas",
        mediaHi: "Hola.",
        mediaIntro: "Permíteme presentarme.",
        aboutEyebrow: "Perfil Profesional",
        aboutTitle: "Convirtiendo el trabajo manual en sistemas fiables y escalables.",
        aboutLead: "A lo largo de los últimos 5 años he implementado automatizaciones de producción en operaciones de marketplace, reporting de KPIs y flujos de datos ERP.",
        aboutImpactHeading: "Impacto reciente",
        aboutImpact1: "Reducción del 90%+ en tiempo de extracción manual de datos en Amazon Seller Central, eBay y Walmart — Focus Camera (rol actual)",
        aboutImpact2: "Construcción de trackers de KPI y automatizaciones de nómina que elevaron el CSAT 20% en 3 meses para un equipo de 40 agentes — Advensus",
        aboutImpact3: "Migración de flujos de datos Excel/VBA + SAP a plantillas auto-mantenidas usadas en tiendas a nivel nacional — Avolta",
        aboutNextHeading: "Lo que estoy construyendo",
        aboutNext: "Automatización aumentada con IA en Python y JavaScript — integrando LLMs, servidores MCP y agentes de IA en flujos personalizados.",
        statsEyebrow: "Los números importan",
        statsTitle: "La automatización útil se nota en el día a día.",
        statsText: "No como decoración, sino como menos pasos repetitivos, reporting más claro y más tiempo para decidir.",
        statOne: "automatizaciones implementadas",
        statTwo: "reducción de carga operativa",
        statThree: "años de experiencia",
        projectsEyebrow: "Proyectos Destacados",
        projectsTitle: "Sistemas en producción construidos sobre problemas de negocio reales.",
        projectsText: "Cada proyecto es un repo funcional en GitHub — open source donde es posible, con READMEs, diagramas de arquitectura y (cuando aplica) tests + CI.",
        projectOneIndex: "Proyecto 01",
        projectOneTitle: "Automatización autónoma de búsqueda de empleo",
        projectOneSummary: "Automatización end-to-end basada en LLM que se ejecuta 3 veces al día, busca en múltiples mercados de empleo, deduplica resultados, adapta CVs por rol, mantiene un tracker en Excel y envía un digest HTML pulido — todo en local en macOS.",
        projectOneProblem: "Buscar empleo es una rutina diaria de búsquedas redundantes, filtrado manual y adaptación de CV improvisada.",
        projectOneSolution: "Un agente LLM (Claude CLI + Indeed MCP) corre 3 veces al día mediante launchd, aplica filtros de salario y recencia, puntúa cada match contra el stack objetivo, genera CVs DOCX por rol, actualiza un tracker Excel de 29 columnas y envía un digest HTML con masthead renderizado en matplotlib.",
        projectOneImpact: "Reemplazó unas 2 horas diarias de trabajo manual de búsqueda con un digest diario autónomo; sólo expone matches que merece la pena aplicar.",
        projectTwoIndex: "Proyecto 02",
        projectTwoTitle: "Motor de decisión para Best Offers en eBay",
        projectTwoSummary: "Automatización diaria que resuelve Best Offers pendientes en múltiples cuentas de vendedor de eBay aplicando una regla configurable de margen de beneficio.",
        projectTwoProblem: "Revisar y responder manualmente cada Best Offer pendiente en múltiples cuentas de vendedor es lento e inconsistente.",
        projectTwoSolution: "Hace scrape de la grid de ofertas pendientes, sincroniza a SQL Server, decide Aceptar/Contraoferta/Eliminar por oferta contra una regla de margen (con tests de cobertura de ramas), maneja el navegador para ejecutar la decisión y envía un resumen al final del día.",
        projectTwoImpact: "Reemplazó el juicio manual por oferta con una regla determinista aplicada de forma consistente en toda la flota de cuentas.",
        projectThreeIndex: "Proyecto 03",
        projectThreeTitle: "Monitor de salud de cuenta de Amazon",
        projectThreeSummary: "Automatización entre semana que extrae métricas de salud de Amazon Seller Central (Late Shipment Rate, Prime Performance, SFP), recorta capturas de gráficos de distribución de velocidad, las pega en un libro macro-enabled y envía el libro por email.",
        projectThreeProblem: "Trackear la salud de cuenta en múltiples tiendas de Amazon implicaba loguearse en cada una, copiar métricas a mano, capturar gráficos y pegarlos en un libro de tracking.",
        projectThreeSolution: "SeleniumBase extrae cada tienda, Pillow + portapapeles de Windows gestionan captura + pegado de gráficos, xlwings maneja el libro macro-enabled y APScheduler ejecuta el pipeline completo de Lun a Vie a las 11:00.",
        projectThreeImpact: "Snapshot diario fiable de la salud de cuenta de todas las tiendas sin intervención manual.",
        projectFourIndex: "Proyecto 04",
        projectFourTitle: "Toolkit de automatización para vendedores (librería Python)",
        projectFourSummary: "Librería Python instalable vía pip que envuelve bootstrap de Selenium, Outlook COM, automatización de Excel con xlwings, inserts a SQL Server, scheduling y logging estructurado — usada por 6 automatizaciones en producción.",
        projectFourProblem: "Seis automatizaciones de marketplace independientes duplicaban flujos de login, boilerplate de scheduling, polling de OTPs e inserts SQL.",
        projectFourSolution: "Se extrajo la base compartida a una librería versionada (semver, CHANGELOG, pytest, CI en GitHub Actions) que el resto del suite consume vía pip + URL de git.",
        projectFourImpact: "Una única fuente de verdad para bootstrap de navegador, flujos de login, polling de OTP, ejecución programada e inserts masivos a SQL Server en todo el stack de marketplace.",
        projectFiveIndex: "Proyecto 05",
        projectFiveTitle: "ETL diario de catálogo SellerCloud",
        projectFiveSummary: "ETL diario que carga la exportación del catálogo de SellerCloud en SQL Server con guards de idempotencia, alimentando reports downstream en todo el suite de automatización.",
        projectFiveProblem: "Múltiples reports downstream estaban acoplados a un scrape de catálogo nocturno largo que ocasionalmente fallaba pronto.",
        projectFiveSolution: "Se extrajo el refresco del catálogo a su propio job desacoplado: lee la exportación Excel diaria, normaliza dtypes de columnas, hace bulk-insert a SQL Server con escrituras parametrizadas y un guard de mtime contra re-ejecuciones accidentales.",
        projectFiveImpact: "Eliminó una dependencia oculta de un job frágil; los reports downstream ahora tienen datos de catálogo fiables a las 05:30 cada día.",
        viewOnGithub: "Ver en GitHub →",
        detailProblem: "Problema",
        detailSolution: "Solución",
        detailImpact: "Impacto",
        skillsEyebrow: "Stack técnico",
        skillsTitle: "Herramientas agrupadas por el trabajo que apoyan.",
        skillAutomation: "Automatización",
        skillData: "Datos e Integración",
        skillOps: "Stack de IA",
        experienceEyebrow: "Resumen de experiencia",
        experienceTitle: "La trayectoria profesional detrás de los sistemas.",
        experienceText: "Cinco años, tres roles, un mismo hilo conductor: convertir el trabajo manual en sistemas que escalan.",
        experienceDisclaimer: "El CV contiene el detalle completo.",
        exp1Role: "Automation & Workflow Specialist",
        exp1Company: "Focus Camera",
        exp1Dates: "Ene 2024 – Actualidad",
        exp1Bullet1: "Diseño y mantenimiento de flujos de automatización en Python, Power Automate y Excel/VBA.",
        exp1Bullet2: "Reducción de la carga operativa manual en más del 70% mediante automatización de procesos.",
        exp1Bullet3: "Integración y validación de datos desde Amazon, eBay, Walmart y BestBuy hacia reporting en SQL Server.",
        exp2Role: "Master Data Analyst",
        exp2Company: "Avolta",
        exp2Dates: "Ago 2023 – Dic 2023",
        exp2Bullet1: "Desarrollo de soluciones avanzadas en Excel para extracción y análisis de datos desde SAP.",
        exp2Bullet2: "Mejora de la visibilidad de inventario en múltiples ubicaciones.",
        exp2Bullet3: "Desarrollo de dashboards utilizando DAX para apoyar la toma de decisiones.",
        exp3Role: "Supervisor de Operaciones",
        exp3Company: "Advensus",
        exp3Dates: "Nov 2021 – Ago 2023",
        exp3Bullet1: "Gestión de un equipo de 40 agentes, optimizando desempeño y eficiencia.",
        exp3Bullet2: "Desarrollo de herramientas de seguimiento de KPIs en Excel (AHT, CSAT, QA, asistencia).",
        exp3Bullet3: "Incremento del 20% en satisfacción del cliente (CSAT) mediante coaching basado en datos.",
        exp3Bullet4: "Automatización de procesos de nómina, mejorando precisión y eficiencia.",
        feedbackEyebrow: "Opiniones de Clientes",
        feedbackTitle: "Reseñas de personas a las que he ayudado.",
        feedbackIntro: "Reseñas seleccionadas de proyectos en Upwork.",
        upworkBadge: "★★★★★ en Upwork",
        certEyebrow: "Certificaciones",
        certTitle: "Aprendizaje continuo con aplicación práctica.",
        certDepthLine: "Y más de 60 cursos adicionales en SQL, Python, Power BI, Excel, IA y Data Visualization.",
        certViewAll: "Ver todas en LinkedIn →",
        contactEyebrow: "Contacto",
        contactTitle: "¿Tienes un problema de flujo de trabajo? Hablemos.",
        emailMe: "Escríbeme",
        footerText: "Especialista en Automatización de Procesos enfocado en sistemas prácticos, reporting limpio e impacto medible de negocio."
    }
};

const resumeFiles = {
    en: "../public/Resume - Brian Ramirez.pdf",
    es: "../public/CV - Brian Ramirez.pdf"
};

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedLanguage = localStorage.getItem("portfolio-language") || "en";

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    body.classList.add("dark");
    themeButton.setAttribute("aria-label", "Toggle light mode");
}

const applyLanguage = (language) => {
    const dictionary = translations[language] || translations.en;
    const metaDescription = document.querySelector('meta[name="description"]');

    document.documentElement.lang = language;
    document.title = dictionary.pageTitle;

    if (metaDescription) {
        metaDescription.setAttribute("content", dictionary.metaDescription);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.dataset.i18nHtml;

        if (dictionary[key]) {
            element.innerHTML = dictionary[key];
        }
    });

    document.querySelectorAll("[data-resume-link]").forEach((link) => {
        link.setAttribute("href", resumeFiles[language] || resumeFiles.en);
    });

    if (languageLabel) {
        languageLabel.textContent = dictionary.languageLabel;
    }

    if (languageButton) {
        languageButton.setAttribute("aria-label", dictionary.languageAria);
    }
};

const changeLanguage = (language, animate = true) => {
    const nextLanguage = translations[language] ? language : "en";

    localStorage.setItem("portfolio-language", nextLanguage);

    if (!animate) {
        applyLanguage(nextLanguage);
        return;
    }

    body.classList.add("is-translating");

    window.setTimeout(() => {
        applyLanguage(nextLanguage);
        body.classList.remove("is-translating");
    }, 170);
};

changeLanguage(savedLanguage, false);

const closeMenu = () => {
    body.classList.remove("nav-open");
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
};

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    body.classList.toggle("nav-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

links.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

themeButton.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    themeButton.setAttribute("aria-label", isDark ? "Toggle light mode" : "Toggle dark mode");
});

languageButton?.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang === "es" ? "es" : "en";
    changeLanguage(currentLanguage === "es" ? "en" : "es");
});

const setHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
}, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});

const counterFrames = new WeakMap();

const setCounterValue = (counter, value) => {
    const suffix = counter.dataset.countSuffix || "";
    counter.textContent = `${value}${suffix}`;
};

const resetCounter = (counter) => {
    const frame = counterFrames.get(counter);

    if (frame) {
        cancelAnimationFrame(frame);
    }

    counterFrames.delete(counter);
    setCounterValue(counter, 0);
};

const animateCounter = (counter) => {
    resetCounter(counter);

    const end = Number(counter.dataset.countTo || 0);
    const duration = 1050;
    const startTime = performance.now();

    const tick = (now) => {
        const elapsed = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - elapsed, 3);
        const value = Math.round(end * eased);

        setCounterValue(counter, value);

        if (elapsed < 1) {
            counterFrames.set(counter, requestAnimationFrame(tick));
        } else {
            counterFrames.delete(counter);
        }
    };

    counterFrames.set(counter, requestAnimationFrame(tick));
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const counters = entry.target.querySelectorAll("[data-count-to]");

        if (entry.isIntersecting) {
            counters.forEach(animateCounter);
            return;
        }

        counters.forEach(resetCounter);
    });
}, { threshold: 0.42 });

document.querySelectorAll("[data-counter-section]").forEach((section) => {
    counterObserver.observe(section);
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");

        links.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
        });
    });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 });

document.querySelectorAll("main section[id]").forEach((section) => {
    sectionObserver.observe(section);
});

document.querySelectorAll('a[href="#"]').forEach((placeholder) => {
    placeholder.addEventListener("click", (event) => {
        event.preventDefault();
    });
});

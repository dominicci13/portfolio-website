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
        pageTitle: "Brian Ramirez | Business Analyst & Automation Specialist",
        metaDescription: "Brian Ramirez, Business Analyst and Automation Specialist building Excel, VBA, Python, SQL, Power BI, and workflow automation systems.",
        languageLabel: "EN",
        languageAria: "Cambiar idioma a Espanol",
        skipLink: "Skip to content",
        navAbout: "About",
        navProjects: "Projects",
        navSkills: "Skills",
        navExperience: "Experience",
        navFeedback: "Feedback",
        navContact: "Contact",
        heroTitle: "I'm <span>Brian Ramirez</span>",
        heroLede: "I build automation systems, reporting workflows, and data solutions that help teams save time, reduce manual work, and make better decisions.",
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
        dashboardValue: "12 active workflows",
        credibilityOne: "Recurring operational workflows",
        credibilityTwo: "Practical tools for daily work",
        credibilityThreeTitle: "BI and reporting workflows",
        credibilityThree: "Clean, decision-ready outputs",
        credibilityFourTitle: "Marketplace operations",
        mediaHi: "Hi there.",
        mediaIntro: "Allow me to introduce myself.",
        aboutEyebrow: "Professional Summary",
        aboutTitle: "Turning repetitive workflows into reliable systems.",
        aboutP1: "Brian is a Business Analyst and Automation Specialist with a strong background in Excel/VBA, Python automation, SQL, Power BI, and operational reporting.",
        aboutP2: "He builds tools that improve team productivity, reduce repetitive work, and make business processes easier to manage. His background spans marketplace and e-commerce operations, data analysis, process improvement, KPI reporting, and workflow automation.",
        aboutP3: "What makes his work valuable is the combination of technical execution and business understanding: he can translate messy daily operations into cleaner processes, reusable templates, and reporting systems that teams can trust.",
        statsEyebrow: "The numbers matter",
        statsTitle: "Useful automation should show up in the workday.",
        statsText: "Not as decoration, but as fewer repetitive steps, clearer reporting, and more time for decisions.",
        statOne: "active automations managed",
        statTwo: "years across data, operations, and reporting",
        statThree: "team members supported through KPI visibility",
        projectsEyebrow: "Selected Projects",
        projectsTitle: "Systems built around real business problems.",
        projectsText: "These are framed as business case studies, not freelance service packages. The focus is on what changed for the team.",
        projectOneIndex: "Project 01",
        projectOneTitle: "Workflow Automation System for Marketplace Operations",
        projectOneSummary: "Built and maintained automation workflows that support daily operational tasks across marketplace platforms.",
        projectOneProblem: "Manual processes were consuming time, creating repetitive work, and increasing the risk of human error.",
        projectOneSolution: "Developed automation scripts and Excel-based tools to streamline recurring workflows, clean data, and generate outputs.",
        projectOneImpact: "Improved operational efficiency, reduced manual work, and created more reliable recurring processes.",
        projectTwoIndex: "Project 02",
        projectTwoTitle: "Excel/VBA Data Import & Cleaning Template",
        projectTwoSummary: "Created dynamic Excel/VBA templates that import, clean, match, and transform data from multiple external files.",
        projectTwoProblem: "Teams needed to combine data from different files with inconsistent structures and repeated manual cleanup.",
        projectTwoSolution: "Built header-driven VBA automation to import data, match SKUs/products, populate templates, and apply business rules dynamically.",
        projectTwoImpact: "Reduced repetitive data preparation work and improved consistency across reporting files.",
        projectThreeIndex: "Project 03",
        projectThreeTitle: "Amazon Seller Profit & Performance Dashboard",
        projectThreeSummary: "Designed the foundation for an Amazon seller analytics dashboard combining business reports, payment data, ads data, and product-level metrics.",
        projectThreeProblem: "Profitability and performance data was spread across multiple exports, making true product performance difficult to understand.",
        projectThreeSolution: "Structured sources, cleaned queries, connected key fields such as SKU and ASIN, and planned dashboard-ready tables.",
        projectThreeImpact: "Created a clearer path to product-level sales, cost, advertising, and profitability insights.",
        projectFourIndex: "Project 04",
        projectFourTitle: "Business KPI Reporting Template",
        projectFourSummary: "Built KPI tracking templates for operational performance, including AHT, CSAT, QA, attendance, attrition, and adherence.",
        projectFourProblem: "Performance tracking needed to be centralized, clearer, and easier to review over time.",
        projectFourSolution: "Created structured Excel reporting templates with formulas, dashboards, and recurring performance views.",
        projectFourImpact: "Improved visibility into team performance and supported better coaching and decision-making.",
        projectFiveIndex: "Project 05",
        projectFiveTitle: "Outlook & Email Workflow Automation",
        projectFiveSummary: "Built Outlook VBA workflows to process incoming emails, save attachments, trigger actions, and send recurring reports.",
        projectFiveProblem: "Email-based workflows required repetitive manual handling.",
        projectFiveSolution: "Developed VBA logic to monitor inboxes, identify relevant messages, process attachments, and automate follow-up actions.",
        projectFiveImpact: "Reduced manual email handling and made recurring reporting workflows more reliable.",
        detailProblem: "Problem",
        detailSolution: "Solution",
        detailImpact: "Impact",
        skillsEyebrow: "Technical Stack",
        skillsTitle: "Tools grouped by the work they support.",
        skillAutomation: "Automation",
        skillData: "Data & BI",
        skillOps: "Business / Operations",
        experienceEyebrow: "Experience Snapshot",
        experienceTitle: "The professional path behind the systems.",
        experienceText: "The CV carries the full detail. This section gives recruiters a fast view of the roles most relevant to data, automation, operations, and reporting impact.",
        roleOneTitle: "Automation / Data role",
        roleOneText: "Built and maintained automation workflows for marketplace operations and recurring reporting tasks using Python, Excel, VBA, Selenium, and Power Query.",
        roleTwoText: "Created tailored Excel templates with VBA, macros, advanced formulas, and reusable reporting logic for data quality and operational reporting.",
        roleThreeText: "Led KPI visibility across AHT, CSAT, QA, attendance, attrition, and adherence, supporting better coaching and decision-making.",
        roleFourText: "Built technical foundations in systems, troubleshooting, structured support, and operational reliability.",
        feedbackEyebrow: "Feedback",
        feedbackTitle: "Some love from people I have helped.",
        feedbackText: "Independent project feedback is included as proof of execution, while the site remains focused on employer value and business impact.",
        testimonialOne: "\"Clear communication, fast delivery, and a practical solution that was easy to use in the real workflow.\"",
        testimonialOneMeta: "Client A. - Independent project feedback",
        testimonialTwo: "\"He understood the business problem quickly and turned a repetitive Excel process into something much more reliable.\"",
        testimonialThree: "\"Strong automation work, thoughtful questions, and a clean final result that reduced manual effort.\"",
        feedbackNote: "Additional client feedback available on request.",
        certEyebrow: "Certifications / Learning",
        certTitle: "Continuous learning with practical application.",
        certOneText: "Data analysis foundations, analytical thinking, and applied reporting workflows.",
        certTwoText: "Advanced spreadsheet modeling, business analysis, formulas, and Excel-based decision support.",
        contactEyebrow: "Contact",
        contactTitle: "Interested in working together?",
        contactText: "I am open to data, automation, business intelligence, and process improvement opportunities, especially roles where I can help teams work faster and smarter.",
        emailMe: "Email Me",
        footerText: "Business Analyst & Automation Specialist focused on practical systems, clean reporting, and measurable business impact."
    },
    es: {
        pageTitle: "Brian Ramirez | Analista de Negocios y Especialista en Automatizacion",
        metaDescription: "Brian Ramirez, Analista de Negocios y Especialista en Automatizacion que crea sistemas con Excel, VBA, Python, SQL, Power BI y automatizacion de flujos de trabajo.",
        languageLabel: "ES",
        languageAria: "Switch language to English",
        skipLink: "Saltar al contenido",
        navAbout: "Sobre mi",
        navProjects: "Proyectos",
        navSkills: "Stack",
        navExperience: "Experiencia",
        navFeedback: "Feedback",
        navContact: "Contacto",
        heroTitle: "Soy <span>Brian Ramirez</span>",
        heroLede: "Construyo sistemas de automatizacion, flujos de reporting y soluciones de datos que ayudan a los equipos a ahorrar tiempo, reducir trabajo manual y tomar mejores decisiones.",
        viewProjects: "Ver proyectos",
        downloadCv: "Descargar CV",
        connectLinkedIn: "Conectar en LinkedIn",
        githubRepo: "Repositorio GitHub",
        situationLabel: "Situacion",
        situationText: "Los equipos pierden horas en exportaciones recurrentes, limpieza manual, KPIs dispersos y hojas de calculo fragiles.",
        taskLabel: "Tarea",
        taskText: "Crear flujos confiables de reporting y automatizacion que los equipos operativos puedan reutilizar con seguridad.",
        actionLabel: "Accion",
        actionText: "Construir sistemas practicos con Excel, VBA, Python, SQL, Power BI, Power Query y logica de automatizacion.",
        resultLabel: "Resultado",
        resultText: "Reporting mas limpio, menos pasos repetitivos y mas tiempo para decidir en lugar de reparar hojas de calculo.",
        dashboardLabel: "Automatizacion operativa",
        dashboardValue: "12 flujos activos",
        credibilityOne: "Flujos operativos recurrentes",
        credibilityTwo: "Herramientas practicas para el trabajo diario",
        credibilityThreeTitle: "BI y flujos de reporting",
        credibilityThree: "Salidas limpias y listas para decidir",
        credibilityFourTitle: "Operaciones marketplace",
        mediaHi: "Hola.",
        mediaIntro: "Permiteme presentarme.",
        aboutEyebrow: "Resumen profesional",
        aboutTitle: "Convirtiendo flujos repetitivos en sistemas confiables.",
        aboutP1: "Brian es Analista de Negocios y Especialista en Automatizacion, con una base solida en Excel/VBA, automatizacion con Python, SQL, Power BI y reporting operativo.",
        aboutP2: "Construye herramientas que mejoran la productividad del equipo, reducen tareas repetitivas y hacen que los procesos de negocio sean mas faciles de gestionar. Su experiencia incluye operaciones de marketplace y e-commerce, analisis de datos, mejora de procesos, reporting de KPIs y automatizacion de flujos de trabajo.",
        aboutP3: "Su valor esta en combinar ejecucion tecnica con entendimiento del negocio: puede convertir operaciones diarias desordenadas en procesos mas limpios, plantillas reutilizables y sistemas de reporting en los que los equipos pueden confiar.",
        statsEyebrow: "Los numeros importan",
        statsTitle: "La automatizacion util se nota en el dia a dia.",
        statsText: "No como decoracion, sino como menos pasos repetitivos, reporting mas claro y mas tiempo para decidir.",
        statOne: "automatizaciones activas gestionadas",
        statTwo: "anos entre datos, operaciones y reporting",
        statThree: "personas apoyadas con visibilidad de KPIs",
        projectsEyebrow: "Proyectos seleccionados",
        projectsTitle: "Sistemas creados alrededor de problemas reales de negocio.",
        projectsText: "Estos proyectos se presentan como casos de negocio, no como paquetes freelance. El foco esta en lo que cambio para el equipo.",
        projectOneIndex: "Proyecto 01",
        projectOneTitle: "Sistema de automatizacion para operaciones marketplace",
        projectOneSummary: "Construccion y mantenimiento de flujos de automatizacion que apoyan tareas operativas diarias en plataformas marketplace.",
        projectOneProblem: "Los procesos manuales consumian tiempo, generaban trabajo repetitivo y aumentaban el riesgo de error humano.",
        projectOneSolution: "Desarrollo de scripts de automatizacion y herramientas basadas en Excel para optimizar flujos recurrentes, limpiar datos y generar salidas.",
        projectOneImpact: "Mejoro la eficiencia operativa, redujo trabajo manual y creo procesos recurrentes mas confiables.",
        projectTwoIndex: "Proyecto 02",
        projectTwoTitle: "Plantilla Excel/VBA para importar y limpiar datos",
        projectTwoSummary: "Creacion de plantillas dinamicas en Excel/VBA que importan, limpian, cruzan y transforman datos desde multiples archivos externos.",
        projectTwoProblem: "Los equipos necesitaban combinar datos de archivos con estructuras inconsistentes y limpieza manual repetida.",
        projectTwoSolution: "Automatizacion VBA guiada por encabezados para importar datos, cruzar SKUs/productos, poblar plantillas y aplicar reglas de negocio dinamicas.",
        projectTwoImpact: "Redujo trabajo repetitivo de preparacion de datos y mejoro la consistencia de los archivos de reporting.",
        projectThreeIndex: "Proyecto 03",
        projectThreeTitle: "Dashboard de rentabilidad y performance para Amazon Seller",
        projectThreeSummary: "Diseno de la base para un dashboard de Amazon Seller combinando reportes de negocio, pagos, ads y metricas por producto.",
        projectThreeProblem: "Los datos de rentabilidad y performance estaban repartidos entre multiples exportaciones, dificultando entender el rendimiento real por producto.",
        projectThreeSolution: "Estructuracion de fuentes, limpieza de consultas, conexion de campos clave como SKU y ASIN, y preparacion de tablas listas para dashboard.",
        projectThreeImpact: "Creo un camino mas claro hacia insights de ventas, costes, publicidad y rentabilidad por producto.",
        projectFourIndex: "Proyecto 04",
        projectFourTitle: "Plantilla de reporting de KPIs de negocio",
        projectFourSummary: "Construccion de plantillas de seguimiento de KPIs operativos, incluyendo AHT, CSAT, QA, asistencia, attrition y adherencia.",
        projectFourProblem: "El seguimiento de performance necesitaba estar centralizado, ser mas claro y facil de revisar en el tiempo.",
        projectFourSolution: "Creacion de plantillas de Excel estructuradas con formulas, dashboards y vistas recurrentes de performance.",
        projectFourImpact: "Mejoro la visibilidad del rendimiento del equipo y apoyo mejores decisiones de coaching.",
        projectFiveIndex: "Proyecto 05",
        projectFiveTitle: "Automatizacion de flujos con Outlook y correo",
        projectFiveSummary: "Construccion de flujos VBA en Outlook para procesar correos entrantes, guardar adjuntos, disparar acciones y enviar reportes recurrentes.",
        projectFiveProblem: "Los flujos basados en correo requerian manejo manual repetitivo.",
        projectFiveSolution: "Desarrollo de logica VBA para monitorear bandejas, identificar mensajes relevantes, procesar adjuntos y automatizar acciones de seguimiento.",
        projectFiveImpact: "Redujo el manejo manual de correos e hizo mas confiables los flujos recurrentes de reporting.",
        detailProblem: "Problema",
        detailSolution: "Solucion",
        detailImpact: "Impacto",
        skillsEyebrow: "Stack tecnico",
        skillsTitle: "Herramientas agrupadas por el trabajo que apoyan.",
        skillAutomation: "Automatizacion",
        skillData: "Datos & BI",
        skillOps: "Negocio / Operaciones",
        experienceEyebrow: "Resumen de experiencia",
        experienceTitle: "El recorrido profesional detras de los sistemas.",
        experienceText: "El CV contiene el detalle completo. Esta seccion da a reclutadores una vista rapida de los roles mas relevantes para datos, automatizacion, operaciones y reporting.",
        roleOneTitle: "Rol de automatizacion / datos",
        roleOneText: "Construccion y mantenimiento de flujos de automatizacion para operaciones marketplace y tareas recurrentes de reporting usando Python, Excel, VBA, Selenium y Power Query.",
        roleTwoText: "Creacion de plantillas Excel a medida con VBA, macros, formulas avanzadas y logica reutilizable para calidad de datos y reporting operativo.",
        roleThreeText: "Liderazgo de visibilidad de KPIs como AHT, CSAT, QA, asistencia, attrition y adherencia, apoyando mejores decisiones de coaching.",
        roleFourText: "Base tecnica en sistemas, troubleshooting, soporte estructurado y confiabilidad operativa.",
        feedbackEyebrow: "Feedback",
        feedbackTitle: "Comentarios de personas a las que he ayudado.",
        feedbackText: "El feedback de proyectos independientes se incluye como prueba de ejecucion, mientras el sitio mantiene el foco en valor para empleadores e impacto de negocio.",
        testimonialOne: "\"Comunicacion clara, entrega rapida y una solucion practica facil de usar en el flujo real.\"",
        testimonialOneMeta: "Cliente A. - Feedback de proyecto independiente",
        testimonialTwo: "\"Entendio el problema de negocio rapidamente y convirtio un proceso repetitivo de Excel en algo mucho mas confiable.\"",
        testimonialThree: "\"Buen trabajo de automatizacion, preguntas acertadas y un resultado limpio que redujo esfuerzo manual.\"",
        feedbackNote: "Feedback adicional disponible a solicitud.",
        certEyebrow: "Certificaciones / Aprendizaje",
        certTitle: "Aprendizaje continuo con aplicacion practica.",
        certOneText: "Fundamentos de analisis de datos, pensamiento analitico y flujos aplicados de reporting.",
        certTwoText: "Modelado avanzado en hojas de calculo, analisis de negocio, formulas y soporte de decisiones con Excel.",
        contactEyebrow: "Contacto",
        contactTitle: "Te interesa trabajar juntos?",
        contactText: "Estoy abierto a oportunidades en datos, automatizacion, business intelligence y mejora de procesos, especialmente roles donde pueda ayudar a equipos a trabajar mas rapido y de forma mas inteligente.",
        emailMe: "Escribeme",
        footerText: "Analista de Negocios y Especialista en Automatizacion enfocado en sistemas practicos, reporting limpio e impacto medible de negocio."
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

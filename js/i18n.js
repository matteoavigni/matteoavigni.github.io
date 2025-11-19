// ====================================================================
// FILE: js/i18n.js
// Gestione centralizzata delle traduzioni (Internazionalizzazione)
// ====================================================================

export const defaultLang = 'it';

// Dizionario completo delle traduzioni
export const translations = {
    // Navigazione
    'nav-projects': { 'it': 'Progetti', 'en': 'Projects' },
    'nav-cv': { 'it': 'CV', 'en': 'Resume' },
    'nav-contact': { 'it': 'Contatti', 'en': 'Contact' },
    'nav-home': { 'it': 'Home', 'en': 'Home' },

    // Hero Section
    'hero-subtitle': {
        'it': 'Software Developer e Data Engineer',
        'en': 'Software Developer & Data Engineer'
    },
    'hero-title': {
        'it': 'Trasformo idee complesse in <span class="highlight">Web App e Soluzioni Desktop</span> performanti.',
        'en': 'I transform complex ideas into <span class="highlight">High-Performing Web Apps and Desktop Solutions</span>.'
    },
    'hero-description': {
        'it': 'Con un solido background in Ingegneria Matematica e Finanza Quantitativa, creo software che gestisce dati complessi e automatizza i processi, dal frontend all\'hosting in Cloud.',
        'en': 'With a strong background in Mathematical Engineering and Quantitative Finance, I build software that handles complex data and automates processes, from frontend to Cloud hosting.'
    },
    'hero-cta': {
        'it': 'Iniziamo il tuo Progetto',
        'en': 'Start Your Project'
    },

    // Sezione Skills
    'skills-title': {
        'it': 'Tecnologie in cui sono specializzato',
        'en': 'Technologies I specialize in'
    },

    // ====================================================================
    // 📢 SEZIONE PROGETTI
    // ====================================================================

    'projects-title': {
        'it': 'I Miei Progetti Selezionati',
        'en': 'My Featured Projects'
    },
    'project-subtitle': {
        'it': 'Dalle applicazioni desktop per la finanza ai siti web per i servizi professionali.',
        'en': 'From desktop applications for finance to websites for professional services.'
    },
    'link-demo': {
        'it': 'Demo Live',
        'en': 'Live Demo'
    },

    // Progetto 1: Simulatore Quiz
    'project-quiz-title': {
        'it': 'Simulatore Quiz Esame Consulente Finanziario',
        'en': 'Financial Consultant Exam Quiz Simulator'
    },
    'project-quiz-body': {
        'it': 'Applicazione desktop per la simulazione del quiz d\'esame per diventare consulenti finanziari in Italia. Implementato sistema di autenticazione sicuro con Google Cloud Run e OAuth2.0. Gestione completa del database domande e sistema di tracciamento progressi.',
        'en': 'Desktop application for simulating the Italian financial consultant exam quiz. Implemented a secure authentication system with Google Cloud Run and OAuth2.0. Complete management of the question database and progress tracking system.'
    },

    // Progetto 2: Template Streamlit
    'project-streamlit-title': {
        'it': 'Template Streamlit App con Google OAuth',
        'en': 'Streamlit App Template with Google OAuth'
    },
    'project-streamlit-body': {
        'it': 'Template completo per applicazioni Streamlit con autenticazione Google OAuth2.0. Include gestione sessioni, protezione route e deploy automatico su Streamlit Community Cloud. Ideale come punto di partenza per progetti data-driven sicuri.',
        'en': 'Complete template for Streamlit applications featuring Google OAuth2.0 authentication. Includes session management, route protection, and automatic deployment on Streamlit Community Cloud. Ideal starting point for secure, data-driven projects.'
    },

    // Progetto 3: Sito Portfolio (Osteopata)
    'project-website-title': {
        'it': 'Portfolio Professionale Statico (Osteopata)',
        'en': 'Static Professional Portfolio (Osteopath)'
    },
    'project-website-body': {
        'it': 'Realizzazione completa di un sito web statico, responsive e ottimizzato per i servizi sanitari. Gestione di tutte le fasi, dalla progettazione al deployment finale su Netlify. Un caso di successo per la presenza online di professionisti.',
        'en': 'Complete creation of a responsive, static website optimized for health services. Managed all phases, from design to final deployment on Netlify. A successful case study for professional online presence.'
    },

    // Sezione Contatti
    'contact-title': {
        'it': 'Hai un Progetto in Mente?',
        'en': 'Got a Project in Mind?'
    },
    'contact-text': {
        'it': 'Sono sempre disponibile per discutere nuove idee e sfide. Contattami per una consulenza gratuita.',
        'en': 'I\'m always available to discuss new ideas and challenges. Contact me for a free consultation.'
    },
    'contact-name': {
        'it': 'Nome completo',
        'en': 'Full name'
    },
    'contact-message': {
        'it': 'Il tuo messaggio',
        'en': 'Your message'
    },
    'contact-cta': {
        'it': 'Invia',
        'en': 'Submit'
    },
    'contact-alternative-text': {
        'it': 'Oppure, invia direttamente una mail a:',
        'en': 'Or, send a direct email to:'
    },

    // Form - Messaggi di stato
    'form-sending': {
        'it': 'Invio in corso...',
        'en': 'Sending...'
    },
    'form-reset': {
        'it': 'Nuovo Messaggio / Riprova',
        'en': 'New Message / Try Again'
    },
    'form-success': {
        'it': 'Messaggio inviato con successo! Ti risponderò al più presto.',
        'en': 'Message sent successfully! I will reply as soon as possible.'
    },
    'form-error': {
        'it': 'Errore nell\'invio: Riprova più tardi.',
        'en': 'Error sending message: Please try again later.'
    },
    'form-network-error': {
        'it': 'Si è verificato un errore di rete. Controlla la tua connessione.',
        'en': 'A network error occurred. Please check your connection.'
    },

    // Footer
    'footer-text': {
        'it': '&copy; 2025 Matteo Avigni',
        'en': '&copy; 2025 Matteo Avigni'
    },

    // === CV PAGE TRANSLATIONS ===
    'cv-title': {
        'it': 'Curriculum Vitae - Matteo Avigni',
        'en': 'Curriculum Vitae - Matteo Avigni'
    },
    'cv-name': {
        'it': 'Matteo Avigni',
        'en': 'Matteo Avigni'
    },
    'cv-role': {
        'it': 'Software Developer & Data Analyst (Quantitative Finance)',
        'en': 'Software Developer & Data Analyst (Quantitative Finance)'
    },
    'cv-download-btn': {
        'it': 'Scarica CV',
        'en': 'Download CV'
    },

    // Esperienza Professionale
    'cv-section-experience': {
        'it': 'Esperienza Professionale',
        'en': 'Professional Experience'
    },
    'exp1-title': {
        'it': 'Python Developer, Data Intelligence Team',
        'en': 'Python Developer, Data Intelligence Team'
    },
    'exp1-date': {
        'it': 'Gen 2024 — Corrente',
        'en': 'Jan 2024 — Current'
    },
    'exp1-company': {
        'it': 'Quaestio Capital Management, Milano (IT)',
        'en': 'Quaestio Capital Management, Milan (IT)'
    },
    'exp1-desc': {
        'it': [
            'Sviluppo software e analisi dati, focalizzato sul team Data Intelligence.',
            'Gestione end-to-end dei dati, dall\'acquisizione alla visualizzazione.',
            'Realizzazione di dashboard interattive e reportistica per tutte le aree aziendali.'
        ],
        'en': [
            'Software development and data analysis, focused on the Data Intelligence Team.',
            'End-to-end data management, from acquisition to visualization.',
            'Creation of interactive dashboards and reporting for all company areas.'
        ]
    },

    'exp2-title': {
        'it': 'Progetto Personale: Simulatore Quiz Finanziario',
        'en': 'Personal Project: Financial Quiz Simulator'
    },
    'exp2-date': {
        'it': 'Apr 2023 — Mag 2023',
        'en': 'Apr 2023 — May 2023'
    },
    'exp2-company': {
        'it': 'Sviluppo Autonomo, Milano (IT)',
        'en': 'Self-Developed, Milan (IT)'
    },
    'exp2-desc': {
        'it': [
            'Sviluppo di un\'applicazione desktop Tkinter per la simulazione di quiz per consulenti finanziari.',
            'Implementazione del login utente tramite Google Cloud Run per un\'autenticazione sicura e scalabile.',
            'Utilizzo di Python (frontend) e GCP Cloud Run (backend serverless).'
        ],
        'en': [
            'Development of a Tkinter desktop application for simulating financial consultant quizzes.',
            'Implemented user login via Google Cloud Run for secure and scalable authentication.',
            'Used Python (frontend) and GCP Cloud Run (serverless backend).'
        ]
    },

    'exp3-title': {
        'it': 'Analista Finanziario',
        'en': 'Financial Analyst'
    },
    'exp3-date': {
        'it': 'Mag 2023 — Dic 2023',
        'en': 'May 2023 — Dec 2023'
    },
    'exp3-company': {
        'it': 'Mediterranean Shipping Company, New York City (US)',
        'en': 'Mediterranean Shipping Company, New York City (US)'
    },
    'exp3-desc': {
        'it': [
            'Creazione di nuovi report finanziari per il management aziendale utilizzando SQL e PowerBI.',
            'Lavoro per 7 mesi come Analista Finanziario.'
        ],
        'en': [
            'Created new financial reports for company management using SQL and PowerBI.',
            'Worked for 7 months as a Financial Analyst.'
        ]
    },

    'exp4-title': {
        'it': 'Python Developer',
        'en': 'Python Developer'
    },
    'exp4-date': {
        'it': 'Dic 2020 — Apr 2023',
        'en': 'Dec 2020 — Apr 2023'
    },
    'exp4-company': {
        'it': 'Quaestio Capital Management, Milano (IT)',
        'en': 'Quaestio Capital Management, Milan (IT)'
    },
    'exp4-desc': {
        'it': [
            'Automazione di processi interni utilizzando Python.',
            'Sviluppo di interfacce Flask/JavaScript per interazione backend.',
            'Sviluppo di dashboard per Investment Management e manutenzione database MySQL (dati mercati finanziari e Time Series).'
        ],
        'en': [
            'Automated internal processes using Python.',
            'Developed Flask/JavaScript interfaces for backend interaction.',
            'Developed dashboards for Investment Management and maintained the MySQL database (financial market data and Time Series).'
        ]
    },

    'exp5-title': {
        'it': 'Analista Quantitativo',
        'en': 'Quantitative Analyst'
    },
    'exp5-date': {
        'it': 'Mar 2019 — Dic 2020',
        'en': 'Mar 2019 — Dec 2020'
    },
    'exp5-company': {
        'it': 'Pharus Asset Management, Mendrisio (CH)',
        'en': 'Pharus Asset Management, Mendrisio (CH)'
    },
    'exp5-desc': {
        'it': [
            'Manutenzione e sviluppo di strategie di investimento quantitative.',
            'Miglioramento dell\'efficienza delle procedure interne di gestione tramite Python.'
        ],
        'en': [
            'Maintained and developed quantitative investment strategies.',
            'Improved the efficiency of internal management procedures using Python.'
        ]
    },

    // Formazione
    'cv-section-education': {
        'it': 'Formazione',
        'en': 'Education'
    },
    'edu1-title': {
        'it': 'Laurea Magistrale in Ingegneria Matematica (Quantitative Finance)',
        'en': 'Master\'s Degree in Mathematical Engineering (Quantitative Finance)'
    },
    'edu1-date': {
        'it': '2017 — 2019',
        'en': '2017 — 2019'
    },
    'edu1-institution': {
        'it': 'Politecnico di Milano, 100/110',
        'en': 'Politecnico di Milano, 100/110'
    },
    'edu1-desc': {
        'it': [
            'Tesi su diversificazione degli asset crypto (in collaborazione con Digital Gold Institute).',
            'Focus su calcolo stocastico e pricing di strumenti finanziari esotici (Monte Carlo/Formule Chiuse).'
        ],
        'en': [
            'Thesis on crypto-asset diversification (in collaboration with Digital Gold Institute).',
            'Focus on stochastic calculus and pricing of exotic financial instruments (Monte Carlo/Closed Formulas).'
        ]
    },

    'edu2-title': {
        'it': 'Erasmus Student',
        'en': 'Erasmus Student'
    },
    'edu2-date': {
        'it': '2018',
        'en': '2018'
    },
    'edu2-institution': {
        'it': 'TU Wien (Technical University of Vienna)',
        'en': 'TU Wien (Technical University of Vienna)'
    },
    'edu2-desc': {
        'it': 'Periodo di sei mesi come studente Erasmus.',
        'en': 'Six-month period as an Erasmus student.'
    },

    'edu3-title': {
        'it': 'Laurea Triennale in Ingegneria Matematica',
        'en': 'Bachelor\'s Degree in Mathematical Engineering'
    },
    'edu3-date': {
        'it': '2013 — 2017',
        'en': '2013 — 2017'
    },
    'edu3-institution': {
        'it': 'Politecnico di Milano, 92/110',
        'en': 'Politecnico di Milano, 92/110'
    },

    // Competenze
    'cv-section-skills': {
        'it': 'Competenze Informatiche',
        'en': 'Technical Skills'
    },
    'skills-intro': {
        'it': 'La mia principale lingua di programmazione è **Python**, utilizzata per l\'automazione dei processi, l\'analisi dei dati, la reportistica automatica, e lo sviluppo di UI (Flask e Tkinter).',
        'en': 'My main programming language is **Python**, used for process automation, data analysis, automatic reporting, and UI development (Flask and Tkinter).'
    },
    'skill-python': {
        'it': 'Python (Flask, Tkinter, Data Analysis)',
        'en': 'Python (Flask, Tkinter, Data Analysis)'
    },
    'skill-sql': {
        'it': 'SQL (MySQL, Data Maintenance)',
        'en': 'SQL (MySQL, Data Maintenance)'
    },
    'skill-web': {
        'it': 'HTML/CSS/JS (UI Development)',
        'en': 'HTML/CSS/JS (UI Development)'
    },
    'skill-r': {
        'it': 'R (Analisi Numerica, Web Scraping)',
        'en': 'R (Numerical Analysis, Web Scraping)'
    },
    'skill-gcp': {
        'it': 'Google Cloud Platform (Cloud Run, Serverless)',
        'en': 'Google Cloud Platform (Cloud Run, Serverless)'
    },
    'skill-finance': {
        'it': 'Analisi Quantitativa & Mercati Finanziari',
        'en': 'Quantitative Analysis & Financial Markets'
    },
    'skill-powerbi': {
        'it': 'PowerBI',
        'en': 'PowerBI'
    },

    // Lingue
    'cv-section-languages': {
        'it': 'Lingue',
        'en': 'Languages'
    },
    'lang-italian': {
        'it': 'Italiano:',
        'en': 'Italian:'
    },
    'lang-italian-level': {
        'it': 'Madrelingua',
        'en': 'Mother tongue'
    },
    'lang-english': {
        'it': 'Inglese:',
        'en': 'English:'
    },
    'lang-english-level': {
        'it': 'Fluente',
        'en': 'Fluent'
    },

    // Consenso
    'cv-consent': {
        'it': 'Acconsento al trattamento dei dati personali forniti nel presente curriculum vitae ai sensi del Regolamento UE 2016/679.',
        'en': 'I consent to the processing of personal data provided in this curriculum vitae pursuant to EU Regulation 2016/679.'
    }
};

/**
 * Applica le traduzioni a tutti gli elementi con data-i18n
 * @param {string} lang - Codice lingua ('it' o 'en')
 */
export function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');

        if (translations[key] && translations[key][lang]) {
            const translation = translations[key][lang];

            // Gestisce array (per liste)
            if (Array.isArray(translation)) {
                element.innerHTML = translation.map(item => `<li>${item}</li>`).join('');
            } else {
                element.innerHTML = translation;
            }
        }
    });

    // Salva la lingua nel localStorage
    localStorage.setItem('siteLang', lang);
}

/**
 * Ottiene la lingua corrente dal localStorage o ritorna quella di default
 * @returns {string} Codice lingua corrente
 */
export function getCurrentLanguage() {
    return localStorage.getItem('siteLang') || defaultLang;
}

/**
 * Inizializza il sistema di traduzioni
 * @param {HTMLElement} languageSwitcher - Elemento select per il cambio lingua
 */
export function initI18n(languageSwitcher) {
    const savedLang = getCurrentLanguage();

    if (languageSwitcher) {
        languageSwitcher.value = savedLang;
        languageSwitcher.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
    }

    // Applica la lingua salvata
    setLanguage(savedLang);
}

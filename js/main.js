// ====================================================================
// FILE: js/main.js
// Orchestratore principale - Inizializza tutti i moduli
// ====================================================================

import { initI18n } from './i18n.js';
import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initContactForm } from './contact-form.js';
import { initCVDownload } from './cv-download.js';
import { initGoogleAnalytics, disableGoogleAnalytics } from './analytics.js';
import { initCookieConsent } from './cookie-consent.js';

// ====================================================================
// CONFIGURAZIONE GOOGLE ANALYTICS
// ====================================================================
// SOSTITUISCI CON IL TUO MEASUREMENT ID
const GA_MEASUREMENT_ID = 'G-2FJM7ZGLF7'; // <-- INSERISCI QUI IL TUO ID

// ====================================================================
// INIZIALIZZAZIONE AL CARICAMENTO DEL DOM
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Riferimenti agli elementi principali
    const languageSwitcher = document.getElementById('language-switcher');
    const themeToggle = document.getElementById('theme-toggle');

    // 1. Inizializza il sistema di consenso cookie
    initCookieConsent(
        // Callback quando l'utente accetta i cookie
        () => {
            initGoogleAnalytics(GA_MEASUREMENT_ID);
        },
        // Callback quando l'utente rifiuta i cookie
        () => {
            disableGoogleAnalytics(GA_MEASUREMENT_ID);
        }
    );

    // 2. Inizializza il sistema di traduzioni
    initI18n(languageSwitcher);

    // 3. Inizializza il tema (dark/light mode)
    initTheme(themeToggle);

    // 4. Inizializza la navigazione (menu mobile, scroll header)
    initNavigation();

    // 5. Inizializza il form di contatto (se presente nella pagina)
    initContactForm();

    // 6. Inizializza il download CV dinamico (se presente nella pagina)
    initCVDownload();
});

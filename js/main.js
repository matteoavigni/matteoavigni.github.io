// ====================================================================
// FILE: js/main.js
// Orchestratore principale - Inizializza tutti i moduli
// ====================================================================

import { initI18n } from './i18n.js';
import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initContactForm } from './contact-form.js';
import { initCVDownload } from './cv-download.js';

// ====================================================================
// INIZIALIZZAZIONE AL CARICAMENTO DEL DOM
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inizializzazione applicazione...');

    // Riferimenti agli elementi principali
    const languageSwitcher = document.getElementById('language-switcher');
    const themeToggle = document.getElementById('theme-toggle');

    // 1. Inizializza il sistema di traduzioni
    initI18n(languageSwitcher);
    console.log('✅ Sistema i18n inizializzato');

    // 2. Inizializza il tema (dark/light mode)
    initTheme(themeToggle);
    console.log('✅ Sistema tema inizializzato');

    // 3. Inizializza la navigazione (menu mobile, scroll header)
    initNavigation();
    console.log('✅ Sistema navigazione inizializzato');

    // 4. Inizializza il form di contatto (se presente nella pagina)
    initContactForm();
    console.log('✅ Form di contatto inizializzato');

    // 5. Inizializza il download CV dinamico (se presente nella pagina)
    initCVDownload();
    console.log('✅ Download CV inizializzato');

    console.log('🎉 Applicazione pronta!');
});

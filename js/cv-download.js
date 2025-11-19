// ====================================================================
// FILE: js/cv-download.js
// Gestione download dinamico CV in base alla lingua corrente
// ====================================================================

import { getCurrentLanguage } from './i18n.js';

/**
 * Inizializza il bottone download CV
 * Aggiorna il link del PDF in base alla lingua corrente
 */
export function initCVDownload() {
    const cvDownloadLink = document.getElementById('cv-download-link');

    if (!cvDownloadLink) {
        // Il bottone esiste solo nella pagina CV, non in altre pagine
        return;
    }

    // Funzione per aggiornare il link del PDF
    function updateDownloadLink() {
        const currentLang = getCurrentLanguage();
        const pdfPath = currentLang === 'it'
            ? '../assets/cv/CV_Matteo_Avigni_IT.pdf'
            : '../assets/cv/CV_Matteo_Avigni_EN.pdf';

        const fileName = currentLang === 'it'
            ? 'CV_Matteo_Avigni_IT.pdf'
            : 'CV_Matteo_Avigni_EN.pdf';

        cvDownloadLink.href = pdfPath;
        cvDownloadLink.download = fileName;

        console.log(`CV download link aggiornato: ${fileName}`);
    }

    // Aggiorna al caricamento
    updateDownloadLink();

    // Aggiorna quando cambia la lingua
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', updateDownloadLink);
    }
}

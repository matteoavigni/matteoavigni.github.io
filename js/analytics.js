// ====================================================================
// FILE: js/analytics.js
// Google Analytics 4 Integration
// ====================================================================

/**
 * Inizializza Google Analytics
 * @param {string} measurementId - Il tuo GA4 Measurement ID
 */
export function initGoogleAnalytics(measurementId) {
    if (!measurementId) {
        console.warn('Google Analytics: Measurement ID non fornito');
        return;
    }

    // Carica lo script gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Inizializza dataLayer e gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', measurementId, {
        'page_title': document.title,
        'page_location': window.location.href,
        'page_path': window.location.pathname
    });

    console.log('✅ Google Analytics inizializzato:', measurementId);
}

/**
 * Traccia evento personalizzato
 * @param {string} eventName - Nome dell'evento
 * @param {object} eventParams - Parametri dell'evento
 */
export function trackEvent(eventName, eventParams = {}) {
    if (window.gtag) {
        window.gtag('event', eventName, eventParams);
        console.log(`📊 Evento tracciato: ${eventName}`, eventParams);
    }
}

/**
 * Traccia download CV
 */
export function trackCVDownload() {
    trackEvent('cv_download', {
        'event_category': 'engagement',
        'event_label': 'CV Download',
        'value': 1
    });
}

/**
 * Traccia invio form contatti
 */
export function trackContactFormSubmit() {
    trackEvent('contact_form_submit', {
        'event_category': 'engagement',
        'event_label': 'Contact Form',
        'value': 1
    });
}

/**
 * Traccia click su progetto
 * @param {string} projectName - Nome del progetto
 */
export function trackProjectClick(projectName) {
    trackEvent('project_click', {
        'event_category': 'engagement',
        'event_label': projectName,
        'value': 1
    });
}
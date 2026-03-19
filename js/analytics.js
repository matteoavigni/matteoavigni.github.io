// ====================================================================
// FILE: js/analytics.js
// Gestione Google Analytics 4 con consenso cookie
// ====================================================================

let analyticsInitialized = false;

/**
 * Inizializza Google Analytics 4
 * @param {string} measurementId - ID di misurazione GA4 (es. 'G-XXXXXXXXXX')
 */
export function initGoogleAnalytics(measurementId) {
    if (!measurementId) {
        console.warn('⚠️ Google Analytics: Measurement ID non fornito');
        return;
    }

    if (analyticsInitialized) {
        console.log('✅ Google Analytics già inizializzato');
        return;
    }

    // Carica lo script di Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Inizializza gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', measurementId, {
        'anonymize_ip': true, // Anonimizza gli IP per privacy
        'page_title': document.title,
        'page_location': window.location.href,
        'page_path': window.location.pathname
    });

    analyticsInitialized = true;
    console.log('✅ Google Analytics inizializzato con consenso');
}

/**
 * Disabilita Google Analytics
 */
export function disableGoogleAnalytics(measurementId) {
    if (measurementId) {
        window[`ga-disable-${measurementId}`] = true;
        console.log('🚫 Google Analytics disabilitato');
    }
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
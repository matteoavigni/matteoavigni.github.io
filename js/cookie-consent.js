// ====================================================================
// FILE: js/cookie-consent.js
// Gestione del consenso cookie per GDPR compliance
// ====================================================================

const COOKIE_CONSENT_KEY = 'cookieConsent';
const COOKIE_CONSENT_ACCEPTED = 'accepted';
const COOKIE_CONSENT_DECLINED = 'declined';

/**
 * Controlla se l'utente ha già dato il consenso
 * @returns {string|null} 'accepted', 'declined', o null se non ha ancora scelto
 */
export function getCookieConsent() {
    return localStorage.getItem(COOKIE_CONSENT_KEY);
}

/**
 * Salva la scelta dell'utente
 * @param {string} choice - 'accepted' o 'declined'
 */
export function setCookieConsent(choice) {
    localStorage.setItem(COOKIE_CONSENT_KEY, choice);
}

/**
 * Mostra il banner dei cookie
 */
export function showCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.add('show');
    }
}

/**
 * Nasconde il banner dei cookie
 */
export function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.remove('show');
    }
}

/**
 * Inizializza il sistema di consenso cookie
 * @param {Function} onAccept - Callback da chiamare quando l'utente accetta
 * @param {Function} onDecline - Callback da chiamare quando l'utente rifiuta
 */
export function initCookieConsent(onAccept, onDecline) {
    const consent = getCookieConsent();
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');

    // Se l'utente ha già scelto, esegui il callback appropriato
    if (consent === COOKIE_CONSENT_ACCEPTED) {
        if (onAccept) onAccept();
        hideCookieBanner();
    } else if (consent === COOKIE_CONSENT_DECLINED) {
        if (onDecline) onDecline();
        hideCookieBanner();
    } else {
        // Mostra il banner se non ha ancora scelto
        showCookieBanner();
    }

    // Event listener per il pulsante Accetta
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            setCookieConsent(COOKIE_CONSENT_ACCEPTED);
            hideCookieBanner();
            if (onAccept) onAccept();
        });
    }

    // Event listener per il pulsante Rifiuta
    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            setCookieConsent(COOKIE_CONSENT_DECLINED);
            hideCookieBanner();
            if (onDecline) onDecline();
        });
    }
}

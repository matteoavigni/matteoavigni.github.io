// ====================================================================
// FILE: js/theme.js
// Gestione del tema (Dark Mode / Light Mode)
// ====================================================================

export const defaultTheme = 'dark';

/**
 * Imposta il tema dell'applicazione
 * @param {string} theme - 'dark' o 'light'
 * @param {HTMLElement} themeToggle - Pulsante toggle tema
 */
export function setTheme(theme, themeToggle) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.documentElement.classList.add('dark');

        if (themeToggle) {
            themeToggle.innerHTML = '🌙';
            themeToggle.setAttribute('data-tooltip', 'Passa al Tema Chiaro');
            themeToggle.setAttribute('aria-label', 'Attiva tema chiaro');
        }
    } else {
        document.body.classList.remove('dark-theme');
        document.documentElement.classList.remove('dark');

        if (themeToggle) {
            themeToggle.innerHTML = '☀️';
            themeToggle.setAttribute('data-tooltip', 'Passa al Tema Scuro');
            themeToggle.setAttribute('aria-label', 'Attiva tema scuro');
        }
    }

    // Salva nel localStorage
    localStorage.setItem('siteTheme', theme);
}

/**
 * Ottiene il tema corrente
 * @returns {string} 'dark' o 'light'
 */
export function getCurrentTheme() {
    return localStorage.getItem('siteTheme') || defaultTheme;
}

/**
 * Alterna tra dark e light mode
 * @param {HTMLElement} themeToggle - Pulsante toggle tema
 */
export function toggleTheme(themeToggle) {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme, themeToggle);
}

/**
 * Inizializza il sistema di gestione tema
 * @param {HTMLElement} themeToggle - Pulsante toggle tema
 */
export function initTheme(themeToggle) {
    const savedTheme = getCurrentTheme();
    setTheme(savedTheme, themeToggle);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            toggleTheme(themeToggle);
        });
    }
}

// ====================================================================
// FILE: js/navigation.js
// Gestione della navigazione, menu mobile e scroll header
// ====================================================================

let lastScrollTop = 0;

/**
 * Chiude il menu mobile
 */
export function closeMenu() {
    const navMenu = document.getElementById('main-menu');
    const menuToggle = document.getElementById('menu-toggle');

    if (navMenu) navMenu.classList.remove('open');
    if (menuToggle) menuToggle.classList.remove('open');
    document.body.classList.remove('no-scroll');
}

/**
 * Inizializza il menu mobile (hamburger)
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-menu');

    if (!menuToggle || !navMenu) return;

    // Toggle del menu mobile
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        menuToggle.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    });

    // Chiude il menu quando si clicca un link interno (solo su mobile)
    document.querySelectorAll('#main-menu a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                closeMenu();
            }
        });
    });
}

/**
 * Gestisce la visibilità dell'header allo scroll
 */
function initScrollHeader() {
    const header = document.getElementById('main-header');

    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const headerHeight = header.offsetHeight;

        // Nasconde l'header quando si scrolla giù
        if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
            header.style.transform = 'translateY(-100%)';
        }
        // Mostra l'header quando si scrolla su
        else if (currentScroll < lastScrollTop) {
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
}

/**
 * Inizializza tutto il sistema di navigazione
 */
export function initNavigation() {
    initMobileMenu();
    initScrollHeader();
}
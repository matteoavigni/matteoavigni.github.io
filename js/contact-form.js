// ====================================================================
// FILE: js/contact-form.js
// Gestione del form di contatto e invio a GCP Cloud Function
// ====================================================================

import { translations, getCurrentLanguage } from './i18n.js';

const GCP_FUNCTION_URL = 'https://contact-form-handler-897499388225.europe-west1.run.app';

/**
 * Blocca/sblocca i campi del form
 * @param {HTMLFormElement} form - Form da bloccare
 * @param {boolean} isDisabled - true per bloccare, false per sbloccare
 */
function setFormState(form, isDisabled) {
    if (form) {
        form.querySelectorAll('input, textarea').forEach(field => {
            field.disabled = isDisabled;
        });
    }
}

/**
 * Reset logico del form (pulisce campi e ripristina stato)
 * @param {Event} e - Event object
 * @param {HTMLFormElement} form - Form da resettare
 * @param {HTMLElement} statusMessage - Elemento messaggio di stato
 * @param {HTMLButtonElement} submitButton - Bottone submit
 */
function resetFormLogic(e, form, statusMessage, submitButton) {
    if (e) e.preventDefault();

    form.reset();
    setFormState(form, false);

    statusMessage.textContent = '';
    statusMessage.className = 'form-message';

    // Ripristina il pulsante
    submitButton.type = 'submit';
    submitButton.innerHTML = translations['contact-cta'][getCurrentLanguage()];
    submitButton.removeEventListener('click', (e) => resetFormLogic(e, form, statusMessage, submitButton));
}

/**
 * Gestisce l'invio del form
 * @param {Event} e - Submit event
 * @param {HTMLFormElement} form - Form element
 * @param {HTMLElement} statusMessage - Elemento messaggio
 * @param {HTMLButtonElement} submitButton - Bottone submit
 */
async function handleSubmit(e, form, statusMessage, submitButton) {
    e.preventDefault();

    const currentLang = getCurrentLanguage();

    // Riferimenti diretti ai campi
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // 1. Prepara l'interfaccia
    setFormState(form, true);
    submitButton.disabled = true;
    submitButton.innerHTML = translations['form-sending'][currentLang];
    statusMessage.textContent = '';
    statusMessage.className = 'form-message';

    // 2. Raccogli i dati
    const payload = {
        name: nameInput ? nameInput.value.trim() : '',
        email: emailInput ? emailInput.value.trim() : '',
        message: messageInput ? messageInput.value.trim() : ''
    };

    console.log('Payload Inviato:', payload);

    // Validazione campi vuoti
    if (!payload.name || !payload.email || !payload.message) {
        console.error("Campi obbligatori vuoti");
        setFormState(form, false);
        submitButton.disabled = false;
        statusMessage.classList.add('error');
        statusMessage.textContent = "Errore: Assicurati di aver compilato tutti i campi.";
        submitButton.innerHTML = translations['contact-cta'][currentLang];
        return;
    }

    try {
        // 3. Invia i dati
        const response = await fetch(GCP_FUNCTION_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        // 4. Gestisci la risposta
        const responseData = response.status === 204 ? {} : await response.json();

        if (response.ok) {
            // SUCCESSO
            statusMessage.classList.add('success');
            statusMessage.textContent = translations['form-success'][currentLang];
            console.log('SUCCESSO SERVER:', responseData);
        } else {
            // ERRORE
            statusMessage.classList.add('error');
            const serverErrorMsg = responseData.message || translations['form-error'][currentLang];
            statusMessage.textContent = `Errore ${response.status}: ${serverErrorMsg}`;
            console.error('ERRORE SERVER:', responseData);
        }
    } catch (error) {
        // 5. Errori di rete
        statusMessage.classList.add('error');
        statusMessage.textContent = translations['form-network-error'][currentLang];
        console.error('ERRORE RETE/JSON:', error);
    } finally {
        // 6. Configura bottone come RESET
        submitButton.disabled = false;
        submitButton.innerHTML = translations['form-reset'][currentLang];
        submitButton.type = 'button';
        submitButton.addEventListener('click', (e) => resetFormLogic(e, form, statusMessage, submitButton));
        setFormState(form, true);
    }
}

/**
 * Inizializza il form di contatto
 */
export function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const statusMessage = document.getElementById('form-status-message');
    const submitButton = document.getElementById('submit-button');

    if (!contactForm || !submitButton || !statusMessage) {
        console.log('Form di contatto non trovato in questa pagina');
        return;
    }

    // Verifica che ci siano i campi necessari
    const inputCount = contactForm.querySelectorAll('input[name], textarea[name]').length;
    console.log(`Trovati ${inputCount} campi di input nel form`);

    if (inputCount < 3) {
        console.error("ERRORE: Meno di 3 campi trovati nel form");
    }

    // Imposta il testo iniziale del pulsante
    submitButton.innerHTML = translations['contact-cta'][getCurrentLanguage()];

    // Event listener per il submit
    contactForm.addEventListener('submit', (e) => handleSubmit(e, contactForm, statusMessage, submitButton));
}
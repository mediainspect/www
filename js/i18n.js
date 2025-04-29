
let currentLanguage = 'en';
let translations = {};

async function loadTranslations(lang) {
    try {
        const response = await fetch(`translations/${lang}.json`);
        translations[lang] = await response.json();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

function updateContent() {
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = translations[currentLanguage];
        for (const key of keys) {
            value = value[key];
        }
        if (value) {
            element.textContent = value;
        }
    });
}

async function changeLanguage(lang) {
    if (!translations[lang]) {
        await loadTranslations(lang);
    }
    currentLanguage = lang;
    updateContent();
}

// Initialize with English
document.addEventListener('DOMContentLoaded', async () => {
    await loadTranslations('en');
    updateContent();
});

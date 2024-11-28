const translations = {
    es: {
        /******************* Page: Navbar *******************/
        // menu options
        menuOption1: "Perfil",
        menuOption2: "Sobre mí",
        menuOption3: "Valores",
        menuOption4: "Contacto",
        menuOption5: "Proyectos",
    },
    en: {
        menuOption1: "Profile",
        menuOption2: "About me",
        menuOption3: "Values",
        menuOption4: "Contact",
        menuOption5: "Projects",
    }
}

/**
 * @name changeLanguage
 * @description Change the language of the text from english to spanish and viceversa
 */
function changeLanguage() {
    // Obtiene el idioma actual y cambia al otro idioma
    const lang = document.documentElement.lang === 'en' ? 'es' : 'en';
    document.documentElement.lang = lang;

    // Cambia el texto de los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[lang][key];
        
        // Verifica si el elemento es un input para cambiar el placeholder
        if (element.tagName.toLowerCase() === 'input' && element.hasAttribute('placeholder')) {
            element.setAttribute('placeholder', translation);
        } else {
            element.innerHTML = translation;
        }
    });
}
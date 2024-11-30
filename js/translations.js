const translations = {
    es: {
        /******************* Section: Navbar *******************/
        menuOption1: "Perfil",
        menuOption2: "Sobre mí",
        menuOption3: "Valores",
        menuOption4: "Contacto",
        menuOption5: "Proyectos",
        /******************* Section: AutoType *******************/
        autoTypeWelcome: "Bienvenido a Kyomu Technologies",
        autoTypeSlogan: "",
        /******************* Section: Space *******************/
        spaceExplore: "Explora mi perfil, valores, proyectos y datos de contacto",
        spaceDiscover: "Descubre mi pasión por el desarrollo web y de software a través de soluciones creativas",
    },
    en: {
        /******************* Section: Navbar *******************/
        menuOption1: "Profile",
        menuOption2: "About me",
        menuOption3: "Values",
        menuOption4: "Contact",
        menuOption5: "Projects",
        /******************* Section: AutoType *******************/
        autoTypeWelcome: "Welcome to Kyomu Technologies",
        autoTypeSlogan: "Innovating and developing success!",
        /******************* Section: Space *******************/
        spaceExplore: "Explore my profile, values, projects, and contact details",
        spaceDiscover: "Discover my passion for web and software development through creative solutions",
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
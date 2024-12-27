const translations = {
    es: {
        /******************* Sección: Navbar *******************/
        menuOption0: "Inicio",
        menuOption1: "Resume",
        menuOption2: "Perfil",
        menuOption3: "Valores",
        menuOption4: "Contacto",
        menuOption5: "Proyectos",
        /******************* Sección: Auto Tipado *******************/
        autoTypeWelcome: "Bienvenido a Kyomu Technologies",
        autoTypeSlogan: "",
        /******************* Sección: Espacio *******************/
        spaceExplore: "Explora mi perfil, valores, proyectos y datos de contacto",
        spaceDiscover: "Descubre mi pasión por el desarrollo web y de software a través de soluciones creativas",

        /******************* Sección: Perfil *******************/
        profileHeading: "Perfil Profesional",
        profilePosition: "Desarrollador de Software & Web",
        profileIntro: "Explora mi perfil profesional completo de habilidades y tecnologías para conocer más sobre mi experiencia como desarrollador.",

        /******************* Sección: Valores *******************/
        titleValues: "Valores",
        valuesIntro: "Mis valores fundamentales son la base del compromiso para ofrecer soluciones que impulsan mi crecimiento profesional y el éxito de mis clientes",
        valuesClose: "Explora cómo estos valores definen mi visión profesional y mi compromiso con la excelencia",
        value1: "Compromiso",
        value2: "Resiliencia",
        value3: "Excelencia",
        value4: "Innovación",
        valuesBtn: "Explorar mas",

        /******************* Sección: Proyectos *******************/
        titleProjects: "Proyectos",
        projDesc1: "Aplicación Web",
        projDesc2: "Diseño Web",
        projDesc3: "Aplicación Web",
        projDesc4: "Diseño Web",
        projDesc5: "Aplicación Web",
        projBtn: "Visitar proyecto",

        /******************* Sección: Contacto *******************/
        titleContact: 'Contacto',
        contactIntro: '¿Tienes alguna pregunta? Llena el formulario rápido aquí o visita nuestra página de contacto para más información y ubicación.',
        contactBtn: 'Enviar',
        contactName: 'Nombre completo',
        contactEmail: 'Correo',
        
        /******************* Sección: Footer *******************/
        privacyPolicy: "Políticas de privacidad",
        reservedRights: "&copy; 2024 Kyomu Technologies. Todos los derechos reservados.",

        /******************* Sección: Contact us *******************/
        cuHeading: "Contáctame",
        cuIntro: "Tu aliado tecnológico, comprometido con convertir tus ideas en soluciones excepcionales con profesionalismo y excelencia.",

        /******************* Página: Perfil Profesional *******************/

    },
    en: {
        /******************* Section: Navbar *******************/
        menuOption0: "Home",
        menuOption1: "Resume",
        menuOption2: "Profile",
        menuOption3: "Values",
        menuOption4: "Contact",
        menuOption5: "Projects",

        /******************* Section: AutoType *******************/
        autoTypeWelcome: "Welcome to Kyomu Technologies",
        autoTypeSlogan: "Innovating and developing success!",

        /******************* Section: Space *******************/
        spaceExplore: "Explore my profile, values, projects, and contact details",
        spaceDiscover: "Discover my passion for web and software development through creative solutions",

        /******************* Section: Profile *******************/
        profileHeading: "Professional Profile",
        profilePosition: "Software & Web Developer",
        profileIntro: "Explore my full professional profile skills and technologies to learn more about my expertise as a developer.",

        /******************* Section: Values *******************/
        titleValues: "Values",
        valuesIntro: "My core values are the foundation of my commitment to delivering solutions that drive my professional growth and the success of my clients",
        valuesClose: "Explore how these values define my professional vision and my commitment to excellence",
        value1: "Commitment",
        value2: "Resilience",
        value3: "Excellence",
        value4: "Innovation",
        valuesBtn: "Explore more",

        /******************* Section: Projects *******************/
        titleProjects: "Projects",
        projDesc1: "Web Application",
        projDesc2: "Web Design",
        projDesc3: "Web Application",
        projDesc4: "Web Design",
        projDesc5: "Web Application",
        projBtn: "Visit project",

        /******************* Section: Contact *******************/
        titleContact: 'Contact',
        contactIntro: 'Do you have any questions? Please complete the form quickly here or visit our contact page for more information and location details.',
        contactBtn: 'Send',
        contactName: 'Complete name',
        contactEmail: 'Email',

        /******************* Section: Footer *******************/
        privacyPolicy: "Privacy Policies",
        reservedRights: "&copy; 2024 Kyomu Technologies. All rights reserved.",

        /* ---------------------------- ** ---------------------------- */

        /******************* Page: Perfil Profesional *******************/

        /******************* Page: Contact us *******************/
        cuHeading: "Get in touch",
        cuIntro: "Your trusted technology partner, dedicated to turning your ideas into exceptional solutions with professionalism and excellence.",

    },
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

    const resumeLink = document.getElementById('resume-link');
    resumeLink.setAttribute('href', lang === 'en' ? '/pdf/roberto_rojas_cv_en.pdf' : '/pdf/roberto_rojas_cv_es.pdf');
}

// Initial setting for the Resume link based on default language
document.addEventListener('DOMContentLoaded', () => {
    const initialLang = document.documentElement.lang || 'en';
    const resumeLink = document.getElementById('resume-link');
    resumeLink.setAttribute('href', initialLang === 'en' ? '/pdf/roberto_rojas_cv_en.pdf' : '/pdf/roberto_rojas_cv_es.pdf');
});
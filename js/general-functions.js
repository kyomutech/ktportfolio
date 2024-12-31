import { errorTranslations } from './general-errors.js';

/**
 * @description Function to handle the transition from autoTyping section to space section
 */
function handleTransition() {
    // Fade out the current section
    const welcomeSection = document.querySelector('.welcome-section');
    const elements = document.querySelectorAll('.d-none');
    welcomeSection.classList.add('fade-out');
    
    // After fade out, set display none and fade in the new section
    setTimeout(function () {
        welcomeSection.style.display = 'none'; // Hide the current section
        elements.forEach(element => {
            // Replace 'd-none' with 'hidden' to start with
            element.classList.remove('d-none');
            element.classList.add('hidden');
        
            // Use a small delay to trigger the transition to 'visible'
            setTimeout(() => {
                element.classList.remove('hidden');
                element.classList.add('visible');
            }, 10); // Small delay to ensure the transition is applied
        });

        const starsSection = document.querySelector('.space-section');
        // starsSection.classList.remove('d-none'); // Correctly remove the 'd-none' class
        
        // Apply fade-in transition
        starsSection.classList.add('fade-in');

        const indicatorEng = document.querySelector('.lang-es');
        indicatorEng.classList.add('lang-en-db');

    }, 1000); // This should match the duration of the fade-out effect
}

/**
 * @description Function to execute auto typing
 */
export function autoTypeMainSection() {
    const text1 = new AutoTyping({
        id: 'auto-typing1',
        typeText: ['Welcome to Kyomu Tecknologies'],
        textColor: "#DB3939",
        typeSpeed: 150,
        cursorColor: "#DB3939",
        deleteSpeed: 75,
        waitBeforeDelete: 0,
        deleteDelay: 5000,
        waitBetweenTexts: 1000,
        typeInfinity: false,
        textDeleteOptions: { 
            0: { 
             deleteToChar: 20, 
             continueThis: "hnologies" 
            },
        }
    }).init();

    const text2 = new AutoTyping({
        id: 'auto-typing2',
        typeText: ['Innovating and developing success!'],
        textColor: "#313A42",
        typeSpeed: 150,
        cursorColor: "#313A42",
        deleteSpeed: 75,
        waitBeforeDelete: 0,
        deleteDelay: 10000,
        waitBetweenTexts: 1000,
        typeInfinity: false
    }).init();

    // Wait until typing is complete, then transition sections
    setTimeout(function () {
        handleTransition(); // Call the new function for the transition
    }, 15000); // This should match the total duration of typing and delay before deleting text
}

/**
 * @description Function to generate random stars
 */
export function generateStars() {
    const spaceSection = document.getElementById('space');
    const starCount = Math.floor(Math.random() * 40) + 30; // Random number of stars (30 to 70)

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random positions
        const randomTop = Math.random() * 100; // Percentage
        const randomLeft = Math.random() * 100; // Percentage

        // Apply the random positions
        star.style.top = randomTop + '%';
        star.style.left = randomLeft + '%';

        // Randomize star size
        const randomSize = Math.random() * 3 + 2; // Size between 2px and 5px
        star.style.width = randomSize + 'px';
        star.style.height = randomSize + 'px';

        // Append the star to the space section
        spaceSection.appendChild(star);
    }
}

/**
 * @param {*} idPage 
 * @description Redirects user to the respective page based on button selected
 */
export function goToPage(idPage){
    console.log(idPage);
    if (idPage === 'id-profile') {
        window.open("https://kyomutech.com/profile.html", "_blank");
    } else if (idPage === 'id-values') {
        window.open("https://kyomutech.com/values.html", "_blank");
    } else if (idPage === 'id-contact-us') {
        window.open("https://kyomutech.com/contact-us.html", "_blank");
    } else if (idPage === 'id-about-me') {
        window.open("https://kyomutech.com/about-me.html", "_blank");
    }
}

/**
 * @param {*} idProject
 * @description Redirects user to the respective project based on project selected
 */
export function goToProject(idProject){
    console.log(idProject);
    if (idProject === 'autospot') {
        window.open("https://kyomutech.com/projects/autospot/", "_blank");
    } else if (idProject === 'mrgmechanics') {
        window.open("https://kyomutech.com/projects/mrgmechanics/", "_blank");
    } else if (idProject === 'logicmathportfolio') {
        window.open("https://kyomutech.com/projects/logicmathportfolio/", "_blank");
    } else if (idProject === 'popovich') {
        window.open("https://kyomutech.com/projects/popovich/", "_blank");
    } else if (idProject === 'adabayestheorem') {
        window.open("https://kyomutech.com/projects/adabayestheorem/", "_blank");
    }
}

/****************************** Block: Email Validations ******************************/
/**
 * @name validateEmailFormat
 * @param {*} email
 * @description Validates the email address format
 */
function validateEmailFormat(email) {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if the email matches the regular expression
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
}

/**
 * @name validateEmail
 * @param {*} quickEmailInput - Input element (quickEmailInput) that is triggering the input event.
 * @param {*} emailErrorMsg - DOM element where the error message will be shown
 * @description Redirects user to the respective project based on project selected
 */
export function validateEmail(quickEmailInput, emailErrorMsgElement) {
    const email = quickEmailInput.value.trim();
    let lang = document.documentElement.lang;
    console.log(email);
    if (!validateEmailFormat(email)) {
        emailErrorMsgElement.textContent = errorTranslations[lang]?.emailErrorMsg || 'Non inveni';
        emailErrorMsgElement.style.display = 'block';
    } else {
        emailErrorMsgElement.style.display = 'none';
    }
}

/****************************** Block: Phone Validations ******************************/
/**
 * @param {*} quickPhoneInput - refers to the input element (quickPhoneInput) that is triggering the input event.
 * @description Redirects user to the respective project based on project selected
 */
export function formatPhoneNumber(quickPhoneInput) {
    let phoneNumber = quickPhoneInput.value.replace(/\D/g, '');

    // Add the hyphen after the 4th digit
    if (phoneNumber.length > 4) {
        phoneNumber = phoneNumber.slice(0, 4) + '-' + phoneNumber.slice(4);
    }

    // Update the input value with the formatted phone number
    quickPhoneInput.value = phoneNumber;
}

/**
 * @param {*} quickPhoneInput - Input element (quickPhoneInput) that is triggering the input event.
 * @param {*} phoneErrorMsg - DOM element where the error message will be shown
 * @description Redirects user to the respective project based on project selected
 */
export function validatePhoneNumber(quickPhoneInput, phoneErrorMsgElement) {
    let phoneNumber = quickPhoneInput.value.replace(/\D/g, '');
    let lang = document.documentElement.lang;

    // Check if the field is empty
    if (phoneNumber === '') {
        phoneErrorMsgElement.textContent = ''; // Clear the error message
    } else if (phoneNumber.length !== 8) {
        phoneErrorMsgElement.textContent = errorTranslations[lang]?.phoneErrorMsg || 'Non inveni';
    } else {
        phoneErrorMsgElement.textContent = ''; // Clear the error message for valid input
    }
}

/**
 * @name validateQuickForm()
 * @param {*} quickFormID
 * @description Send an email notification with the filled details from the form to the Page Admin 
 */
export function validateQuickForm(){
    var allValid = true; // Assuming all fields are valid initially

    // Get all input elements
    var fields = [
        {id: 'quick-form-name', name: 'name'},
        {id: 'quick-form-email', name: 'email'},
        {id: 'quick-form-msg', name: 'message'}
    ];

    fields.forEach(field => {

        var input = document.getElementById(field.id);

        // Check if the input was found
        if (!input) {
            console.error(`Element with ID '${field.id}' not found.`);
            allValid = false;
            return;
        }

        // Check if input value is empty
        if (input.value.trim() === '') {
            input.classList.add('missing-required !important');
            allValid = false;
        } else {
            input.classList.remove('missing-required !important');
        }
    });

    return allValid;
}

/**
 * @name sendForm()
 * @description Send an email notification with the filled details from the form to the Page Admin 
 */
export function sendForm() {
    const name = document.getElementById('quick-form-name').value;
    const email = document.getElementById('quick-form-email').value;
    const message = document.getElementById('quick-form-msg').value;


}
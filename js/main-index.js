"use strict";

import * as generalFunctions from './general-functions.js'

/**
 * @description Event Listener to initialize autoTyping
 */
document.addEventListener('DOMContentLoaded', () => {
    generalFunctions.autoTypeMainSection();
    generalFunctions.generateStars();
    setupProfileNameAnimation();

});

/**
 * @type EventListener
 * @description Invoke goToProject Function
*/
document.querySelectorAll('.go-to-project').forEach(button => {
    button.addEventListener('click', function () {
        generalFunctions.goToProject(this.id); // Pass the id of the clicked button
    });
});

/**
 * @type EventListener
 * @description Invoke goToPage Function
*/
document.querySelectorAll('.go-to-pages').forEach(button => {
    button.addEventListener('click', function () {
        generalFunctions.goToPage(this.id); // Pass the id of the clicked button
    });
});

/****************************** Block: Email Validations ******************************/
const quickEmailInput = document.getElementById('quick-form-email');
const quickEmailErrorMsg = document.getElementById('quick-email-error');
/**
 * @type EventListener
 * @description Invoke validateEmail function
*/
quickEmailInput.addEventListener('blur', function() {
    generalFunctions.validateEmail(this, quickEmailErrorMsg)
});

/****************************** Block: Phone Validations ******************************/
const quickPhoneInput = document.getElementById('quick-form-phone');
const quickPhoneErrorMsg = document.getElementById('quick-phone-error');
/**
 * @type EventListener
 * @description Invoke formatPhoneNumber function
*/
quickPhoneInput.addEventListener('input', function() {
    generalFunctions.formatPhoneNumber(this);
});

/**
 * @type EventListener
 * @description Invoke validatePhoneNumber function
*/
quickPhoneInput.addEventListener('blur', function() {
    generalFunctions.validatePhoneNumber(this, quickPhoneErrorMsg)
});

// /**
//  * @type EventListener
//  * @description Invoke sendForm function
// */
// const quickFormBtn = document.getElementById('quick-form-btn');
// quickFormBtn.addEventListener('click', generalFunctions.sendForm);

/******************* UNUSED CODE *******************/

// function setupProfileNameAnimation() {
//     console.log(this)
//     const text = document.querySelector(".profile-name");
//     const parent = text.parentElement; // Assuming parent has the d-none class

//     // Observer to detect when 'd-none' is removed
//     const observer = new MutationObserver(() => {
//         if (!parent.classList.contains("d-none")) {
//             startAnimation(text); // Trigger the animation
//             observer.disconnect(); // Stop observing
//         }
//     });

//     // Start observing the parent for attribute changes
//     observer.observe(parent, { attributes: true });
// }

// function startAnimation(element) {
//     const strText = element.textContent;
//     const splitText = strText.split("");
//     element.textContent = ""; // Clear existing content

//     for (let i = 0; i < splitText.length; i++) {
//         element.innerHTML += `<span>${splitText[i]}</span>`;
//     }

//     let char = 0;
//     const timer = setInterval(() => {
//         const span = element.querySelectorAll("span")[char];
//         span.classList.add("fade");
//         char++;
//         if (char === splitText.length) {
//             clearInterval(timer);
//         }
//     }, 50);
// }
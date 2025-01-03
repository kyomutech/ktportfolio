"use strict";

import * as generalFunctions from './general-functions.js'

/**
 * @description Event Listener to initialize autoTyping
 */
document.addEventListener('DOMContentLoaded', () => {
    generalFunctions.autoTypeMainSection();
    generalFunctions.generateStars();
    
});

document.getElementById("go-top-btn").style.display = "none";
window.onscroll = function() {
    generalFunctions.scrollFunctionTop()
};

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

/****************************** Block: Send form ******************************/
/**
 * @type EventListener
 * @description Invoke sendForm function
*/
const quickFormBtn = document.getElementById('quick-form-btn');
const requiredErrorMsg = document.querySelectorAll('.quick-form-required');
quickFormBtn.addEventListener('click', () => generalFunctions.sendQuickForm(requiredErrorMsg));



/******************* UNUSED CODE *******************/

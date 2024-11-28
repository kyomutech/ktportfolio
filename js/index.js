// Initialize AutoTyping
document.addEventListener('DOMContentLoaded', () => {
    const text1 = new AutoTyping({
        id: 'auto-typing1',
        typeText: ['Welcome to Kyomu Technologyes'],
        textColor: "#DB3939",
        typeSpeed: 150,
        cursorColor: "#DB3939",
        deleteSpeed: 75,
        waitBeforeDelete: 0,
        deleteDelay: 5000,
        waitBetweenTexts: 1000,
        textDeleteOptions: { //deleting a text to a specific character, and typing a new sequel (object) *default(null)
            0: { //index of strings in "typeText" Array (key-number : value-object)
             deleteToChar: 26, //index of the characters of the selected string, where the writing new part of text beginning (number)
             continueThis: "ies" //a new piece of text to be written (string)
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
        deleteDelay: 60000,
        waitBetweenTexts: 1000,
    }).init();
});

// document.addEventListener('DOMContentLoaded', () => {
//     const myText = new AutoTyping({
//         id: 'auto-typing1', //Your HTML element id without # (string) - required
//         typeText: ['words','sentences'], //Your text (array with strings) - required
//         textColor: '#dc3545', //Color of Your text (string) *default('#000')
//         typeSpeed: 50, //Interval between each character (nummber) *default(100ms)
//         typeRandom: true, //Random interval between each character (boolean) *default(false)
//         typeDelay: 200, //Delay interval between typing two texts (number) *default(100ms)
//         cursor: '/', //Character for cursor (string) *default('|')
//         cursorColor: '#dc3545', //Color of the cursor (string) *default('#000')
//         cursorSpeed: 200, //Interval of the cursor blinks (number) *default(300ms)
//         deleteSpeed: 75, //Interval of deleting text (number) *default(50ms)
//         deleteDelay: 2000, //Delay interval before deleting text (number) *default(2000ms)
//         typeInfinity: true, //Autotyping infinity or only one cycle (boolean) *default(true)
//         // callBack: { //Callback function - triggered after every typing cycle (object) *default(null)
//         // 	counter: 4, //Every typing cycle counter is reduced by 1, after 0 it is reset (number)
//         // 	method: function(counter){...} //Your function (function)
//         // },
//         textDeleteOptions: { //deleting a text to a specific character, and typing a new sequel (object) *default(null)
//             0: { //index of strings in "typeText" Array (key-number : value-object)
//              deleteToChar: 2, //index of the characters of the selected string, where the writing new part of text beginning (number)
//              continueThis: "rld best" //a new piece of text to be written (string)
//             },
//         }
//     }).init();
// });



// document.addEventListener('DOMContentLoaded', () => {
//     let autoTyping2Started = false;

//     // First typing effect
//     const autoTyping1 = new AutoTyping({
//         id: 'auto-typing1',
//         typeText: ['Welcome to Kyomu Technologies'],
//         textColor: "#DB3939",
//         typeSpeed: 150,
//         cursorColor: "#DB3939",
//         deleteSpeed: 75,
//         waitBeforeDelete: 0,
//         deleteDelay: 65000,
//         waitBetweenTexts: 1000,
//         callBack: {
//             counter: 1, // Only after 1 full cycle
//             method: function (counter) {
//                 if (!autoTyping2Started) { // Ensure it runs only once
//                     autoTyping2Started = true;
//                     console.log('First typing complete! Starting second typing...');

//                     // Initialize the second typing effect
//                     const autoTyping2 = new AutoTyping({
//                         id: 'auto-typing2',
//                         typeText: ['Welcome to Kyomu Technologies'],
//                         textColor: "#DB3939",
//                         typeSpeed: 150,
//                         cursorColor: "#DB3939",
//                         deleteSpeed: 75,
//                         waitBeforeDelete: 0,
//                         deleteDelay: 65000,
//                         waitBetweenTexts: 1000,
//                     }).init();
//                 }
//             },
//         },
//     }).init();
// });


// const textParts2 = [
//     "Welcoumee", // Typo to erase
//     "Welcome to Kyomu Technologies portfolio..." // Corrected second part
// ];

// const textParts1 = [
//     "Kyomu Tekno",
//     "Kyomu Technologies<br>Innovating and developing success!" // The second part with one line
// ];

// let typingSpeed = 100; // Typing speed (in milliseconds)
// let erasingSpeed = 50; // Erasing speed (in milliseconds)
// const speedVariation = 50; // Maximum speed variation (in milliseconds)
// let index = 0;
// let currentPart = 0;
// let isErasing = false;
// let isFirstTextDone = false; // Flag to check if the first part is done

// // Function to add random speed variation
// function getRandomSpeed(baseSpeed) {
//     return baseSpeed + Math.floor(Math.random() * speedVariation); // Randomize speed slightly
// }

// // Typing effect for the first text part with a typo
// function typeEffectFirstText(callback) {
//     const typingElement = document.getElementById("auto-typing");
//     const currentText = textParts1[currentPart];

//     if (isErasing) {
//         // Erase one character
//         typingElement.innerHTML = currentText.substring(0, index - 1);
//         index--;
//         if (index === 0) {
//             isErasing = false; // Stop erasing and move to the next part
//             currentPart++; // Move to the next text part in the array
//             if (currentPart < textParts1.length) {
//                 setTimeout(() => {
//                     typeEffectFirstText(callback); // Continue typing the next part
//                 }, 1000); // Short delay before typing the next part
//             } else {
//                 isFirstTextDone = true; // Mark the first part as done
//                 callback(); // Trigger the second text typing
//             }
//         }
//     } else {
//         // Type one character
//         typingElement.innerHTML = currentText.substring(0, index + 1);
//         index++;
//         if (index === currentText.length) {
//             // After the first part, wait for a short delay before starting to erase
//             if (currentPart === 0) {
//                 setTimeout(() => {
//                     isErasing = true; // Start erasing after 1 second
//                 }, 1000);
//             }
//         }
//     }

//     // Adjust typing speed dynamically
//     const speed = isErasing ? getRandomSpeed(erasingSpeed) : getRandomSpeed(typingSpeed);
//     setTimeout(() => {
//         typeEffectFirstText(callback); // Continue typing/erasing based on current state
//     }, speed);
// }

// // Typing effect for the second text (one single line)
// function typeEffectSecondText() {
//     const typingElement = document.getElementById("auto-typing");
//     const currentText = textParts2[0]; // Since there's only one line in textParts2

//     typingElement.innerHTML = currentText.substring(0, index + 1);
//     index++;
//     if (index === currentText.length) {
//         // The second part is done typing
//         return;
//     }

//     setTimeout(typeEffectSecondText, getRandomSpeed(typingSpeed)); // Continue typing the second part
// }

// // Start the first text part typing effect on page load
// window.onload = function() {
//     typeEffectFirstText(typeEffectSecondText); // Start typing the first part and then trigger the second part
// };
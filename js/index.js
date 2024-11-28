const textParts2 = [
    "Welcoumee", // Typo to erase
    "Welcome to Kyomu Technologies portfolio..." // Corrected second part
];

const textParts1 = [
    "Kyomu Tekno",
    "Kyomu Technologies<br>Innovating and developing success!" // The second part with one line
];

let typingSpeed = 100; // Typing speed (in milliseconds)
let erasingSpeed = 50; // Erasing speed (in milliseconds)
const speedVariation = 50; // Maximum speed variation (in milliseconds)
let index = 0;
let currentPart = 0;
let isErasing = false;
let isFirstTextDone = false; // Flag to check if the first part is done

// Function to add random speed variation
function getRandomSpeed(baseSpeed) {
    return baseSpeed + Math.floor(Math.random() * speedVariation); // Randomize speed slightly
}

// Typing effect for the first text part with a typo
function typeEffectFirstText(callback) {
    const typingElement = document.getElementById("auto-typing");
    const currentText = textParts1[currentPart];

    if (isErasing) {
        // Erase one character
        typingElement.innerHTML = currentText.substring(0, index - 1);
        index--;
        if (index === 0) {
            isErasing = false; // Stop erasing and move to the next part
            currentPart++; // Move to the next text part in the array
            if (currentPart < textParts1.length) {
                setTimeout(() => {
                    typeEffectFirstText(callback); // Continue typing the next part
                }, 1000); // Short delay before typing the next part
            } else {
                isFirstTextDone = true; // Mark the first part as done
                callback(); // Trigger the second text typing
            }
        }
    } else {
        // Type one character
        typingElement.innerHTML = currentText.substring(0, index + 1);
        index++;
        if (index === currentText.length) {
            // After the first part, wait for a short delay before starting to erase
            if (currentPart === 0) {
                setTimeout(() => {
                    isErasing = true; // Start erasing after 1 second
                }, 1000);
            }
        }
    }

    // Adjust typing speed dynamically
    const speed = isErasing ? getRandomSpeed(erasingSpeed) : getRandomSpeed(typingSpeed);
    setTimeout(() => {
        typeEffectFirstText(callback); // Continue typing/erasing based on current state
    }, speed);
}

// Typing effect for the second text (one single line)
function typeEffectSecondText() {
    const typingElement = document.getElementById("auto-typing");
    const currentText = textParts2[0]; // Since there's only one line in textParts2

    typingElement.innerHTML = currentText.substring(0, index + 1);
    index++;
    if (index === currentText.length) {
        // The second part is done typing
        return;
    }

    setTimeout(typeEffectSecondText, getRandomSpeed(typingSpeed)); // Continue typing the second part
}

// Start the first text part typing effect on page load
window.onload = function() {
    typeEffectFirstText(typeEffectSecondText); // Start typing the first part and then trigger the second part
};

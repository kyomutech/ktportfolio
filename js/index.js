// Initialize AutoTyping
document.addEventListener('DOMContentLoaded', () => {
    autoTypeMainSection();
    generateStars();
});

function handleTransition() {
    // Fade out the current section
    const welcomeSection = document.querySelector('.welcome-section');
    welcomeSection.classList.add('fade-out');
    
    // After fade out, set display none and fade in the new section
    setTimeout(function () {
        welcomeSection.style.display = 'none'; // Hide the current section
        const starsSection = document.querySelector('.space-section');
        starsSection.classList.remove('d-none'); // Correctly remove the 'd-none' class
        
        // Apply fade-in transition
        starsSection.classList.add('fade-in');

        const indicatorEng = document.querySelector('.lang-es');
        indicatorEng.classList.add('lang-en-db');

    }, 1000); // This should match the duration of the fade-out effect
}

function autoTypeMainSection() {
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

// Function to generate random stars
function generateStars() {
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

console.log(window.innerWidth);
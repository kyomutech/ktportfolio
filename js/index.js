// Initialize AutoTyping
document.addEventListener('DOMContentLoaded', () => {
    autoTypeMainSection();
    generateStars();
    setupProfileNameAnimation();
});

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

// Function to redirect user to specifi project
function sendToProject(idProject){
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

function setupProfileNameAnimation() {
    const text = document.querySelector(".profile-name");
    const parent = text.parentElement; // Assuming parent has the d-none class

    // Observer to detect when 'd-none' is removed
    const observer = new MutationObserver(() => {
        if (!parent.classList.contains("d-none")) {
            startAnimation(text); // Trigger the animation
            observer.disconnect(); // Stop observing
        }
    });

    // Start observing the parent for attribute changes
    observer.observe(parent, { attributes: true });
}

function startAnimation(element) {
    const strText = element.textContent;
    const splitText = strText.split("");
    element.textContent = ""; // Clear existing content

    for (let i = 0; i < splitText.length; i++) {
        element.innerHTML += `<span>${splitText[i]}</span>`;
    }

    let char = 0;
    const timer = setInterval(() => {
        const span = element.querySelectorAll("span")[char];
        span.classList.add("fade");
        char++;
        if (char === splitText.length) {
            clearInterval(timer);
        }
    }, 50);
}

//desaparece el boton ScrollTop al cargar la pagina web
document.getElementById("arrow-up").style.display = "none";

//esconder botón ScrollTop (parte superior)
window.onscroll = function() {
    scrollFunctionTop()
    
};

function goToPage(idPage){
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

console.log(window.innerWidth);
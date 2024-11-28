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

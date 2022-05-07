// - Create .js files to store word answers and word candidates
//      - Create function to iterate over array and return a random word
// - Create new game
//      - Event listener on button
//      - Clear all previous entries on screen
//      - Take random 5 letter word and store in new array
//      - Separate word into individual letters in array
// - Create 'letter' buttons for user letter input
//      - Add event listeners to each button, e.target.value or innerText?
// - Check user input against correct word
//      - Event listener on 'Submit word' button to run function
//      - Convert word to array of individual letters
//      - Add letters one by one into the line
//          - Use setTimeout to delay between them appearing
//      - If statements to check letter inputs against correct letters array
//      - User letters turn green if correct in right position, yellow if correct but wrong position, grey if wrong
//      - Confirm box if right answer inputted
//          - If statement to wipe board if play again selected



const answerWordsLength = wordAnswers.words.length;
const candidateWordsLength = wordCandidates.words.length;


// Function to return a random word from answerWordsLength & clear previous entries
function getWord() {
    // Add clear all word/letter entry code here
    let randomNum = Math.random();
    let intNum = Math.floor(randomNum * answerWordsLength)
    let selectedWord = wordAnswers.words[intNum];
    console.log(selectedWord);
    return selectedWord;
}

// Store selected word in variable
let gameWord = (getWord());

// Add event listener on new game button to get new word
let newGameButton = document.querySelector('#new-game-button');
newGameButton.addEventListener("click", getWord);

// Create letter input buttons

const letters = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", '⌫', "C", "V", "B", "N", "M", "Enter"
]

for (i = 0; i < letters.length; i++) {
    // Create new button
    let newLetterButton = document.createElement('button');
    let letterPosition = `letter-${letters[i]}`;
    // Set unique id for each button (#letter-x)
    newLetterButton.setAttribute('id', letterPosition);
    // Set class name for all letters
    newLetterButton.setAttribute('class', 'letter-button');
    // Set innerText to unique letter
    newLetterButton.textContent = letters[i];
    // Append button to 'input-buttons' section
    let targetSection = document.querySelector('#input-buttons');
    targetSection.appendChild(newLetterButton);
}

// Change delete and enter button classes to target separately
document.querySelector('#letter-Enter').removeAttribute('class');
document.querySelector('#letter-Enter').setAttribute('class', 'enter-button');
document.querySelector('#letter-⌫').removeAttribute('class');
document.querySelector('#letter-⌫').setAttribute('class', 'del-button');


// Functions to add letters to spaces on click
// Add event listener to each button
let allLetterButtons = document.getElementsByClassName('letter-button');

for (i = 0; i < allLetterButtons.length; i++) {
    allLetterButtons[i].addEventListener("click", function (e) {
        console.log(e.target.innerText);
    });
}
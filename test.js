// Standard JS


const answerWordsLength = wordAnswers.words.length;
const candidateWordsLength = wordCandidates.words.length;


// Function to return a random word from answerWordsLength & clear previous entries
function getWord() {
    // Add clear all word/letter entry code here
    let randomNum = Math.random();
    let intNum = Math.floor(randomNum * answerWordsLength)
    let selectedWord = wordAnswers.words[intNum];
    return selectedWord;
}
// Store selected word in variable
let gameWord = getWord();
// Convert to uppercase
gameWord = gameWord.toUpperCase();
// Convert to array with individual letters
gameWord = gameWord.split("")
console.log(gameWord)

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
let allLetterButtons = document.getElementsByClassName('letter-button');


function getLetter() {
    // Add event listener to all letter buttons and target innerText value
    for (i = 0; i < allLetterButtons.length; i++) {
        allLetterButtons[i].addEventListener("click", function (e) {
            let letter = e.target.innerText;
            // Send value to new function letterToSquare
            letterToSquare(letter);
        });
    }
}

getLetter();

let row = 1;
let column = 1;
let userAttempt = [];

function letterToSquare(letter) {
    if (row <= 6) {
        if (column <= 5) {
            let boxId = `row-${row}-box-${column}`;
            let target = document.getElementById(boxId);
            target.innerText = letter;
            userAttempt.push(letter);
            column++;
        }
        // if (column == 6) {
        //     column = 1;
        // }
    }
    console.log(userAttempt);
}


// Test JS for letter colour logic
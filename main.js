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
    return selectedWord;
}

// Store selected word in variable
let gameWord = getWord();
// Pass into array with separate letters
gameWord = gameWord.toUpperCase();
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

// Input letter to correct square
let squareRow = 1;
let column = 1;
let userAttempt = "";

function letterToSquare(letter) {
    if (squareRow <= 6) {
        if (column <= 5) {
            let boxId = `row-${squareRow}-box-${column}`;
            let target = document.getElementById(boxId);
            target.innerText = letter;
            userAttempt += letter;
            console.log(userAttempt);
            column++;
        }
    }
}



// Event listener for enter button
let enterButton = document.querySelector('.enter-button');
enterButton.addEventListener("click", checkWord);

// Check inputted word against gameWord

let row = 1;

function checkWord() {
    column = 1;
    // If correct answer submitted
    if (userAttempt == gameWord) {
        let column = 1;
        for (i = 0; i < gameWord.length; i++) {
            let boxId = `row-${row}-box-${column}`;
            let target = document.getElementById(boxId)
            target.classList.toggle("green");
            column++;
        }
    } else if (userAttempt != gameWord) {
        let column = 1;
        userAttempt = "";
        for (i = 0; i < gameWord.length; i++) {
            // let wordCandidateList = wordCandidates.words;
            if (userAttempt[i] == gameWord[i]) {
                // Turn letter green
                let boxId = `row-${row}-box-${column}`;
                let target = document.getElementById(boxId)
                target.classList.toggle("green");
                gameWord = gameWord.replace(gameWord[i], ".");
                console.log(userAttempt[i]);
                column++;
            } else if (gameWord.includes(userAttempt[i])) {
                let letter = userAttempt[i];
                let count = getLetterCount(letter)
                if (count <= 1) {
                    // Turn letter yellow
                    let boxId = `row-${row}-box-${column}`;
                    let target = document.getElementById(boxId)
                    target.classList.toggle("yellow");
                    column++;
                } else if (count > 1) {
                    let boxId = `row-${row}-box-${column}`;
                    let target = document.getElementById(boxId)
                    target.classList.toggle("grey");
                }
            } else {
                // Turn letter grey
                let boxId = `row-${row}-box-${column}`;
                let target = document.getElementById(boxId)
                target.classList.toggle("grey");
                column++;

            }

        }
        if (column = 6) {
            squareRow++;
        }

    }

}

function getLetterCount(letter) {
    let re = new RegExp(letter);
    let count = gameWord.match(re).length;
    return count
}

// To do:
//      - Check word is accepted word in wordCandidates
//      - Get row to move down




// function checkWord() {
//     for (i = 0; i < row; i++) {
//         if (wordArray[i] == gameWord[i]) {
//             console.log(wordArray);
//         }
//     }

// };



// if word = in word-answers array return 1
// else if word = in word-candidates return 0
// else return -1

// function for winning word in word-answers
// letters turn green one by one and 'Correct!' message displayed

// function for incorrect word but in word-candidates
//      check letters against individual letters from word
//          if letters match at position turn green
//          if letters match at different position turn yellow (if match regex of correct word && does not match letter at current position)

// function for word not contained in word-candidates
// add class 'vibrate' to row
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

// Input letter to correct square
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



// Event listener for enter button
let enterButton = document.querySelector('.enter-button');
enterButton.addEventListener("click", checkWord);

// Check inputted word against gameWord
function checkWord() {
    let column = 1;
    // If correct answer submitted
    for (i = 0; i < gameWord.length; i++) {
        if (column <= 5) {
            if (userAttempt == gameWord) {
                let boxId = `row-${row}-box-${column}`;
                let target = document.getElementById(boxId);
                target.classList.toggle("green");
                column++;
            } else if (userAttempt != gameWord) {
                if (userAttempt[i] == gameWord[i]) {
                    // Return green if matching
                    let boxId = `row-${row}-box-${column}`;
                    let target = document.getElementById(boxId);
                    target.classList.toggle("green");
                    column++;
                } else if (userAttempt[i] != gameWord[i]) {
                    // Return yellow if not matching but in answer
                    letterCountInGameWord(userAttempt[i]);
                    letterCountInUserWord(userAttempt[i]);
                    let letterInstanceInGameWord = letterCountInGameWord();
                    let letterInstanceInUserWord = letterCountInUserWord();
                    if (letterInstanceInGameWord >= letterInstanceInUserWord) {
                        let boxId = `row-${row}-box-${column}`;
                        let target = document.getElementById(boxId);
                        target.classList.toggle("yellow");
                        column++;
                    } else if (letterInstanceInGameWord < letterInstanceInUserWord) {
                        let boxId = `row-${row}-box-${column}`;
                        let target = document.getElementById(boxId);
                        target.classList.toggle("grey");
                        column++;
                    }
                } else {
                    // Return grey if not matching and not in answer
                    let boxId = `row-${row}-box-${column}`;
                    let target = document.getElementById(boxId);
                    target.classList.toggle("grey");
                    column++;
                }
            }

        }
    }
    console.log(column);
    row++;
    column = 1;
    console.log(column);
    userAttempt = [];
}


// Function to check how many of letter in answer
function letterCountInGameWord(letter) {
    let letterInstanceInGameWord = 0;
    for (i = 0; i < gameWord.length; i++) {
        if (letter == gameWord[i]) {
            letterInstanceInGameWord++;
        }
    }
    return letterInstanceInGameWord;
}

function letterCountInUserWord(letter) {
    let letterInstanceInUserWord = 0;
    for (i = 0; i < gameWord.length; i++) {
        if (letter == userAttempt[i]) {
            letterInstanceInUserWord++;
        }
    }
    return letterInstanceInUserWord;
}





// Check to find how many instances of letter remaining in gameWord
// numberOfThisLetterInAnswer(userAttempt[i]);
// column++;
// Call function to check how many instances
// If only one instance, return yellow class for letter
// column++;


// If two or more instances of letter remaining
// If number of letter in userAttempt > number in gameWord, return grey class
// If number of letter in userAttempt <= number in gameWord, return yellow class










































// Previous

// function
// let row = 1;

// function checkWord() {
//     column = 1;
//     If correct answer submitted
//     if (userAttempt == gameWord) {
//         let column = 1;
//         for (i = 0; i < gameWord.length; i++) {
//             let boxId = `row-${row}-box-${column}`;
//             let target = document.getElementById(boxId)
//             target.classList.toggle("green");
//             column++;
//         }
//     } else if (userAttempt != gameWord) {
//         let column = 1;
//         userAttempt = "";
//         for (i = 0; i < gameWord.length; i++) {
//             let wordCandidateList = wordCandidates.words;
//             if (userAttempt[i] == gameWord[i]) {
//                 Turn letter green
//                 let boxId = `row-${row}-box-${column}`;
//                 let target = document.getElementById(boxId)
//                 target.classList.toggle("green");
//                 gameWord = gameWord.replace(gameWord[i], ".");
//                 console.log(gameWord);
//                 column++;
//             } else if (gameWord.includes(userAttempt[i])) {
//                 let letter = userAttempt[i];
//                 let count = getLetterCount(letter)
//                 if (count <= 1) {
//                     Turn letter yellow
//                     let boxId = `row-${row}-box-${column}`;
//                     let target = document.getElementById(boxId)
//                     target.classList.toggle("yellow");
//                     column++;
//                 } else if (count > 1) {
//                     let boxId = `row-${row}-box-${column}`;
//                     let target = document.getElementById(boxId)
//                     target.classList.toggle("grey");
//                 }
//             } else {
//                 // Turn letter grey
//                 let boxId = `row-${row}-box-${column}`;
//                 let target = document.getElementById(boxId)
//                 target.classList.toggle("grey");
//                 column++;

//             }

//         }
//         if (column = 6) {
//             squareRow++;
//         }

//     }

// }


// To do:
//      - Check word is accepted word in wordCandidates
//      - Get row to move down
//      - Function for word not contained in word-candidates
//      - Add class 'vibrate' to row
// - Store word list in data.js file
//      - Create function to iterate over array and return only 5 letter words
//      - Create function to pick a random word from 5 letter list & store in variable
// - Create new game
//      - Event listener on button
//      - Clear all previous entries on screen
//      - Take random 5 letter word and store in new array
//      - Separate word into individual letters in array
// - Check user input against correct word
//      - Event listener on 'Submit word' button to run function
//      - Convert word to array of individual letters
//      - Add letters one by one into the line
//          - Use setTimeout to delay between them appearing
//      - If statements to check letter inputs against correct letters array
//      - User letters turn green if correct in right position, yellow if correct but wrong position, grey if wrong
//      - Confirm box if right answer inputted
//          - If statement to wipe board if play again selected


// Store all words in variable
const words = wordsList.words;

// Function to return only 5 letter words from full list
function onlyFiveLetterWords() {
    let wordArray = [];
    for (i = 0; i < words.length; i++) {
        if (words[i].length === 5) {
            let selectedWord = words[i];
            selectedWord = selectedWord.split();
            wordArray.push(selectedWord);
        }
    }
    return wordArray;
}

let wordSelection = onlyFiveLetterWords();
let wordsLength = wordSelection.length;

// Function to return a random word from 5 letter list
function getWord() {
    let randomNum = Math.random();
    let intNum = Math.floor(randomNum * wordsLength)
    let selectedWord = wordSelection[intNum];
    console.log(selectedWord);
    return selectedWord;
}

getWord();
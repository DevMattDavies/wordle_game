// - Get dictionary API
//      - Fetch API & convert to .json
//      - .then to store as variable
// - Function to return only 5 letter words
//      - Store all words in array
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


// Word stored in variable
let words = wordsList.words;
// let wordsToArray = words[0].split();
// console.log(wordsToArray);

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
console.log(wordSelection);

function getWord() {
    let fiveLetterWords = [];
    for (i = 0; i < words.length; i++) {
        if (words[i].length === 5) {
            let correctWord = words[i];
            fiveLetterWords = fiveLetterWords.push(correctWord);
        }
    }
    let randomNum = Math.random();
    let intNum = Math.floor(randomNum * wordsLength)
    let selectedWord = fiveLetterWords[intNum];
    console.log(selectedWord);
}
getWord();

// let wordsLength = words.length
// let randomNum = Math.random();
// let intNum = Math.floor(randomNum * wordsLength)
// let word = wordsList.words[intNum];
// console.log(word);


// 
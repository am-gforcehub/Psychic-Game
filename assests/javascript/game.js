//Global Variables

//Arrays and Variables for holding data

//Array for choosen words
var wordOptions = ["apple", "banana", "pear", "cherry", "strawberry", "peach", "lemon", "avocado", "grapes", "mango"];

//Array that is blank so it can hold the choosen word at a later time
var choosenWord = "";

//Determine what letters are in the word
var lettersinWord = [];

//Need to calculate the number of spaces in the word
var numSpaces = 0;

//Array that holds the spaces and successful number of guesses
var spacesandSuccesses = [];

//Array for wrong guesses
var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Functions (make something happen)

//Function for start of game; randomly selects words from wordOption array to start
function startGame() {
    choosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    //Need  to break word apart into individual letters; allows to have an array of individual letters
    lettersinWord = choosenWord.split("");
    //Need to get number of letters in each word
    numSpaces = lettersinWord.length;
    //Needs to reset guesses back to 9 and wrong gusses back to 0 (cleared)
    guessesLeft = 9;
    wrongLetters = [];
    spacesandSuccesses = [];

    //Populate spaces and successes with right number of blanks to do this use a for loop
    for (i = 0; i < numSpaces; i++) {
        spacesandSuccesses.push(" ");
    }

    //Change HTML to reflect amount of spaces for each word choosen, how many guesses are left, win count and loss count

    document.getElementById("wordToGuess").innerHTML = spacesandSuccesses.join("_");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    console.log(numSpaces);
    console.log(lettersinWord);
    console.log(choosenWord);
    console.log(spacesandSuccesses);

    //Create comparitor logic to check is letters clicked are the letters in the word

    function checkLetters(letter) {
        //check is the letter exists anywhere in the word 
        var isLetterInWord = false;
        //create a for loop to see if the letter selected matches any letter in word
        for (i = 0; i < numSpaces; i++) {
            if (choosenWord[i] == letter) {
                isLetterInWord = true;
            }
        }

        //Check where in the word the letter exists, then populate the spacesandsucceses array
        if (isLetterInWord) {
            for (i = 0; i < numSpaces; i++) {
                if (choosenWord[i] == letter) {
                    spacesandSuccesses[i] = letter;
                }
            }
        }
        //letter wasnt found in word

        else {
            wrongLetters.push(letter);
            guessesLeft--
        }

        console.log(spacesandSuccesses);

    }

    function roundComplete() {
        console.log("Win Counter:" + winCount + " | Loss Counter: " + lossCount + " | Guesses Left: " + numGuesses);

        //check if user won
        if (lettersinWord.toString() == spacesandSuccesses.toString()) {
            winCount++;
            alert("You won");
            //Update the win couter in the HTML
            document.getElementById("winCounter").innerHTML = winCount;

            startGame();
        }
        //check if user lost
    }

    //Main Process (Calling)

    //Initiates the code for the first time
    startGame();

    //Registering key clicks
    document.onkeyup = function (event) {
        var lettersinWord = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(lettersinWord);
        roundComplete();

        console.log(lettersinWord);
    }
}
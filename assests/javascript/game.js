//Everything is loaded before the functions
$(document).ready(function () {

    //create a variable with array for alphabet

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //create variables with array for selected words

    var word = ["apple", "banana", "pear", "cherry", "strawberry", "peach", "lemon", "avocado", "grapes", "mango"];

    //create a variables for guesses and stored guesses

    var guess;
    var guessStored;

    //create a variable for lives 

    var lives;

    //create a variable for counting the correct guesses

    var liveCount;

    //create a variable for number of spaces in a word

    var space;
    //create an element for lives

    var showLives = document.getElementById("mylives");

    //create alphabet list ul

    var abcButtons = function () {
        myButtons = document.getElementById("abcButtons");
        letters = document.createElement("ul");

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = "alphabet";
            list = document.createElement("li");
            list.id = "letter";
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // /*This chooses a random word from the array/ Math.floor = A number representing the largest integer less than or equal to the specified number. Math.random = A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive). */

    // var randomFruit = randomFruitArr[Math.floor(Math.random() * randomFruitArr.length)];

    // /*JavaScript has two scopes – global and local. Any variable declared outside of a function belongs to the global scope, and is therefore accessible from anywhere in your code. Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions.*/
    // //here are some global scopes

    // var s;
    // var count = 0;
    // //empty array to store guesses
    // var answerArray = [];


    // //fill the array with underscores, which will match the number of letters in the word

    // function startUp() {

    //     for (var i = 0; i < randomFruit.length; i++) {
    //         answerArray[i] = "_";
    //     }

    //     //put them in a string

    //     s = answerArray.join(" ");
    //     document.getElementById("answer").innerHTML = s;
    // }

    // //Get the letter the user put in the box

    // function Letter() {
    //     var letter = document.getElementById("letter").value;

    //     if (letter.length > 0);
    //     {
    //         for (var i = 0; i < randomFruit.length; i++) {

    //             //if user answers letter in word

    //             if (randomFruit[i] === letter) {

    //                 //assign it to letter
    //                 answerArray[i] = letter;
    //             }

    //         }
    //         //how many times it takes to guess

    //         count++;
    //         document.getElementById("counter").innerHTML = "No. of clicks: " + count;
    //         document.getElementById("answer").innerHTML = answerArray.join(" ");

    //     }

    // }
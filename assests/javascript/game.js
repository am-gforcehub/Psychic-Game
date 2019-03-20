//(function ($, window, document, undefined) {

// define array of words to choose from in game

var randomFruitArr = ["apple", "banana", "pear", "cherry", "strawberry", "peach", "lemon", "avocado", "grapes", "mango"];

/*This chooses a random word from the array/ Math.floor = A number representing the largest integer less than or equal to the specified number. Math.random = A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive). */

var randomFruit = randomFruitArr[Math.floor(Math.random() * randomFruitArr.length)];

/*JavaScript has two scopes – global and local. Any variable declared outside of a function belongs to the global scope, and is therefore accessible from anywhere in your code. Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions.*/
//here are some global scopes

var s;
var count = 0;
//empty array to store guesses
var answerArray = [];


//fill the array with underscores, which will match the number of letters in the word

function startUp() {

    for (var i = 0; i < randomFruit.length; i++) {
        answerArray[i] = "_";
    }

    //put them in a string

    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
}

//Get the letter the user put in the box

function Letter() {
    var letter = document.getElementById("letter").value;

    if (letter.length > 0);
    {
        for (var i = 0; i < randomFruit.length; i++) {

            //if user answers letter in word

            if (randomFruit[i] === letter) {

                //assign it to letter
                answerArray[i] = letter;
            }

        }
        //how many times it takes to guess

        count++;
        document.getElementById("counter").innerHTML = "No. of clicks: " + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");

    }









//    }) (jQuery, window, document);
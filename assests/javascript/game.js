//Everything is loaded before the functions
// $(document).ready(function () {
//window.onload = function () {

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

var buttons = function () {
    myButtons = document.getElementById("buttons");
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
}




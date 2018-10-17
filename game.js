var wordList = ["lion", "zebra", "tiger", "hyena", "panther", "gazelle"];
var wins = 0;
var loss = 0;
var guesses;
var emptyArray = []
var guessingWord;
var isAlphabet = function (check) {
    return /^[A-Z]$/i.test(check);
}// call this function to check if its in the alphabet

var toLowerCase = function (check) {
    return check.toLowerCase();
}// call this function to make everything lowercase


$(document).ready(function () {
    document.onkeyup = function (event) {
        if (guesses >= 10) {
            return;
        }

        var letter = event.key;

        var word = wordList[Math.floor((Math.random() * wordList.length) + 1)];












    }



}); 

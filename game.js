var wordList=["lion", "zebra", "tiger", "hyena", "panther", "gazelle"];
var wins = 0;
var loss = 0;
var guesses;
var emptyArray = []
var guessingWord;

$(document).ready(function () {
    document.onkeyup = function(event) {
        var letter = event.key;
        
        var word = wordList[Math.floor((Math.random() * 6) + 1)];
        return word;
    

}
   

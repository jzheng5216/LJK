var wordList=["lion", "zebra", "tiger", "hyena", "panther", "gazelle"];
var wins = 0;
var loss = 0;
var guesses;
var emptyArray = []
var guessingWord;

$(document).ready(function () {
    document.onkeyup = function(event) {
        if (guesses >= 10){
            return;
        }
        
    var letter = event.key;
        
    var word = wordList[Math.floor((Math.random() * wordList.length);
        
        
    
  updatePage: function (letter) {
   
    if (this.guessesLeft === 0) {
      this.restartGame();
    }
    else {
      this.updateGuesses(letter);
      this.updateMatchedLetters(letter);
      this.rebuildWordView();
      if (this.updateWins() === true) {
        this.restartGame();
      }
    }
updateGuesses: function(letter) {
    if (this.guessesLeft === 0) {
      this.restartGame();
    }
    else {
      this.updateGuesses(letter);
      this.updateMatchedLetters(letter);
      this.rebuildWordView();
      if (this.updateWins() === true) {
        this.restartGame();
      }
    }

   
}

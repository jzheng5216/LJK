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

function updateGuesses(guesses) {
    if (this.guessesLeft === 0) {
        this.restartGame();
    } else {
        this.updateGuesses(guesses);
        this.updateMatchedLetters(guesses);
        this.rebuildWordView();
        if (this.updateWins() === true) {
            this.restartGame();
        }
    }

}

function updatePage(letter) { //append letter to ___

    if (this.guessesLeft === 0) {
        this.restartGame();
    } else {
        this.updateGuesses(guesses);
        this.updateMatchedLetters(guesses);
        this.rebuildWordView();
        if (this.updateWins() === true) {
            this.restartGame();
        }
    }


}

function updateMatchedLetters(){
    console.log("hello, update me");
}


function gameOver() {
    if (answer.toString() == emptyArray.toString() && guesses <= 10) {
        wins++;
        $("#wins").text(wins);
        if (answe.toString() !== emptyArray.toString() && guess > 10) {
            loss++;
            $("#losses").text(losses);
        }


    }

}

    //type here
    $(document).ready(function () { // leave this checks if Javascript is ready

        document.onkeyup = function (event) { //captures keystroke(user entry)
            if (guesses >= 10) {
                return;//stops at 10
            }


            var letter = event.key;
            var word = wordList[Math.floor((Math.random() * wordList.length) + 1)];
            var answer = word.split(" ");




        }

















    });//end of game over






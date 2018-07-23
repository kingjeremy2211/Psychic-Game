//variables needed for game to work
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = []; 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//main game function
document.onkeyup = function(event) {
    //creates user guess array
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // var userGuess = event.key;
    //creates random letter (computer guess)
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
    //if else statement that will not allow any other user input that a letter
    if (computerChoices.indexOf(userGuess) === -1) {
        alert("That's not a letter SILLY!!");
        return;
    }
    //accumulates user guesses into an array
    guessesSoFar.push(userGuess);
    //subtracts 1 from the total guess count of 10
    guessesLeft--;


    //if else statement that shows user guessed correcty
    if (userGuess == computerGuess) {
        wins++;
        alert("WOW!  You've guessed corrrectly. You ARE psychic!");
        //resets user guess to play again
        guessesLeft = 10; 
        //removes all accumulated guesses from array
        guessesSoFar.length = 0; 
    }
    else if (guessesSoFar.length === 10) {
        losses++;
        alert("WRONG!  You're probably not psychic.  Try again");
        guessesLeft = 10;
        guessesSoFar.length = 0;
    }
    
    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Total Wins: " + 
    wins + 
    "</p>" +
    "<p>Total Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p>Your Guesses so far: " +
    guessesSoFar +
    "</p>"
    ;
    // This will allow text to be displayed on the page 
    document.querySelector("#game").innerHTML = html;
}

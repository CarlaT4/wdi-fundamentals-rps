////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
       return move || getInput();
}

function getComputerMove(move) {
    
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   return move || randomPlay();
   
}

var getWinner = function(playerMove, computerMove) {
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
    
      if (playerMove === computerMove){
       winner = 'tie';
    }   else if  (playerMove === 'scissors' && computerMove === 'paper'){
        winner = 'player';
    } else if(playerMove === 'scissors' && computerMove === 'rock'){
        winner = 'computer';
    } else if(playerMove === 'paper' && computerMove === 'scissors'){
        winner = 'computer';
    } else if(playerMove === 'paper' && computerMove === 'rock'){
        winner = 'player';
    } else if(playerMove === 'rock' && computerMove === 'paper'){
        winner = 'computer';
    } else {
        winner = 'player';
    }
  return playerMove || computerMove;
};


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


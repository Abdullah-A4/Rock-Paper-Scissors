let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    const choices = ['rock', 'paper', 'scissors'];
    let choicesIndex = Math.floor(Math.random() * choices.length); 
    return choices[choicesIndex];
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case 'rock':
                document.getElementById("result").innerHTML = "It's a tie!";
                return 0
            case 'paper':
                computerScore += 1;
                document.getElementById("result").innerHTML = "You lost!";
                score();
                return 'computer'
            case 'scissors':
                playerScore += 1;
                document.getElementById("result").innerHTML = "You won!";
                score();
                return 'player'
        }
    }
    else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case 'rock':
                playerScore += 1;
                document.getElementById("result").innerHTML = "You won!";
                score();
                return 'player'
            case 'paper':
                document.getElementById("result").innerHTML = "It's a tie!";
                return 0
            case 'scissors':
                computerScore += 1;
                document.getElementById("result").innerHTML = "You lost!";
                score();
                return 'computer'
        }
    }
    else if (playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'rock':
                computerScore += 1;
                document.getElementById("result").innerHTML = "You lost!";
                score();
                return 'computer'
            case 'paper':
                playerScore += 1;
                document.getElementById("result").innerHTML = "You won!";
                score();
                return 'player'
            case 'scissors':
                document.getElementById("result").innerHTML = "It's a tie!";
                return 0
        }
    }
}

function rock () {
    const computerSelection = computerPlay();
    let playerSelection;

    playerSelection = "rock"
    
    let result = (playRound(playerSelection,computerSelection))
}

function paper () {
    const computerSelection = computerPlay();
    let playerSelection;

    playerSelection = "paper"
    
    let result = (playRound(playerSelection,computerSelection))
}

function scissors () {
    const computerSelection = computerPlay();
    let playerSelection;

    playerSelection = "scissors"
    
    let result = (playRound(playerSelection,computerSelection))
}

function score() {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    if (playerScore === 5) {
        alert("You win!");
        location.reload();
    } else if (computerScore === 5) {
        alert("I win :)");
        location.reload();
    } 
}
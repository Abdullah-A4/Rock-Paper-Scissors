function computerPlay () {
    const choices = ['rock', 'paper', 'scissors'];
    let choicesIndex = Math.floor(Math.random() * choices.length); 
    return choices[choicesIndex];
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case 'rock':
                console.log('Tie')
                    return 0
            case 'paper':
                console.log('You lose!')
                    return 'computer'
            case 'scissors':
                console.log('You win!')
                    return 'player'
        }
    }
    else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case 'rock':
                console.log('You win!')
                    return 'player'
            case 'paper':
                console.log('Tie')
                    return 0
            case 'scissors':
                console.log('You lose!')
                    return 'computer'
        }
    }
    else if (playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'rock':
                console.log('You lose!')
                    return 'computer'
            case 'paper':
                console.log('You win!')
                    return 'player'
            case 'scissors':
                console.log('Tie')
                    return 0
        }
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        let playerSelection;

        do {
            playerSelection = prompt("Type rock, paper or scissors","rock").toLowerCase()
        } while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor')
        
        let result = (playRound(playerSelection,computerSelection))

        switch (result) {
            case 'player':
                playerScore++
                    break
            case 'computer':
                computerScore++
                        break
            default:
                        break
        }
    }

    if (playerScore > computerScore) {
        console.log(`Player wins! Computer loses! ${playerScore} - ${computerScore}`)
    } else if (computerScore > playerScore) {
        console.log(`Player loses! Computer wins! ${playerScore} - ${computerScore}`)
    } else {
        console.log(`It's a Tie! ${playerScore}-${computerScore}`)
    }
}

game();
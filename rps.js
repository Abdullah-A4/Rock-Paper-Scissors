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

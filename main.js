ar getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('not a valid choice');
    }
};

function getComputerChoice () {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1: 
            return 'scissors';
        case 2: 
            return 'paper';
    };
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!'
        } else {
            return 'You win!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }

    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    }
};

function playGame() {
    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice()
    console.log(`you threw ${userChoice}`);
    console.log(`computer threw ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();

game();

function game() {
    
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Please write either Rock, Paper, Or Scissors:").toLowerCase();
        let computerChoice = getComputerChoice();
    
        console.log(playerChoice);
        console.log(computerChoice);
    
        let result = playRound(playerChoice, computerChoice);
        console.log(result);

        if (result == "Player") playerScore++;
        else if (result == "Computer") computerScore++;
    }  

    if (playerScore > computerScore) console.log("Game Result: The player wins!");
    else if (playerScore < computerScore) console.log("Game Result: The Computer wins!");
    else console.log("Game Result: It's a tie...");
}

function playRound(playerChoice, computerChoice) {
    // decide who wins, or is it a tie, or the player didn't choose right
    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") return "Please write either Rock, Paper, Or Scissors"
    if (playerChoice == computerChoice) return "A tie"

    let winMessage = "Player"
    let loseMessage = "Computer"

    switch(playerChoice) {
        case "rock":
            if (computerChoice == "scissors") return winMessage;
            return loseMessage;
            break;
        case "paper":
            if (computerChoice == "rock") return winMessage;
            return loseMessage;
            break;
        case "scissors": 
            if (computerChoice == "paper") return winMessage;
            return loseMessage;
            break;
    }
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}
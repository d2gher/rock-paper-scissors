let winMessage = "You won this round!"
let loseMessage = "The AI won this round :\"("
let winningTheGame = "You won! And showed the AI its place! Play again?"
let losingTheGame = "The AI has won, and took over the world... Play again?"
let choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

let choiceButtons = document.querySelectorAll(".choiceButton");
let scoreBox = document.querySelector("#score");
let message = document.querySelector("#message")

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let roundResult = playRound(button.value ,getComputerChoice());
        updateScore(roundResult);

        if(playerScore == 5) {
            roundResult = winningTheGame
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            roundResult = losingTheGame
            playerScore = 0;
            computerScore = 0;
        }
        message.textContent = roundResult;
    })
})

function updateScore(result) {
    if (result == winMessage || result == loseMessage) {
        result == winMessage ? playerScore++: computerScore++;
        scoreBox.textContent = `You ${playerScore} - ${computerScore} The AI`
    }
}

function playRound(playerChoice, computerChoice) {
    // decide who wins, or is it a tie, or the player didn't choose right
    if (!choices.includes(playerChoice)) return "Please choose Rock, Paper, Or Scissors"
    if (playerChoice == computerChoice) return "A tie"

    switch(playerChoice) {
        case "rock":
            if (computerChoice == "scissors") return winMessage;
            return loseMessage;
        case "paper":
            if (computerChoice == "rock") return winMessage;
            return loseMessage;
        case "scissors": 
            if (computerChoice == "paper") return winMessage;
            return loseMessage;
    }
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}
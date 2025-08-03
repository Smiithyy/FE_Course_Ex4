//AI;s move
function computerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

//Players move
function playerChoice() {
    while(true) {
        const input = prompt("Choose rock, paper or scissors:");
        if(input === null) {
            alert("Game cancelled.");
            throw new Error("Player cancelled the game.");
        }

        const choice = input.toLowerCase();

        if(["rock", "paper", "scissors"].includes(choice)) {
            return choice;
        } else {
            alert("Invalid choose. Please choose rock, paper or scissors!");
        }
    }
}

//Compare player and AI moves to determine winner
function determinWinner(player, computer) {
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    } else if (player === computer) {
        return "draw";
    } else {
        return "computer";
    }
}

//Play a best of five game
function playBestOfFive() {
    console.log(
        "Hello! You must stop the bad AI 🚩.\n\n" +
        "The AI wants to win the game Rock, Paper, Scissors 🌑🖐️✂️ .\n" +
        "You need to play 5 times and try to win 5️⃣.\n\n" +
        "Each round, choose Rock, Paper, or Scissors 🌑🖐️✂️.\n" +
        "If you write something wrong, you must try again 🔄️.\n\n" +
        "Good luck! Have fun and use your brain! 🍀");
        
    let playerScore = 0;
    let computerScore = 0;

    for(let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}`);
        const player = playerChoice();
        const computer = computerChoice();

        console.log(`You chose: ${player}`);
        console.log(`AI chose ${computer}`);

        const winner = determinWinner(player, computer);

        if(winner === "player") {
            playerScore++;
            console.log(`Congrats, you won this round! ${player} beats ${computer}`);
        } else if (winner === "computer") {
            computerScore++
            console.log(`AI wins this round! ${computer} beats ${player}`);
        } else {
            console.log(`Its a draw! You both chose ${player}`);
        }

        console.log(`Score: You: ${playerScore} - ${computerScore} AI`);

        //Early victory check
        if(playerScore === 3 || computerScore === 3) {
            break;
        }
    }

    if(playerScore > computerScore) {
        console.log(`You won! Final score ${playerScore} to ${computerScore}`);
    } else if(computerScore > playerScore) {
        console.log(`AI won! Final score ${computerScore} to ${playerScore}`);
    } else {
        console.log(`It's a tie! Final score ${playerScore} to ${computerScore}`);
    }
}

//Ask player if they wanna playe again
function replay() {
    while (true) {
        const input = prompt("Play another match? (Yes/No)");
        if (input === null) {
            alert("Game cancelled.");
        }

        const choice = input.toLowerCase();
        if (["yes", "y"].includes(choice)) return true;
        if (["no", "n"].includes(choice)) return false;

        alert("Please enter yes or no");
    }
}

//Start the game
function startGame() {
    alert("Press Ctrl+Shift+I to open the console.");

    try {
        do {
            playBestOfFive();
        } while (replay());
    } catch (e) {
        console.log("Game ended: " + e.message);
    }

    console.log("Thanks for playing!");
}

document.addEventListener("DOMContentLoaded", function () {
    startGame();
});
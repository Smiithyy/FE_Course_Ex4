function computerPlay () {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win against the EVIL AI 🎉 ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return `It's a draw! 🤝 You both chose ${playerSelection}`;
    } else {
        return `Oh man... The AI won. BUT only for this time! 😑 ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    alert(
        "Hello! You must stop the bad AI 🚩.\n\n" +
        "The AI wants to win the game Rock, Paper, Scissors 🌑🖐️✂️ .\n" +
        "You need to play 5 times and try to win 5️⃣.\n\n" +
        "Each round, choose Rock, Paper, or Scissors 🌑🖐️✂️.\n" +
        "If you write something wrong, you must try again 🔄️.\n\n" +
        "Good luck! Have fun and use your brain! 🍀"
    );

    let playerScore = 0;
    let computerScore = 0;

        for (let i = 1; i <= 5; i++) {
            let choice = prompt("Write your choice between Rock, Paper and Scissors").toLowerCase();
            
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid input! Please write Rock, Paper or Scissors.").toLowerCase();
    }
    let computerChoice = computerPlay();
    let result = playRound(choice, computerChoice); 
    console.log(`Round ${i}: ${result}`);
    if (result.includes("win")) {
    playerScore++;
     } else if (result.includes("won")) {
    computerScore++;
}
console.log(`Score: Player ${playerScore} - AI ${computerScore}`);

}
if (playerScore > computerScore) {
    console.log(`You won! Final score ${playerScore} to ${computerScore}`);
} else if (computerScore > playerScore) {
    console.log(`AI won! Final score ${computerScore} to ${playerScore}`);
} else {
    console.log(`It's a tie! Final score ${playerScore} to ${computerScore}`);
}
}
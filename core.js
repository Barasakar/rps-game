const choices = ["rock", "paper", "scissor"];
let playerChoice;

function game() {
    if (playerChoice == "rock" && computerPlay() == "scissor") {
        alert ("player won. Player: rock Computer: scissor");
    } else if (playerChoice == "rock" && computerPlay() == "paper") {
        alert ("player lost. Player: rock Computer: paper")
    } else if (playerChoice == "scissor" && computerPlay() == "paper") {
        alert ("player wins. Player: scissor Computer: paper")
    } else if (playerChoice == "scissor" && computerPlay() == "rock") {
        alert ("player loses. Player: scissor Computer: rock")
    } else if (playerChoice == "paper" && computerPlay() == "rock") {
        alert ("player wins. Player: paper Computer: rock")
    } else if (playerChoice == "paper" && computerPlay() == "scissor") {
        alert ("player loses. Player: paper Computer: scissor")
    } else {
        alert ("same result");
    }
} 

function computerPlay() {
   let computerChoice = choices[Math.floor(Math.random() * choices.length)];
   return computerChoice;
}

function humanPlay(humanChoice) {
    playerChoice = humanChoice;
    
}

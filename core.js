const choices = ["rock", "paper", "scissor"];
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('input');
function game(playerChoice) {
    let computer_Choice = computerPlay();
    
    if (playerChoice == "rock" && computer_Choice == "scissor") {
        const currentComputerChoice = document.querySelector("#computerChoice").innerHTML = `Computer's Choice: ${computer_Choice}`;
        const currentPlayerChoice = document.querySelector("#humanChoice").innerHTML = `Your Choice: ${playerChoice}`;

        playerScore += 1;
        
        update(playerScore, computerScore);
    } else if (playerChoice == "rock" && computer_Choice == "paper") {
        const currentComputerChoice = document.querySelector("#computerChoice").innerHTML = `Computer's Choice: ${computer_Choice}`;
        const currentPlayerChoice = document.querySelector("#humanChoice").innerHTML = `Your Choice: ${playerChoice}`;
        computerScore += 1;
        update(playerScore, computerScore);
    } else if (playerChoice == "scissor" && computer_Choice == "paper") {
        const currentComputerChoice = document.querySelector("#computerChoice").innerHTML = `Computer's Choice: ${computer_Choice}`;
        const currentPlayerChoice = document.querySelector("#humanChoice").innerHTML = `Your Choice: ${playerChoice}`;
        playerScore += 1;
        update(playerScore, computerScore);
    } else if (playerChoice == "scissor" && computer_Choice == "rock") {
        const currentComputerChoice = document.querySelector("#computerChoice").innerHTML = `Computer's Choice: ${computer_Choice}`;
        const currentPlayerChoice = document.querySelector("#humanChoice").innerHTML = `Your Choice: ${playerChoice}`;
        computerScore += 1;
        update(playerScore, computerScore);
    } else if (playerChoice == "paper" && computer_Choice == "rock") {
        const currentComputerChoice = document.querySelector("#computerChoice").innerHTML = `Computer's Choice: ${computer_Choice}`;
        const currentPlayerChoice = document.querySelector("#humanChoice").innerHTML = `Your Choice: ${playerChoice}`;
        playerScore += 1;
        
        update(playerScore, computerScore);
    } else if (playerChoice == "paper" && computer_Choice == "scissor") {
        const currentComputerChoice = document.querySelector("#computerChoice").innerHTML = `Computer's Choice: ${computer_Choice}`;
        const currentPlayerChoice = document.querySelector("#humanChoice").innerHTML = `Your Choice: ${playerChoice}`;
        computerScore += 1 ;
        update(playerScore, computerScore);
    } else {
        const currentComputerChoice = document.querySelector("#computerChoice").innerHTML = `Computer's Choice: ${computer_Choice}`;
        const currentPlayerChoice = document.querySelector("#humanChoice").innerHTML = `Your Choice: ${playerChoice}`;
        update(playerScore, computerScore);
    }
} 

function update(playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            document.getElementById('result').innerHTML = "You win!";
        } else if (playerScore < computerScore) {
            document.getElementById('result').innerHTML = "Computer wins!";
        } else {
            document.getElementById('result').innerHTML = "Draw!";
        }
    }
    const player_Score = document.querySelector("#yourScore").innerHTML = `Your Score: ${playerScore}`;
    const computer_Score = document.querySelector("#computerScore").innerHTML = `Computer's Score: ${computerScore}`;
}

function computerPlay() {
    return String(choices[Math.floor(Math.random() * choices.length)]);
}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        game(button.value)
    })
})

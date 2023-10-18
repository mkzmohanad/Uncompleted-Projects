"use strict";
const computerChoice = [
    {
        name : "rock",
        img:"/pics/rock.png",
    },
    {
        name : "paper",
        img:"/pics/paper.png",
    },
    {
        name : "scissor",
        img:"/pics/scissor.png",
    },
]
const computer = document.querySelector(".computerMoves");
const restartBtn = document.querySelector(".restartBtn");
const player = document.querySelectorAll(".playerMove");
const playerMoves = document.querySelector(".playerMoves");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const winBackGround = document.querySelector(".win");
const whoWins = document.querySelector(".winnerText");
let randomComputerChoice;
let playerChoice;

player.forEach(function(item){
    item.addEventListener("click", function(){
    randomComputerChoice = Math.floor(Math.random()*3);
    computer.src = computerChoice[randomComputerChoice].img;
    computer.classList.remove("hidden");
        playerChoice = item.id;
        // console.log(playerChoice);
        playerMoves.src = `/pics/${playerChoice}.png`;
        playerMoves.classList.remove("hidden");
        score(playerChoice , computerChoice[randomComputerChoice].name)
        checkForWinner(playerScore,computerScore)
    })
})

restartBtn.addEventListener("click", function(){
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    computer.classList.add("hidden");
    playerMoves.classList.add("hidden");
})

winBackGround.addEventListener("click", function(){
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    computer.classList.add("hidden");
    playerMoves.classList.add("hidden");
    winBackGround.classList.add("hidden");
})

function score(player,computer){
    if (player === "rock" && computer === "paper" || player === "scissor" && computer === "rock" || player === "paper" && computer === "scissor"){
        computerScore.textContent ++;
    }
    else if (player === "scissor" && computer === "paper" || player === "rock" && computer === "scissor" || player === "paper" && computer === "rock"){  
        playerScore.textContent ++; 
    }
}
function checkForWinner(playerScore,computerScore){
    // console.log(playerScore)
    if (playerScore.textContent == 3) {
        winBackGround.classList.remove("hidden");
        whoWins.textContent = "you won";
    }
    else if(computerScore.textContent == 3) {
        winBackGround.classList.remove("hidden");
        whoWins.textContent = "you lost";
    }
}
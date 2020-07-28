const playerSelection = "rock";
const computerSelection = computerPlay();

let player = "";
let comp = "";
let winner = "";

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const win = document.querySelector('.winner')
const score = document.querySelector('.score')
const reset = document.querySelector('.reset')

const humanHand = document.querySelector("#humanHand")
const computerHand = document.querySelector("#computerHand")

let scorePlayer = 0
let scoreComputer = 0
let roundsPlayed = 0

function computerPlay(){
    let a = Math.floor(Math.random() * Math.floor(3))
    if (a == 0){
        return "rock"
    } else if (a == 1) {
        return "paper"
    } else if (a == 2) {
        return "scissors"
    }
}

function playRound(player, comp) {
   player = player.toLowerCase();
  
  switch(true) {
      case (player == "scissors" && comp == "paper"):
      case (player == "paper" && comp == "rock"):
      case (player == "rock" && comp == "scissors"):
          winner = "Player wins!";
          break;
      case (player == "rock" && comp == "paper"):
      case (player == "scissors" && comp == "rock"):
      case (player == "paper" && comp == "scissors"):
          winner = "Computer wins!";
          break;
      case (player == comp):
          winner = "Draw"; 
          break;
      default:
          winner = "Something went wrong"
  }
  return win.textContent = "player: " + player + " computer: " + comp + " " + winner  
}



  function checkScore(win) {
        if(win == "Player wins!"){
            scorePlayer += 1
            score.textContent = "score || player: " + scorePlayer + " computer: " + scoreComputer
        } else if (win == "Computer wins!") {
            scoreComputer += 1
            score.textContent = "score || player: " + scorePlayer + " computer: " + scoreComputer
        } else if (win == "Draw") {
            score.textContent = "score || player: " + scorePlayer + " computer: " + scoreComputer
        }
    roundsPlayed += 1
    console.log(roundsPlayed)
  }

  function showResults(player, comp){
      switch(true) {
          case(player == "rock"):
          humanHand.src = "assets/rock.png"
      }

  }


function resetGame() {
      if(roundsPlayed == 5){
          if (scorePlayer > scoreComputer){
              reset.textContent = "You Win!"
          } else if (scorePlayer < scorePlayer) {
              reset.textContent = "You Lose!"
          }
      }
      winner = ""
      scorePlayer = 0
      scoreComputer = 0
  }

  rock.addEventListener('click', () => {
    playRound('rock', computerPlay())
    checkScore(winner)
    showResults()
    resetGame()
})
paper.addEventListener('click', () => {
    playRound('paper', computerPlay())
    checkScore(winner)
})
scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay())
    checkScore(winner)
})

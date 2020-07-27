const playerSelection = "rock";
const computerSelection = computerPlay();
let winner = "";

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const win = document.querySelector('.winner')
const score = document.querySelector('.score')


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

function playRound(a, b) {
  let player = a.toLowerCase();
  let comp = b;
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

rock.addEventListener('click', () => {
    playRound('rock', computerSelection)
    checkScore(winner)    
})
paper.addEventListener('click', () => {
    playRound('paper', computerSelection)
})
scissors.addEventListener('click', () => {
    playRound('scissors', computerSelection)
})


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
  }

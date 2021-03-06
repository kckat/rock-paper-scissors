//declare global variables

let playerChoice = "";
let compChoice = "";
let winner = "";

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const win = document.querySelector('.winner')
const score = document.querySelector('.score')
const reset = document.querySelector('.reset')

const humanContainer = document.querySelector('#human')
const computerContainer = document.querySelector('#computer')

const humanHand = document.querySelector("#humanHand")
const computerHand = document.querySelector("#computerHand")

let scorePlayer = 0
let scoreComputer = 0
let roundsPlayed = 0

// create reset button
const resetButton = document.createElement('button');
resetButton.textContent = "Play Again"
resetButton.style.margin = "5px"
resetButton.style.border = 'none'
resetButton.style.padding = '8px'
resetButton.style.borderRadius = '5px'

// Computer chooses rock paper scissors randomly
function computerPlay(){
    let a = Math.floor(Math.random() * Math.floor(3))
    if (a == 0){
        computerHand.setAttribute('src','assets/rock.png')
        return "rock"
    } else if (a == 1) {
        computerHand.setAttribute('src','assets/paper.png')
        return "paper"
    } else if (a == 2) {
        computerHand.setAttribute('src','assets/scissors.png')
        return "scissors"
    }
}

// Play one round of rock paper scissors. Stores answers in global variable to use in other functions.
function playRound(player, comp) {
   player = player.toLowerCase();
  
  switch(true) {
    case (player == "scissors" && comp == "paper"):
    case (player == "paper" && comp == "rock"):
    case (player == "rock" && comp == "scissors"):
        winner = "Player wins!";
        humanContainer.style.backgroundColor = '#ccffdf'
        computerContainer.style.backgroundColor = '#ffccd6'
            break;
    case (comp == "scissors" && player == "paper"):
    case (comp == "paper" && player == "rock"):
    case (comp == "rock" && player == "scissors"):
        winner = "Computer wins!";
        computerContainer.style.backgroundColor = '#ccffdf'
        humanContainer.style.backgroundColor = '#ffccd6'
          
          break;
    case (player == comp):
          winner = "Draw"; 
          computerContainer.style.backgroundColor = '#fff8cc'
          humanContainer.style.backgroundColor = '#fff8cc'
          break;
    default:
          winner = "Something went wrong"
  }
  
    playerChoice = player
    compChoice = comp
    console.log("comp: " + compChoice)
    console.log("player: "+ playerChoice)
    return win.textContent = winner  
}

//  Return current score of game

  function checkScore(win) {
        if(win == "Player wins!"){
            scorePlayer += 1
            score.textContent = "Player: " + scorePlayer + " Computer: " + scoreComputer
        } else if (win == "Computer wins!") {
            scoreComputer += 1
            score.textContent = "Player: " + scorePlayer + " Computer: " + scoreComputer
        } else if (win == "Draw") {
            score.textContent = "Player: " + scorePlayer + " Computer: " + scoreComputer
        }
    roundsPlayed += 1
    console.log(roundsPlayed)
  }

function resetVariables(playerChoice, compChoice){
    playerChoice = "";
    compChoice = "";
}


//   Declare a winner and  give option to reset the game

function declareWinner(roundsPlayed) {
      if(roundsPlayed == 5){
          if (scorePlayer > scoreComputer){
              reset.textContent = "You Win!"
          } else if (scorePlayer < scoreComputer) {
              reset.textContent = "You Lose!"
          } else if (scorePlayer == scoreComputer) {
            reset.textContent = "It's a Draw"
          }
          rock.disabled = true; //stop buttons from working so game can reset
          paper.disabled = true;
          scissors.disabled = true; 

          reset.style.fontWeight = '600'
          reset.style.margin = '5px'
          reset.appendChild(resetButton)
      }
  }

function resetGame(){
    winner = ""
    scorePlayer = 0
    scoreComputer = 0
    roundsPlayed = 0
    rock.disabled = false; 
    paper.disabled = false;
    scissors.disabled = false; 
    humanHand.setAttribute('src', 'assets/Empty.png')
    computerHand.setAttribute('src', 'assets/Empty.png')
    computerContainer.style.backgroundColor = '#fff'
    humanContainer.style.backgroundColor = '#fff'
    win.textContent = ""
    score.textContent = ""
    reset.textContent = ""
    reset.removeChild(resetButton)
    resetVariables()

}



// Clicking on the buttons activates game
    rock.addEventListener('click', () => {
        humanHand.setAttribute('src','assets/rock.png')
        playRound('rock', computerPlay())
        checkScore(winner)
        declareWinner(roundsPlayed)
  

    })
    paper.addEventListener('click', () => {
        humanHand.setAttribute('src','assets/paper.png')
        playRound('paper', computerPlay())
        checkScore(winner)
        declareWinner(roundsPlayed)
        resetVariables()
    })
    scissors.addEventListener('click', () => {
        humanHand.setAttribute('src','assets/scissors.png')
        playRound('scissors', computerPlay())
        checkScore(winner)
        declareWinner(roundsPlayed)
        resetVariables()
    })

    resetButton.addEventListener('click', () => {
       resetGame()
    })

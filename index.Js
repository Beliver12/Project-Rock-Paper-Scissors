

function playRound(playerSelection,computerSelection){
  if(playerSelection === 'rock' && computerSelection === 'scissors'
  || playerSelection === 'paper' && computerSelection === 'rock'
  || playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        return win;

  }else if(playerSelection === 'scissors' && computerSelection === 'rock'
  || playerSelection === 'rock' && computerSelection === 'paper'
  || playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        return lose; 

  }else if(playerSelection === computerSelection){
        tieScore++;
        return tie;
  }else{
        return "NaN";
  }
}
 playerSelection = prompt("Choose your sign.");
console.log("Player selected:--- " +playerSelection.toLowerCase());

let computerChoice = ["rock", "paper", "scissors"];
let computerSelection = computerChoice[Math.floor(Math.random()*computerChoice.length)];
console.log("Computer selected:--- " +computerSelection);

        
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const win = "Player wins this round-------";
const lose = "Computer wins this round------";
const tie = "This round is tie-----";

console.log(playRound(playerSelection,computerSelection));

function playGame(){
  

  for(let i =0; i<4; i++){

    playerSelection = prompt("Choose your sign.");
    console.log("Player selected:--- " +playerSelection.toLowerCase());
    
     computerChoice = ["rock", "paper", "scissors"];
     computerSelection = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log("Computer selected:--- " +computerSelection);
  
    console.log(playRound(playerSelection,computerSelection));
}
        if(playerScore>computerScore){
          return "Player wins the game.-----";
        }if(playerScore === computerScore){
          return "No one wins the game its a tie.-----";
        }else{
          return "Computer wins the game.-----";
        }
  }

console.log(playGame());
console.log("Final score is---"+playerScore+"---wins---"+computerScore+"---loses---"+tieScore+"---draws.<----->");
score =playerScore+computerScore+tieScore;
console.log("You reached---"+score+"---rounds---Game Over!!!")
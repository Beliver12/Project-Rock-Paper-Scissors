buttons = document.querySelectorAll('button');
const btnR = document.querySelector('#rock');
const btnP = document.querySelector('#paper');
const btnS = document.querySelector('#scissors');
const para1 = document.querySelector('#comp');
const para2 = document.querySelector('#plyr');
const result = document.querySelector('#result');
const Pscore = document.querySelector('#Pscore');
const Cscore = document.querySelector('#Cscore');
const Tscore = document.querySelector('#Tscore');
const Fscore = document.querySelector('#Fscore')
const container = document.querySelector('#container')

// Round scores---
 let playerScore = 0;
 let computerScore = 0;
 
 
// Round wins ----
 let roundScorep = 0;
 let roundScorec = 0;
 
 // Round wins , lose or tie alerts.
 const win = "WIN!";
 const lose = "LOSE!";
 const tie = "TIE!"

// add eventlistener to each button.
buttons.forEach(button => button.addEventListener('click', (e)=>{
 
// for each button clicked let player selection be that button targeted id.
const playerSelection =  e.currentTarget.id;
para1.textContent = 'Player: ' + playerSelection;

// get computer to throw random choices.
let computerChoice = ["rock", "paper", "scissors"];
const computerSelection = computerChoice[Math.floor(Math.random()*computerChoice.length)]
para2.textContent ="Computer: " + computerSelection;

playRound(playerSelection,computerSelection) 
}))

// function that decides who won by conditions.
function playRound(playerSelection, computerSelection){

    // Player win conditions.
if(playerSelection === 'rock' && computerSelection === 'scissors'
  || playerSelection === 'paper' && computerSelection === 'rock'
  || playerSelection === 'scissors' && computerSelection === 'paper'){
    result.textContent = win;
    playerScore++;
    Pscore.textContent = "Player score: "+ playerScore;
  }
  // computer win conditions.
  else if(playerSelection === 'scissors' && computerSelection=== 'rock'
  || playerSelection === 'rock' && computerSelection === 'paper'
  || playerSelection === 'paper' && computerSelection === 'scissors'){
    result.textContent = lose;
    computerScore++;
    Cscore.textContent = "Computer score: "+computerScore;  
  }else{
    result.textContent = tie;
  }

  // when someone reaches 5 points declare winner
for(let i = 0; i <= 5; i++){
    //Player winning by 5 points conditions.
if(playerScore == 5){
roundScorep++
computerScore = 0;
Fscore.textContent = "Player: "+ roundScorep + " -- "+ roundScorec;
playerScore = 0;
// Computer wining by 5 points conditions.
}else if(computerScore == 5){
roundScorec++
playerScore = 0;
Fscore.textContent = "Computer: "+ roundScorec + " -- " + roundScorep;
computerScore = 0;
}
}}//I want this loop to reset scores when one reaches 5 points and give roundScore a point for every won round, i plan to make play again button pop up , will have to learn how to make button reset everything.
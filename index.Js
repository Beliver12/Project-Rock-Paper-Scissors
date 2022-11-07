
          
            
      function playRound(playerSelection, computerSelection){
        if(playerSelection.toLowerCase() ==='rock' && computerSelection === 'scissors' ||
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' || 
        playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
            playerScore++;
            return win;

        }
        else if(playerSelection.toLowerCase()=== 'rock' && computerSelection=== 'paper' ||
        playerSelection.toLowerCase() === 'scissors' && computerSelection  === 'rock' ||
        playerSelection.toLowerCase() === 'paper' && computerSelection  === 'scissors'){
            computerScore++;
            return lose; 

        }
        else if(playerSelection.toLowerCase() === computerSelection){
            tieScore++;
            return tie;
        }
        else{
            return "Please enter a sign a again.";
        }
      }
      let playerSelection = prompt("Enter = rock paper or scissors.");
      console.log("You choose " +playerSelection.toLowerCase());

      let computerChoice = ['rock', 'paper', 'scissors'];
   let computerSelection = computerChoice[Math.floor(Math.random()* computerChoice.length)];
   console.log("Computer choose " +computerSelection);

      let playerScore = 0;
      let computerScore = 0;                     
      let tieScore = 0;
      
      const win = "You won this round!";
      const lose = "You lost this round!";
      const tie = "You both picked same sign, It's a tie this round.";

      

      console.log(playRound(playerSelection, computerSelection));
      function game(){
      
        for (let i = 0; i<4; i++){

             playerSelection = prompt("Enter = rock, paper or scissors");
            console.log("You choose " +playerSelection.toLowerCase());

            let computerChoice = ['rock', 'paper', 'scissors'];
            let computerSelection = computerChoice[Math.floor(Math.random()* computerChoice.length)];
            console.log("Computer choose " +computerSelection);
     
      console.log(playRound(playerSelection, computerSelection));
      
        }
        
          if(playerScore > computerScore){
            return "You win this game.";
          }if(playerScore === computerScore){
            return "This game is a tie.";
          }else{
            return "You lose this game.";
          }
      }

   console.log(game());
   console.log("Final score is " +playerScore+ " Wins " +computerScore+ " Loses " +tieScore+ " Draws.");
   score = playerScore+computerScore+tieScore;
   
   console.log("You reached "+score+ " rounds. GAME OVER!");   
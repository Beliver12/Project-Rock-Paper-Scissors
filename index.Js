
          
            
      function playRound(playerSelection, computerSelection){
        if(playerSelection.toLowerCase() ==='rock' && computerSelection === 'scissors' ||   /*<-----I need to come back and make playRound more concise, to make playerSelection toLowerCase once. */ 
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ||           
        playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){    /*<-----This block of code is telling broswer when player selection is stronger than computer selection  */
            playerScore++;                                                                                                                                               
            return win;                                                                    /*<-----This is where if player selection wins round, it gets 1 point and returns message that player won this round */

        }
        else if(playerSelection.toLowerCase()=== 'rock' && computerSelection=== 'paper' || /*<-----This block of code is telling broswer when computer selection is stronger than player selection  */
        playerSelection.toLowerCase() === 'scissors' && computerSelection  === 'rock' ||    
        playerSelection.toLowerCase() === 'paper' && computerSelection  === 'scissors'){   
            computerScore++;                                                               /*<-----This is where if computer selection wins round, it gets 1 point and returns message that computer won this round */
            return lose; 

        }
        else if(playerSelection.toLowerCase() === computerSelection){                    /*<-----This block of code is telling broswer when computer selection is same as player selection, and it gives 1 point to tiescore, returns message that its a tie this round */
            tieScore++;
            return tie;
        }
        else{
            return "Please enter a sign a again.";                         /*<-----This is if user inputs invalid sign */
        }
      }
      let playerSelection = prompt("Enter = rock paper or scissors.");       /*<----Here we let player selection to prompt message , where we enter sign. */
      console.log("You choose " +playerSelection.toLowerCase());             /*<----after user enters random sign, console displays message user/player choose this sign... */

      let computerChoice = ['rock', 'paper', 'scissors'];
   let computerSelection = computerChoice[Math.floor(Math.random()* computerChoice.length)];/*<----This block of code chooses random string from array, */
   console.log("Computer choose " +computerSelection);                                     /*<-----This block of code displays in console wich random string/sign computer choose. */

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
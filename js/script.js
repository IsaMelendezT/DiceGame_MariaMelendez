document.addEventListener("DOMContentLoaded", function() {
    const rollButton = document.getElementById("RollBtn");
    const player1Score = document.getElementById("P1Score");
    const player2Score = document.getElementById("P2Score");
    const winnerElement = document.getElementById("Winner");
    let cumP1Score = 0;
    let cumP2Score = 0;
  
    rollButton.addEventListener("click", function() {
      // Generate random numbers from 1 to 6 for both players
      const player1Result = Math.floor(Math.random() * 6) + 1;
      const player2Result = Math.floor(Math.random() * 6) + 1;
  
      // Update the images with the respective dice results
      document.getElementById("Dice1").getElementsByTagName("img")[0].src = `./media/img/dice${player1Result}.png`;
      document.getElementById("Dice2").getElementsByTagName("img")[0].src = `./media/img/dice${player2Result}.png`;
  
      // Update Cummulative Scores 
      cumP1Score += player1Result;
      cumP2Score += player2Result;

      // Update the scores
      player1Score.textContent = `Player 1 Score: ${cumP1Score}`;
      player2Score.textContent = `Player 2 Score: ${cumP2Score}`;

      // Determine if there is a winner
      let winner;
      if(cumP1Score>=30 || cumP2Score>=30){
        if(cumP1Score>cumP2Score){
            winner = "Player 1 is the Winner!! Congratulations!!";
            cumP1Score = 0;
            cumP2Score = 0;
        } else if (cumP1Score===cumP2Score)
        {
            winner = "It is a tie!!";
            cumP1Score = 0;
            cumP2Score = 0;
        } 
        else {
            winner = "Player 2 is the Winner!! Congratulations!!";
            cumP1Score = 0;
            cumP2Score = 0;
        }
      }
      else {
            winner = "There is no Winner yet, Roll Dice Again!!";
      }

      winnerElement.textContent = winner;
    });

  });
  
const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};


//Play Game
function play(e){
    restart.style.display='inline-block'
    const playerChoice = e.target.id
    const computerChoice = getComputerChoice()
    // console.log(playerChoice,computerChoice)
   let winner = getWinner(playerChoice,computerChoice)
   showWinner(winner, computerChoice);
}

//Get Computer Choice
function getComputerChoice(){
    const randomNumber = Math.random();
    if(randomNumber<0.23)
    return "rock";
    else if(randomNumber>=0.89)
    return "paper";
    else
    return "scissors"
}



// Get game winner
function getWinner(p, c) {
    console.log(p,c)
    if (p === c) {
      return 'draw';
    } else if (p === 'rock') {
      if (c === 'paper') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'paper') {
      if (c === 'scissors') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'scissors') {
      if (c === 'rock') {
        return 'computer';
      } else {
        return 'player';
      }
    }
  }

  function showWinner(winner, computerChoice) {
    if (winner === 'player') {
      // Inc player score
      scoreboard.player++;
      // Show modal result
      result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        
      `;
    } else if (winner === 'computer') {
      // Inc computer score
      scoreboard.computer++;
      // Show modal result
      result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        
      `;
    } else {
      result.innerHTML = `
        <h1>It's A Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        
      `;
    }
    // Show score
    score.innerHTML = `
      <p>Player: ${scoreboard.player}</p>
      <p>Computer: ${scoreboard.computer}</p>
      `;
  
    modal.style.display = 'block';
  }
// Restart game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
      <p>Player: 0</p>
      <p>Computer: 0</p>
    `;
  }

  
// Clear modal
function clearModal(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }

//Event Listener
choices.forEach(choice => choice.addEventListener('click',play))
window.addEventListener('click',clearModal)
restart.addEventListener('click', restartGame);
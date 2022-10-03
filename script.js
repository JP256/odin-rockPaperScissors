let playerPoints = 0;
let computerPoints = 0;

let player = null;
let computer = null;
let userRadBtns = document.querySelectorAll("input[name='selectGame']");

userRadBtns.forEach((rad) => {
  rad.addEventListener("change", findSelected);
});

function findSelected() {
  let r = document.querySelector("input[name='selectGame']:checked");
  player = r;
  document.querySelector(".p1Img").style.display = "block";
  if (player.value === "rock") {
    document.querySelector(".p1Img").src = "imgs/rock.png";
  } else if (player.value === "paper") {
    document.querySelector(".p1Img").src = "imgs/paper.png";
  } else {
    document.querySelector(".p1Img").src = "imgs/scissors.png";
  }
}

//Computer
function computerGame() {
  let photos = ["paper", "scissors", "rock"];
  computer = photos[Math.floor(Math.random() * 3)];
  document.querySelector(".p2Img").style.display = "block";
  if (computer === "rock") {
    document.querySelector(".p2Img").src = "imgs/rock.png";
  } else if (computer === "paper") {
    document.querySelector(".p2Img").src = "imgs/paper.png";
  } else {
    document.querySelector(".p2Img").src = "imgs/scissors.png";
  }
}

// Play
document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  if (player.value === null) {
    document.querySelector("button").disabled = true;
  } else {
    computerGame();
    if (player.value === "rock" && computer === "paper") {
      document.querySelector(".comments h1").textContent = "Computer Wins.";
      computerPoints += 1;
      document.querySelector(".player2 h2").textContent =
        "WINS: " + computerPoints.toString();
    } else if (player.value === "rock" && computer === "scissors") {
      document.querySelector(".comments h1").textContent = "Player Wins.";
      playerPoints += 1;
      document.querySelector(".player1 h2").textContent =
        "WINS: " + playerPoints.toString();
    } else if (player.value === "paper" && computer === "scissors") {
      document.querySelector(".comments h1").textContent = "Computer Wins.";
      computerPoints += 1;
      document.querySelector(".player2 h2").textContent =
        "WINS: " + computerPoints.toString();
    } else if (player.value === "paper" && computer === "rock") {
      document.querySelector(".comments h1").textContent = "Player Wins.";
      playerPoints += 1;
      document.querySelector(".player1 h2").textContent =
        "WINS: " + playerPoints.toString();
    } else if (player.value === "scissors" && computer === "rock") {
      document.querySelector(".comments h1").textContent = "Computer Wins.";
      computerPoints += 1;
      document.querySelector(".player2 h2").textContent =
        "WINS: " + computerPoints.toString();
    } else if (player.value === "scissors" && computer === "paper") {
      document.querySelector(".comments h1").textContent = "Player Wins.";
      playerPoints += 1;
      document.querySelector(".player1 h2").textContent =
        "WINS: " + playerPoints.toString();
    } else {
      document.querySelector(".comments h1").textContent = "Draw";
    }
    if (playerPoints === 5 || computerPoints === 5) {
      if (computerPoints === 5) {
        document.querySelector(".winner").textContent =
          "THE WINNER IS THE COMPUTER";
      }
      if (playerPoints === 5) {
        document.querySelector(".winner").textContent =
          "THE WINNER IS THE PLAYER";
      }
      document.querySelector("button").disabled = true;
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }
});
// function resetGame() {
//
//   playerPoints = 0;
//   computerPoints = 0;
//   document.querySelector(".comments h1").textContent = "...";
//   document.querySelector(".player1 h2").textContent = "WINS: 0";
//   document.querySelector(".player2 h2").textContent = "WINS: 0";
// }

let userscore = 0;
let computerscore = 0;

//Generate a new random number:
$(".play").click(function() {
  let userInput = $(".input").val();
  $(".userChoice").text(`${userInput}`);

let randomChoice = getrandomChoice();
  
  let computerChoice;

  if (randomChoice === 1) {
    computerChoice = "rock";
  } else if (randomChoice === 2) {
    computerChoice = "paper";
  } else if (randomChoice === 3) {
    computerChoice = "scissors";
  }
  $(".computerChoice").text(`${computerChoice}`);

  let winner;
  let computerwinswithrock = computerChoice === "rock" && userInput !== "paper";
  let computerwinswithpaper =
    computerChoice === "paper" && userInput !== "scissors";
  let computerwinswithscissors =
    computerChoice === "scissors" && userInput !== "rock";

  if (computerChoice === userInput) {
    winner = "tie";
  } else if (
    computerwinswithrock ||
    computerwinswithpaper ||
    computerwinswithscissors
  ) {
    winner = "Computer wins";
    computerscore = computerscore +1;
  } else {
    winner = "User Wins";
    userscore = userscore +1;
  }

  $(".result").text(winner);
  $(".computerScore").text(`${computerscore}`);
  $(".userScore").text(`${userscore}`); 
});

function getrandomChoice () {
  let randomChoice;
  randomChoice = Math.random() * 3;
  randomChoice = Math.ceil(randomChoice);
  return randomChoice;
}
/**
 * @param {string} input
 */
getUserChoice = input => {
    let inputLower = input.toLowerCase();
    if(inputLower === "rock"){
      return "rock";
    }else if(inputLower === "paper"){
      return "paper";
    }
    else if(inputLower === "scissors"){
      return "scissors";
    }
    return inputLower;
}

let userChoice = getUserChoice("PAPER");
                                                                   // END OF USER CHOICE
getComputerChoice = () => {
let randomNumber = Math.round(Math.random() * 2);
if(randomNumber === 0){
  return "rock";
}
else if(randomNumber === 1){
  return "paper";
}
else if(randomNumber ===2){
  return "scissors";
}
}

let computerChoice = getComputerChoice();
                                                                    // END OF COMPUTER CHOICE
determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return "Game is a tie!";
    }
    else if(userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper"){
      return "User Won."
    }else if(computerChoice === "rock" && userChoice === "scissors" || computerChoice === "paper" && userChoice === "rock" || computerChoice === "scissors" && userChoice === "paper"){
      return "Computer Won."
    }
}

playGame = input => {
let userChoice = getUserChoice(input);
let computerChoice = getComputerChoice();
console.log(`User threw ${userChoice}`);
console.log(`Computer threw ${computerChoice}`);
console.log(determineWinner());
}

playGame("rock");
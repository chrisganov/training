// /**
//  * @param {string} input - you don't need this
//  */

  //TODO:  if you want to make sure that it's a string, you can add a conditional like this:
  // if (typeof inpyt === 'string') ... 

getUserChoice = input => { // Where is your declaration ? 
  //TODO:  what if I add "kan[FOKASNDFOASF" - what will it return? Note: In the task you must indicate what are the user's choices in order to play, not what he has entered 
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

// let userChoice = getUserChoice("PAPER"); Why do you need this ?

// END OF USER CHOICE - hint

getComputerChoice = () => {
  // fix your indent  
let randomNumber = Math.round(Math.random() * 2); // You were right about this one
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

// let computerChoice = getComputerChoice(); Why do you need this?
// END OF COMPUTER CHOICE
determineWinner = (userChoice, computerChoice) => { // Where is your declaration?
    if(userChoice === computerChoice){
      return "Game is a tie!";
    }
    else if(userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper"){
      return "User Won."
    }else if(computerChoice === "rock" && userChoice === "scissors" || computerChoice === "paper" && userChoice === "rock" || computerChoice === "scissors" && userChoice === "paper"){
      return "Computer Won."
    }
}

playGame = input => { // Where is your declaration?
  // fix your indent
let userChoice = getUserChoice(input); // Why let? Do you reassign the variable somewhere?
let computerChoice = getComputerChoice(); // Same question as above
console.log(`User threw ${userChoice}`);
console.log(`Computer threw ${computerChoice}`);
console.log(determineWinner()); //TODO:  you are missing something here - look at your function
}

playGame("rock");
// Only minor problems, overall good work 

getUserChoice = input => { //TODO where is your declaration for the function?
  input = input.toLowerCase();
  if (input === 'rock' || input==='paper' || input ==='scissors') {
    return input;
  } else {
    console.log('not a valid choice'); //TODO:  'not a valid choice' does not help the user to know what are his options
  }
};

getComputerChoice = () => {
  switch(Math.floor(Math.random()*3)) {
    case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return 'paper';
  	};
}

determineWinner = (userChoice, computerChoice) => { // TODO:  where is your declaration for the function?
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'User win!';
    }
  } else if (userChoice === 'paper'){
    if (compterChoice === 'scissors') {
      return 'Computer wins!';
    }else {
      return 'User win!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'User win!';
    }
  } else if (userChoice === 'bomb') {
    return 'User win!';
  }
};

playGame = input => { // TODO:  where is your declaration for the function?
  let userChoice = getUserChoice(input);
  let computerChoice = getComputerChoice()
  console.log(`User threw ${userChoice}`);
  console.log(`Computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
};
playGame("rock");

/*
Task1:

You need to create 4 functions (all arrow functions) with the folliwing logic:

1. getUserChoice which takes one argument. The argument will be expected to be a string.
Make sure that firs you transform that argument to lower case, so there are no issues or erros.
Create a conditional statement inside the functions that checks what is the arguement using the following logic:
if the argument is 'rock', 'paper' or 'scissors' return the argument
if none of the above conditions are met, return a string stating what is the user's choices.

2. getComputerChoice which takes no arguments.
Inside it, you should generate a random number between 0 and 2.
Create a conditional statement which takes the number as argument and write the following logic:
0 - return 'rock'
1 - return 'paper'
2 - return 'scissors'

3. determineWinner which takes two arguments - the user's choice and the computer's choice.
Inside it, write the following conditional logic:

if the computer choice is the same as the user's choice, return 'Game is a tie!'.

Then add some additional logic based on the game "rock, paper, scissors" returning the folloing strings
if if the compute won return "Computer Won."
if the user won return "User Won."

No steps will be provided for the above conditionals since the game is known by everyone -> try to write it by yourselves

4. playGame which takes one argument, which will be the input from the user.
Create a variable which will indicate the users choice by calling the getUserChoice function and provide it with the argument of this function
Create a variable which will indicate the compute's choice by calling the getComputerChoice functinons
Log in the console the following strings:

"User threw: {the use variable}"
"Computer threw: {the computer variable}"
"{Who won based on the determineWinner function} "

5. Call the playGame function with a string -> test your function a couple of times to check if it works as expected
*/
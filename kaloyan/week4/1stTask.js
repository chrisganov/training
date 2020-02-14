const getUserChoice = (userChoice) => {
  const userChoiceToLower = userChoice.toLowerCase();

  if (userChoiceToLower === 'rock' || userChoiceToLower === 'paper' || userChoiceToLower === 'scissors') {
    return userChoiceToLower;
  }


  console.log(`The user choice is ${userChoiceToLower}`);
  return userChoiceToLower;
};

const getComputerChoice = () => {
  const randomNumber = Math.round(Math.random() * 2);

  switch (randomNumber) {
    case 0:
      return 'rock';
      break;

    case 1:
      return 'paper';
      break;

    case 2:
      return 'scissors';
      break;
  }
};

// It's that same if I don't put the "returns" here but I think that it will run faster with them. Am I right?

const determineWinner = (getUserChoice, getComputerChoice) => {

  if (getComputerChoice === getUserChoice) {
    console.log('Game is a tie!');
    return;
  }

  if (getUserChoice === 'rock' && getComputerChoice === 'paper') {
    console.log('Computer Won.');
    return;
  }

  if (getUserChoice === 'rock' && getComputerChoice === 'scissors') {
    console.log('User Won.');
    return;
  }

  if (getUserChoice === 'paper' && getComputerChoice === 'rock') {
    console.log('User Won.');
    return;
  }

  if (getUserChoice === 'paper' && getComputerChoice === 'scissors') {
    console.log('Computer Won.');
    return;
  }

  if (getUserChoice === 'scissors' && getComputerChoice === 'rock') {
    console.log('Computer Won.');
    return;
  }

  if (getUserChoice === 'scissors' && getComputerChoice === 'paper') {
    console.log('User Won.');
    return;
  }

  console.log('Try again, bruv!');
};

const playGame = (input) => {
 // Check if the input is type "string" using typeof(input)
  //
  // if (typeof(input) !== 'string') {
  //   return console.log('Input is not string!')
  // }

  const user = getUserChoice(input);
  const computer = getComputerChoice();

  console.log(`User threw: ${user}`);
  console.log(`User threw: ${computer}`);

  determineWinner(user, computer);
};

playGame('rock');
playGame('PAPER');
playGame('sCisSoRs');
playGame('serferferfer');

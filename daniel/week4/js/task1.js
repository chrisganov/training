const getUserChoice = input => { 
  input = input.toLowerCase();
  if (input === 'rock' || input==='paper' || input ==='scissors') {
    return input;
  } else {
    console.log('Your choice must be: Rock, Paper or Scissors!');
  }
};

const getComputerChoice = () => {
  switch(Math.floor(Math.random()*3)) {
    case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return 'paper';
  	};
}

const determineWinner = (userChoice, computerChoice) => {
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

const playGame = input => {
  let userChoice = getUserChoice(input);
  let computerChoice = getComputerChoice()
  console.log(`User threw ${userChoice}`);
  console.log(`Computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
};
playGame("rock");
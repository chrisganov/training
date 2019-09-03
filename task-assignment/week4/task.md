All tasks should be created in separate .js files.

**Task1:**

You need to create 4 functions (all arrow functions) with the folliwing logic:

1. 
- getUserChoice which takes one argument. The argument will be expected to be a string.
- Make sure that firs you transform that argument to lower case, so there are no issues or erros.
- Create a conditional statement inside the functions that checks what is the arguement using the following logic:
- If the argument is 'rock', 'paper' or 'scissors' return the argument
- If none of the above conditions are met, return a string stating what is the user's choices.

2. 
- getComputerChoice which takes no arguments.
- Inside it, you should generate a random number between 0 and 2.
- Create a conditional statement which takes the number as argument and write the following logic:
    - 0 - return 'rock'
    - 1 - return 'paper'
    - 2 - return 'scissors'

3. 
- determineWinner which takes two arguments - the user's choice and the computer's choice.
- Inside it, write the following conditional logic:

    - if the computer choice is the same as the user's choice, return 'Game is a tie!'.

     - Then add some additional logic based on the game "rock, paper, scissors" returning the folloing strings
    - if the compute wins return "Computer Won."
    - if the user wins return "User Won."

<u>**No steps will be provided for the above conditionals since the game is known by everyone -> try to write it by yourselves**</u>

4. 
- playGame which takes one argument, which will be the input from the user.
- Create a variable which will indicate the users choice by calling the - - getUserChoice function and provide it with the argument of this function
- Create a variable which will indicate the compute's choice by calling the - getComputerChoice functinons
- Log in the console the following strings:

  - "User threw: {the use variable}"
  - "Computer threw: {the computer variable}"
  - "{Who won based on the determineWinner function} "

5. Call the playGame function with a string -> test your function a couple of times to check if it works as expected

**Task2:**

You have the following array:

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-Probably said it once at some point,', 'Ivo', 'Dukov,', 'Learn', 'JavaScript'];

You need to:

- Remove the last idex using an array method
- Add the strings "to" and "Program" at the end of the array using an array method
- Change the 7th index of the array with 'right' using an array method
- Remove the first index of the array using an array method
- Add the string "Programming" at the beggining of the array using an array method
- log the array in the console to see how it looks and if all of the above have been completed.
- Remove the following strings "get, right, the, first, time" and replace them with 'know' using only one array method
- Log in the console a string that has joined all of the strings with a white space using an array method

**Task3**

You have the following string:

const input = 'samurai life above all';

You need to:

- Create a variable called "vowels" which is an array which holds the english vowels (google them if you dont know them. Hint: "y" is not a vowel)
- Create a variable called resultArray which is an empty array.
- Create a loop with the following logic:
  - Inside it as a condition:  initiate a variable called inputIndex which is equal to 0, while inputIndex is lower than the input's length, increase inputeIndex by 1
  - Inside the loop create a second loop:
    - Inside it as a condition: initiate a  variable called vowelsIndex which is equal to 0, while vowelsIndex is lower than vowels's length, increase vowelsIndex by 1
    - If input with index inputIndex is the same as the vowels with index vowelsIndex, push the input with index inputIndex in resultArray
  - If input with index inputIndex is equal to "e" or "u", push the input with index inputIndex into the resultArray
- Create a variable called whaleTranslate which is equal to the resultArray which is joined without any whitespace and are all capital letters
- Log in the console the whaleTranslate varaibel

<u>Expected result should be: AUUAIIEEAOEEA</u>

**Resources:**

- https://javascript.info/function-basics
- https://javascript.info/function-expressions-arrows
- https://javascript.info/while-for
- https://javascript.info/array
- https://javascript.info/array-methods
- https://www.w3schools.com/jsref/jsref_for.asp
- https://www.w3schools.com/js/js_arrays.asp
- https://www.tutorialrepublic.com/javascript-reference/javascript-array-object.php - **IMPORTANT!!!!**
- https://www.w3schools.com/js/js_arrow_function.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

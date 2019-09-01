let input = 'samurai life above all';
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
// let inputIndex = 0; don't need it
// let vowelsIndex = 0; don't need it

// Just because in the task im saying "while something something" doesn't mean that the loop should be while - it was intentional, for loop is also based a similar condtion, try it out

while(inputIndex < input.length){ //TODO:  Wrong loop, read more about "for" loop and rewrite it
inputIndex++;
  while(vowelsIndex < input.length){ // TODO: Wrong loop again, it should be "for"
    vowelsIndex++
    if(input[inputIndex] === vowels[vowelsIndex]){
      resultArray.push(input[inputIndex]);
    }
    if(input[inputIndex] === 'e' || 'u'){ // TODO: look at the task again... specifically how it is numbered this particular "if". There's a reason for the indent.
      resultArray.push(input[inputIndex]);
    }
  }
}

let whaleTranslate = resultArray.join('').toUpperCase();
console.log(whaleTranslate);
/*
Task3

You have the following string:

const input = 'samurai life above all';

You need to:

1. Create a variable called "vowels" which is an array which holds the english vowels (google them if you dont know them. Hint: "y" is not a vowel) + 
2. Create a variable called resultArray which is an empty array.
3. Create a loop with the following logic:
  a. Inside it as a condition:  initiate a variable called inputIndex which is equal to 0, while inputIndex is lower than the input's length, increase inputeIndex by 1 +
  b. Inside the loop create a second loop:
    i. Inside it as a condition: initiate a  variable called vowelsIndex which is equal to 0, while vowelsIndex is lower than vowels's length, increase vowelsIndex by 1 +
    ii. If input with index inputIndex is the same as the vowels with index vowelsIndex, push the input with index inputIndex in resultArray
  c. If input with index inputIndex is equal to "e" or "u", push the input with index inputIndex into the resultArray 
4. Create a variable called whaleTranslate which is equal to the resultArray which is joined without any whitespace and are all capital letters 
5. Log in the console the whaleTranslate varaibel + 

Expected result should be: AUUAIIEEAOEEA
AUAIIEAOEA
*/
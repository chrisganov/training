//let vowels = ["a", "e", "i", "o", "u"];
//let resultArray = [];
//-------------------------
const vowels = "aeiou";
let input = 'samurai life above all';


let resultArray = [];
for (i = 0; i < input.length; i++) {
  if(vowels.indexOf(input[i]) >= 0) resultArray += input[i];
}
let whaleTranslate = resultArray.toUpperCase();
console.log(whaleTranslate);

//Доста помощ от нета :(
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
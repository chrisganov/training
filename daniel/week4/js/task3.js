// const vowels = "aeiou";
// let input = 'samurai life above all';
// 
// 
// let resultArray = [];
// for (i = 0; i < input.length; i++) {
  // if(vowels.indexOf(input[i]) >= 0) resultArray += input[i];
// }
// let whaleTranslate = resultArray.toUpperCase();
// console.log(whaleTranslate);
// 


// What it should have been:

const input = 'samurai life above all';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    if (input[inputIndex] === vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex])
    }
  };
  if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }
}

console.log(resultArray.join('').toUpperCase())
let input = 'samurai life above all';
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
let inputIndex = 0;
let vowelIndex = 0;
while(inputIndex < input.length){
inputIndex++;
while(vowelIndex < vowels.length){
vowelIndex++;
if(input[inputIndex] === vowels[vowelIndex]){
    resultArray.push(input[inputIndex])
}
if(input[inputIndex] === "e" || "u"){
    resultArray.push(input[inputIndex])
}
}
}
let whaleTranslate = resultArray.join("").toUpperCase();
console.log(whaleTranslate);

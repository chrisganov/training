let input = 'samurai life above all';
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
// let inputIndex = 0; You don't need this
// let vowelIndex = 0; You don't need this
// TODO: Read about the "for" loop a bit more - The task says "while", but that doesn't mean you have to use "while" loop
//TODO:  fix your indents within the functions
while(inputIndex < input.length){ // TODO: wrong type of loop - use "for" loop
inputIndex++;
while(vowelIndex < vowels.length){ // TODO: again, wrong type of loop
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

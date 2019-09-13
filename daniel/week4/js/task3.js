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

const input = `Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, 
New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a 
short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GW 
is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. 
Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.`
const unnecessaryWords = ['extremely' ,'literally', 'actually'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  for (let vowelsIndex = 0; vowelsIndex < unnecessaryWords.length; vowelsIndex++) {
    if (input[inputIndex] === unnecessaryWords[vowelsIndex]) {
      resultArray.push(input[inputIndex])
    }
  };
 if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }
}

console.log(resultArray.join('').toUpperCase())
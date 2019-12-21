const text = `Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, 
New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a 
short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GW 
is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. 
Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.`

let newText;
const overUsedWords = ['really', 'very', 'basically'];
const unnecessaryWords = ['extremely' ,'literally', 'actually']; // Не стана баш така както трябваше 
//---------------------------------------- Search function
function search(text, word){
    let counter1 = 0, counter2=0;
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    counter2++;
                  }
                if (counter2==word.length){
                    counter1++;
                }
            }
            counter2=0;
        }
    }
   return `'${word}' has been used ${counter1} times.`;
}
//---------------------------------------- Sentence count
function count(string,char) {
    let re = new RegExp(char,"gi");
    return string.match(re).length;
   }
//---------------------------------------- Word remove
for (word of unnecessaryWords)
 {
    newText = text.replace(/extremely|literally|actually/g,'')
 }
//---------------------------------------- Console.log
console.log(`Story length before trasnformation is ${text.length} symbols!`)
console.log(`Story length after trasnformation is ${newText.length} symbols!`)
console.log(search(text, overUsedWords[0]));
console.log(search(text, overUsedWords[1]));
console.log(search(text, overUsedWords[2]));
console.log(`Sentеnce count is: ${count(text,'[.?!]')}`);
//----------------------------------------
/*
Task 1:

You have the following story:

Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, 
New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a 
short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GW 
is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. 
Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.

You need to:

You have the following array - ['really', 'very', 'basically'] - these are overused words, you need to count each word how many times it has been used in the story above. +
You have the following array - ['extremely', 'literally', 'actually' ] - these are unnecessary words, you need to remove them from the story.               +
Log in the console the length of words of the initial story and compare them with the new story's length, which should not include the unnecessary words.   +
Log in the console how many times each overused word has been used using the following format: + 
{Word} has been used {n} times +
Log in the console how many sentances the story has. +
*/
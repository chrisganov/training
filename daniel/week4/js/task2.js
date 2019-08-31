
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-Probably said it once at some point,', 'Ivo', 'Dukov,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push('to', 'Program');
secretMessage.splice(7,1,'right');
secretMessage.shift();
secretMessage.unshift('Programing');
secretMessage.splice(6,5,'know');
console.log(secretMessage.join(' '));
// output: Programing,is,not,about,what,you,know,it,is,about,what,you,can,figure,out.,-Probably said it once at some point,,Ivo,Dukov,,Learn,to,Program


/*
Task2:

You have the following array:

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-Probably said it once at some point,', 'Ivo', 'Dukov,', 'Learn', 'JavaScript'];

You need to:

1. Remove the last idex using an array method + 
2. Add the strings "to" and "Program" at the end of the array using an array method +
3. Change the 7th index of the array with 'right' using an array method +
4. Remove the first index of the array using an array method + 
5. Add the string "Programming" at the beggining of the array using an array method +
6. log the array in the console to see how it looks and if all of the above have been completed. +
7. Remove the following strings "get, right, the, first, time" and replace them with 'know' using only one array method +
8. Log in the console a string that has joined all of the strings with a white space using an array method +
*/
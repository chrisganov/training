// Good, only do the TODO, since I want you to know how to select values if you know their index without using a method

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-Probably said it once at some point,', 'Ivo', 'Dukov,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push('to', 'Program');
secretMessage.splice(7,1,'right'); //TODO:  This is done ok, but I prefer you re-write this line, by selecting it (google how to select a value within an array based on index). Hint: It's not a method and it should be reassigned
secretMessage.shift();
secretMessage.unshift('Programing');
secretMessage.splice(6, 5, 'know,'); // I missed in the task that there should be a semicolon, but I added it, so it's ok
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
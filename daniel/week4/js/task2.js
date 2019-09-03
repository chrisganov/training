let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-Probably said it once at some point,', 'Ivo', 'Dukov,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push('to', 'Program');
secretMessage.splice(7,1,'right');
const newArray = Object.assign([], secretMessage, {[7]: 'right'}); // мисля че това искаш да направя!
secretMessage.shift();
secretMessage.unshift('Programing');
secretMessage.splice(6, 5, 'know,'); 
console.log(secretMessage.join(' '));
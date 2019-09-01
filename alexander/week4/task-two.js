let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-Probably said it once at some point,', 'Ivo', 'Dukov,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push("to","Program");
//TODO secretMessage.splice(7,1, "right") - No, google how to get a value from an array based on it's  possition and they reassign it accordigly
secretMessage.shift();
secretMessage.unshift("Programming");
// secretMessage = secretMessage.map(item => 
//      item.replace('get','know').replace('right','know').replace('the','know').replace('first','know').replace('time','know')
// );
// TODO: use splice
console.log(secretMessage.join(" "));
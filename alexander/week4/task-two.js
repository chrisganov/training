let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-Probably said it once at some point,', 'Ivo', 'Dukov,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push("to","Program");
secretMessage.splice(7,1, "right")
secretMessage.shift();
secretMessage.unshift("Programming");
secretMessage = secretMessage.map(item => 
     item.replace('get','know').replace('right','know').replace('the','know').replace('first','know').replace('time','know')
);
console.log(secretMessage.join(" "));
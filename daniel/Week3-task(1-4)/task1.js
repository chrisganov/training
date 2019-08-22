let kelvin = 5;
let celsius = kelvin - 273;
let farenheit = (celsius * (9/5))+32; // TODO: Something is missing - read the task again
let newton = (celsius *(33/100));  // TODO: Something is missing - read the task again
let sentence = "The temperature in kelvins is "+ kelvin +" and its equal to " + celsius + "C";
console.log(sentence); 
 sentence = "The temperature in kelvins is "+ kelvin +" and its equal to " + farenheit + "F";
console.log(sentence); 
 sentence = "The temperature in kelvins is ".concat(kelvin).concat(" and its equal to ").concat(newton).concat("N");
console.log(sentence); 

// TODO: You have no used Template Strings, re-write your sentances in template strings

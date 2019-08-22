let kelvin = 5;
let celsius = kelvin - 273;
let farenheit = (celsius * (9/5))+32;
let newton = (celsius *(33/100));
let sentence = "The temperature in kelvins is "+ kelvin +" and its equal to " + celsius + "C";
console.log(sentence); 
 sentence = "The temperature in kelvins is "+ kelvin +" and its equal to " + farenheit + "F";
console.log(sentence); 
 sentence = "The temperature in kelvins is ".concat(kelvin).concat(" and its equal to ").concat(newton).concat("N");
console.log(sentence); 
// Има разминавания в стотни в по-малките числа и не мога да разбера защо, предполагам съм схванал идеята на упражнението
const humanYears = 17;
let earlyYears = 2;
earlyYears = 2 * 10.5;
let laterYears = (humanYears-2) * 4; // edit поне да е вярно
myDogYears = earlyYears + laterYears;
name = "daniel";

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

console.log("My name is "+ capitalize('daniel') +". I am "+ humanYears +" years old in human years which is " + myDogYears + " years old in dog years.");
const humanYears = 17;
let earlyYears = 2;
earlyYears = 2 * 10.5;
const laterYears = (humanYears-2) * 4;
myDogYears = earlyYears + laterYears;
// const name = "daniel";
// const res = (name.slice(0, 1)).toUpperCase() + (name.slice(1))

// Or you could have done it like this:
let name = 'daniel'
name = name.slice(0, 1).toUpperCase() + name.slice(1)

// PS: I saw that you used () inside name.slice(0, 1) and name.slice(1) - this way is mainly used for numbers - you are using methods, you just need to chain them as shown above

console.log(`My name is ${name}. I am ${humanYears} years old in human years which is ${myDogYears} years old in dog years.`);
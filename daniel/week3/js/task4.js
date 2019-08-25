let randomNumber = Math.floor(Math.random() * 1000); // Added changed "cosnt" to let
let early = true;
const age = 18;

// What you have written:

// if( early === true && age >= 18)
// {
//     console.log("Race starts at 9:30 am. Your Number is "+ (randomNumber + 1000));
// }
// else if(early === false && age >= 18){
//     console.log("Race starts at 11:00 am. Your Number is " + randomNumber);
// }
// else if(age < 18){
//     console.log("Race starts at 12:30 pm. You number is " + randomNumber);
// }
// else{
//     console.log("Please see the registration desk.");
// }

// What is should have been:

if (early && age >= 18) {
    randomNumber = randomNumber + 1000
    console.log(randomNumber)
}

if (early === true && age >= 18) {
    // Or instead of re-assignment, to make it as you had made it and add 1000.
    console.log("Race starts at 9:30 am. Your Number is " + (randomNumber));
}
else if (early === false && age >= 18) {
    console.log("Race starts at 11:00 am. Your Number is " + randomNumber);
}
else if (age < 18) {
    console.log("Race starts at 12:30 pm. You number is " + randomNumber);
}
else {
    console.log("Please see the registration desk.");
}


/*
TODO:
Statement 1:
 if it is early and the age is bigger than or equal to 18, log in the console the (number)  and add 1000 more (THIS IS CONNECTED... )

 Statement 2:

if it is early and the age is bigger than or equal to  18 -> log -> Race starts at 9:30 am. Your Number is (number); (... TO THIS) - this is why they are called logical operators
if it is not early and age is bigger than or eqaul to 18 -> log -> Race starts at 11:00 am. Your Number is (number)
if age is less than 18 -> log -> Race starts at 12:30 pm. You number is (number)
if none of the conditions above are met -> log -> Please see the registration desk`
*/

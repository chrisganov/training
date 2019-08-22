const randomNumber = 322; // TODO: This is not a whole, random number that is multiplied by 1000
let early = true;
const age = 18;

// TODO: "==" is not the proper way to check if it is equal, fix it.
// TODO: You are missing a second conditional statement, read the assignment again and fix it.

if( early == true && age >= 18)
{
    console.log("Race starts at 9:30 am. Your Number is "+ (randomNumber + 1000));

}
else if(early == false && age >= 18){
    console.log("Race starts at 11:00 am. Your Number is " + randomNumber);
}
else if(age < 18){
    console.log("Race starts at 12:30 pm. You number is " + randomNumber);
}
else{
    console.log("Please see the registration desk.");
}

// Hint: if a statement is a boolean, you can just call it without making a comparison. For example;

const iAmTrue = true;

console.log(iAmTrue)

if (iAmTrue) {
    console.log('I was called without making a comparison')
}

// Is equal to

if (iAmTrue === true) {
    console.log('I was called by making a comparison')
}

// If you want to check if check if it is false you add "!" infront (google it)

if (!iAmTrue) {
    console.log('I will not be logged, because I am not false')
}

// is equal to

if (!iAmTrue === false) {
    console.log('I was called by making a comparison and I am false')
}
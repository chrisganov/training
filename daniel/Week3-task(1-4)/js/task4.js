const randomNumber = Math.floor(Math.random() * 1000); ; 
let early = true;
const age = 18;

// TODO: You are missing a second conditional statement, read the assignment again and fix it. -

//Ne znam za koe tochno mi goworish che ne e spazeno. Mai sym slqp ama ne wijdam 

if( early === true && age >= 18)
{
    console.log("Race starts at 9:30 am. Your Number is "+ (randomNumber + 1000));
}
else if(early === false && age >= 18){
    console.log("Race starts at 11:00 am. Your Number is " + randomNumber);
}
else if(age < 18){
    console.log("Race starts at 12:30 pm. You number is " + randomNumber);
}
else{
    console.log("Please see the registration desk.");
}
/*

if it is early and the age is bigger than or equal to 18, log in the console the (number)  and add 1000 more

if it is early and the age is bigger than or equal to  18 -> log -> Race starts at 9:30 am. Your Number is (number);
if it is not early and age is bigger than or eqaul to 18 -> log -> Race starts at 11:00 am. Your Number is (number)
if age is less than 18 -> log -> Race starts at 12:30 pm. You number is (number)
if none of the conditions above are met -> log -> Please see the registration desk`
*/



const randomNumber = 322;
let early = true;
const age = 18;

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
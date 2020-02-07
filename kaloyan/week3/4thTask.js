// And what did we say about functions? I will let you fix this one alone.
// Also variables into constants.

// const whatsUpOcka = () => {
//     let number = Math.round(Math.random() * 1000);
//     let early = true;
//     let age = 18;

//     if (early === true && age >= 18) {
//         console.log(number + 1000);
//         let earlyNumber = number + 1000;
//         console.log(`Race starts in 9:30 am. Your number is ${earlyNumber}`);
//     } else if (early === false && age >= 18) {
//         console.log(`Race starts at 11:00 am. You number is ${number}`);
//     } else if (age < 18) {
//         console.log(`Race starts at 12:30 pm. You number is ${number}`);
//     } else {
//         console.log("Please see the registration desk");
//     }
// }

//TODO: Come to me to me when you have time to explain why and how the function
// works below
const whatsUpOcka = () => {
  const number = Math.round(Math.random() * 1000);
  const early = false;
  const age = 18;

  if (early && age >= 18) {
    let earlyNumber = number + 1000;
    console.log(`Race starts in 9:30 am. Your number is ${earlyNumber}`);
    return;
  }

  if(!early) {
    age >= 18 ? 
      console.log(`Race starts at 11:00am. Your number is ${number}`) 
      :
      console.log(`Race starts at 12:30 pm. You number is ${number}`);
    return;
  }

  console.log('Please see the registration desk.')
}

whatsUpOcka();

/* if (early === true && age >= 18) {
    console.log(number + 1000);
    let earlyNumber = number + 1000;
    console.log(`Race starts in 9:30 am. Your number is ${earlyNumber}`);
} if (early === false && age >= 18) {
    console.log(`Race starts at 11:00 am. You number is ${number}`);
} if (age < 18) {
    console.log(`Race starts at 12:30 pm. You number is ${number}`);
} else {
    console.log("Please see the registration desk");
}
this will print:
1869
Race starts in 9:30 am. Your number is 1869
Please see the registration desk

this is why I did it with else if else if...*/

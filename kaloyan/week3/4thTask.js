const whatsUpOcka = () => {
    let number = Math.round(Math.random() * 1000);
    let early = true;
    let age = 18;

    if (early === true && age >= 18) {
        console.log(number + 1000);
        let earlyNumber = number + 1000;
        console.log(`Race starts in 9:30 am. Your number is ${earlyNumber}`);
    } else if (early === false && age >= 18) {
        console.log(`Race starts at 11:00 am. You number is ${number}`);
    } else if (age < 18) {
        console.log(`Race starts at 12:30 pm. You number is ${number}`);
    } else {
        console.log("Please see the registration desk");
    }
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
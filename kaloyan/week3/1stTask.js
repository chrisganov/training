// If you are going to use a function, then you should have added a variable
// for kelvins so you can call the function and get a dynamical result
// const tempConverter = () => {
const tempConverter = (temp) => {
    // let kelvin = 0;
    let kelvin = temp;
    let celsius = kelvin - 273;
    let divisionNumberOne = (9 / 5) + 32;
    debugger;
    let farenheit = Math.round(celsius * divisionNumberOne);
    let newton = Math.round(celsius * (33 / 100));

    console.log(`Kelvin is equal to ${kelvin}.`);
    console.log(`Celsius is equal to ${celsius}.`);
    console.log(`In order to convert celsious to farenheit you will need to time your celsius variable to ${divisionNumberOne}.`);
    console.log(`The result of the temperature is ${farenheit} degrees in farenheit.`);
    console.log("The result of the temperature is " + farenheit + " degrees in farenheit.");
    console.log(`The result of the temperature is ${celsius} degrees in celsius.`);
    console.log("The result of the temperature is " + celsius + " degrees in celsius.");
    console.log(`The value of the newton variable is equal to ${newton}, but isn't it used for force measurement?`);
}

tempConverter(10);

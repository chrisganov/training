// Same as the first one - if you are using a function it will make more sense
// to make it dynamic. In this case you know that there are 2 main variables
// - Your age
// - Your name

// const myYearsBro = () => {
const myYearsBro = (age, name) => {
    // let currentAge = 25;
    let currentAge = age;
    let earlyYears = 2;
    earlyYears *= 10.5;
    let laterYears = currentAge * 4;
    laterYears *= 4;
    let dogYears = laterYears + earlyYears;
    // const myNameBro = 'kaloyan';
    const myNameBro = name;
    // Nice.
    const myNameBroInUpper = `${myNameBro[0].toUpperCase()}${myNameBro.slice(1)}`;
    console.log(`My name is ${myNameBroInUpper}. I am ${currentAge} years old in human years which is ${dogYears} years old in dog years.`);
}

myYearsBro(25, 'kaloyan');

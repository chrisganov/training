const myYearsBro = () => {
    let currentAge = 25;
    let earlyYears = 2;
    earlyYears *= 10.5;
    let laterYears = currentAge * 4;
    laterYears *= 4;
    let dogYears = laterYears + earlyYears;
    const myNameBro = "kaloyan";
    const myNameBroInUpper = `${myNameBro[0].toUpperCase()}${myNameBro.slice(1)}`;
    console.log(`My name is ${myNameBroInUpper}. I am ${currentAge} years old in human years which is ${dogYears} years old in dog years.`);
}

myYearsBro();

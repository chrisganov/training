const thirdTask = () => {
  const input = 'samurai life above all';
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];

  for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {

    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {

      if (input[inputIndex] === vowels[vowelsIndex]) {
        resultArray.push(input[inputIndex]);
      }
    }

    if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
      resultArray.push(input[inputIndex]);
    }
  }

  const whaleTranslate = resultArray.join('').toUpperCase();

  console.log(whaleTranslate);
};

thirdTask();
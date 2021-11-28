module.exports = (numbersArray) => {
  let minOne = Infinity;
  let minTwo = Infinity;

  const isValidNumbersArray = !numbersArray.some(isNaN);

  if (numbersArray.length === 0) {
    throw new Error("Array should not be empty");
  }

  if (!isValidNumbersArray) {
    throw new Error("Not valid numbers array");
  }

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] < minOne) {
      minTwo = minOne;
      minOne = numbersArray[i];
    } else if (numbersArray[i] < minTwo) {
      minTwo = numbersArray[i];
    }
  }

  return minOne + minTwo;
};

const getFirstAmountSorted = (inputArray = [], numberOfItems = 0) => {
  inputArray.sort();
  const newArraySorted = inputArray.slice(0, numberOfItems);
  return newArraySorted.sort();
}

const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray);
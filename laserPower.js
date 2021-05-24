const calculatePower = (arrNumber) => {
  let initialValue = 0;
  arrNumber.reduce((accumulator,sum) => {
    return initialValue += sum;
  },[0]);
  return initialValue *= 2;
}

const laserPower = calculatePower([1,3,8]);
console.log('Required laser power is ' + laserPower); // should be 24
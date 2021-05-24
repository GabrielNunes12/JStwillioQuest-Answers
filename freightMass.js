const calculateMass = (mass) => {
  let totalMass = 0;
  mass.reduce((accumulator, value) => {
    return totalMass += value.length;
  },[0]);
  return totalMass;
}

const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass); 
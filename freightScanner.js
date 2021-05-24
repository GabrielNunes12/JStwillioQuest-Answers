let scan = (freightItems = []) => {
  let contrabandCount = 0;
  freightItems.forEach(value => {
    if(value === 'contraband') return contrabandCount++;
  });
  return contrabandCount;
}
const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband','contraband']);
console.log('Number of "contraband": ' + numItems); // should be 3

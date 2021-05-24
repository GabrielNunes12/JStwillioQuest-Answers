const scan = (freight) => {
  const collectionsContraband = [];
  freight.forEach((value,index) => {
    if(value === 'contraband') return collectionsContraband.push(index);
  });
  return collectionsContraband;
}

const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]
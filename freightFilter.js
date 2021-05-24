const scanAndFilter = (freightItems, forbiddenString) => {
  return freightItems.filter(valoresForbidden => {
    return valoresForbidden !== forbiddenString;
  })
}

const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

const filteredCargo = scanAndFilter(cargo, 'ray guns');
console.log(filteredCargo);
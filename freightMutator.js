const mutate = (arrString) => {
  return arrString.map(value => {
    return value.toUpperCase();
  })
}

const cargo = ['apples', 'ray guns', 'oranges'];
const mutatedCargo = mutate(cargo);
console.log(mutatedCargo);
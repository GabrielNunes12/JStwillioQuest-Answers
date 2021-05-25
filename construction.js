const construct = (name, material, assemble, duration) => {
  const person = {
    name: name,
    duration: 1000,
    assemble: true,
    material: 'human'
  }
  return person;
}

const somePerson = construct('Kevin');
console.log('name is: ' + somePerson.name); // should be "Kevin"
console.log('duration is: ' + somePerson.duration); // should be 1000
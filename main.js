const persons = [
  { firstName: 'Alan', lastName: 'Walker', age: 24 },
  { firstName: 'Britney', lastName: 'Spears', age: 40 },
  { firstName: 'Callum', lastName: 'Scott', age: 33 },
  { firstName: 'Diana', lastName: 'Ross', age: 78 },
  { firstName: 'Ellie', lastName: 'Goulding', age: 35 },
  { firstName: 'Frank', lastName: 'Ocean', age: 34 }
];

// Filter() method example
// Creates a new array of persons with age less than or equal to 35
const filteredPersons = persons.filter((person) => {
  return person.age <= 35;
});
console.log('filteredPersons', filteredPersons);

// Map() method example
// Creates a new array of first names only
const firstNames = persons.map((person) => {
  return person.firstName;
});
console.log('firstNames', firstNames);
// PRACTICE: create a function that accepts name and age, then,
    // return the person object with name and age properties.
//
// function createPerson(name, age){
//
// }

const createPerson = (name,age) => {
  return {name,age};
};

const person1 = createPerson('Cherlly', 21);
console.log(JSON.stringify(person1,undefined, 2));

const person2 = createPerson('Merlito', 23);
console.log(JSON.stringify(person2,undefined, 2));

// Expected Output
// {
//   name: 'Cherlly',
//   age: 21
// }


// const displayValue = (value) => {
//   console.log('Value is', value);
// };
//
// const increment = (counter) => {
//   return counter + 1;
// };
//
// const computeSum = (x, y) => {
//   x = 10;
//
//   return x + y;
// }
//
// var first = 210;
// var second = 31;
//
// console.log(computeSum(first,second));
//
// console.log('First is', first);


// var fullname = 'Cherlly';
//
// var createName = (fullname) => {
//   console.log('Name is', fullname);
//   fullname = 'rejie';
// }
//
// createName(fullname);
// console.log(fullname);


// var person = {
//   name: 'Ron',
//   age: 24
// };
//
// const displayInfo = (p) => {
//   // console.log(JSON.stringify(p, undefined, 2));
//   console.log(`${p.name} is ${p.age} years old.`);
//
//   p.name = 'Merlito';
// }
//
// displayInfo(person);
// console.log(person.name);
// console.log(increment(1));
// displayValue(50);

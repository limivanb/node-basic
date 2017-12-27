const person1 = {
  name: 'Ron',
  age: 27,
  programming: ['PHP','C/C++','VB.NET','Node.js']
};

const person2 = {
  name: 'Rejie',
  age: 16,
  likes: ['Swimming','Sky Diving'],
  movies: ['Walking Dead']
};

const person3 = {
  name: 'Merlito',
  age: 21,
  friends: [person1, person2]
}
const persons = [person1,person2,person3];

console.log(persons[1].movies[0]);
console.log(persons[2].friends[0].name);
console.log(persons[2].friends[1].name);
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.programming.join(', '));
// console.log(person1.programming[0]);
//
// console.log();
// console.log(person2.likes);

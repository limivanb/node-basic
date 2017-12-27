// PRACTICE:
//    Create an array of students and passed it to the function.
//    Display their information.

const students = [
  {
    name: 'Juan',
    age: 12
  },
  {
    name: 'Ron',
    programming: ['PHP','.NET']
  },
  {
    name: 'Rejie'
  }
];

const DisplayStudents = (stud) =>{
  // console.log(`Student 1: ${stud[0].name}, ${stud[0].age}`);
  // console.log(`Student 2: ${stud[1].name}, ${stud[1].programming.join(', ')}`);
  // console.log(`Student 3: ${stud[2].name}`);

  console.log(JSON.stringify(stud, undefined, 2));
  // console.log(stud);
};

DisplayStudents(students);

// Expected Output
  // Student 1: Juan, 12
  // Student 2: Ron, PHP, .NET
  // Student 3: Rejie

// const student1 = {
//   name: 'Juan',
//   age: 23
// };
// const student2 = {
//
// };
//
// const students = [student1, student2];




// option 2
// const WelcomeMessage = function(name) {
//   console.log('Welcome to Node.js');
//   console.log(`Hello, ${name}`);
// };

// option 3
// const WelcomeMessage = (name) => console.log(`Hello, ${name}`);
// const Sum = (x,y) => x + y;

// const Sum = (x,y) => {
//   return x + y;
// };

// WelcomeMessage('Rejie');
// console.log('The sum is', Sum(2,5));

// option 1
// function WelcomeMessage(name){
//   console.log('Welcome to Node.js');
//   console.log(`Hello, ${name}`);
// }





// Output:
//    Welcome to Node.js
//      Hello, Ivan

// const total = Sum(2,5);
// console.log('The total numbers: ',total);
//
// console.log('Sum: ',Sum(22,5));
//
// function WelcomeMessage(){
//   console.log('Welcome to Node.js');
//   console.log('Hello Cherlly');
// }
//
// function Sum(x,y){
//   return x + y;
// }

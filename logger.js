const fs = require('fs');

// December 27, 2017 14:37:35

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const today = new Date();
const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

fs.appendFileSync('logs.txt', month + ' ' + day + ',' + year + '\r\n');


// const person = {
//   name: 'Ivan',
//   age: 33
// };
//
// const personString = JSON.stringify(person, undefined, 2);
//
// fs.appendFileSync('logs.txt', personString + '\r\n');

const fs = require('fs');
const os = require('os');

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

const myCPU = os.cpus();
const myNetwork = os.networkInterfaces();

console.log(JSON.stringify(myNetwork,undefined,2));
// const today = new Date();
// const year = today.getFullYear();
// const month = months[today.getMonth()];
// const day = today.getDate();
//
// const hours = today.getHours();
// const minutes = today.getMinutes();
// const seconds = today.getSeconds();
//
// fs.appendFileSync('logs.txt',
//     `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}\r\n`);


// const person = {
//   name: 'Ivan',
//   age: 33
// };
//
// const personString = JSON.stringify(person, undefined, 2);
//
// fs.appendFileSync('logs.txt', personString + '\r\n');

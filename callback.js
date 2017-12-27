const Sum = (x,y,z, callback) => {
  setTimeout(() => {
     callback(x + y + z,"OK");
     // return x + y + z;
 },0);
};
console.log("Computing...");

Sum(1,3,4,(total,message) => {
  console.log('The total is', total);
});

console.log('Finished');
// console.log('Starting app.');
//
// setTimeout(() => {
//   console.log('Inside setTimeout');
// },2000);
//
// setTimeout(() => {
//   console.log('Inside setTimeout2');
// },0);
//
// console.log('Finishing app.');

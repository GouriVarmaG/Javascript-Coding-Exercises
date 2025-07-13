// let a=10,b=0;
// if(a==100||b==100||a+b == 100){
//   console.log(true);
// }

//write a js program to check 2 numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

const checkNum100 =(a,b)=> a===100||b===100||(a+b)===100;

console.log(checkNum100(100,0));
console.log(checkNum100(0,100));
console.log(checkNum100(50,50));
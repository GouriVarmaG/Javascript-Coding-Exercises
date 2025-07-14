// given two values, write a js program to find out which one is near to 100

const nearHundred = (a,b)=> (100-a)>(100-b)?b:a

console.log(nearHundred(99,1));
console.log(nearHundred(50,51));
console.log(nearHundred(50,50));

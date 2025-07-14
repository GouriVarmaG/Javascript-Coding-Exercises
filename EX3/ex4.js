// write a js prg to get largest even number from an array of integers

const largestEven =(arr)=>
  Math.max(...arr.filter(num=>num%2===0));
console.log(largestEven([2,5,4,8,102,12,3]));

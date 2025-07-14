// write a js prg to find the number of even values up to a given number

const findEvenUpto = (a) =>{
  const returnArr = [];
  for(let i=0;i<=a;i+=2){
     returnArr.push(i);
  }
  return returnArr
}
console.log(findEvenUpto(20))
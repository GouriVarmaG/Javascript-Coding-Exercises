// Write a js prog to find the number of even digits in an array of integers

const findEven = (arr) => {
  let count = 0;
  for(let i=0;i<arr.length;i++){
     if(arr[i]%2 == 0){
       count++
     }
  }
  return count;
}
console.log(findEven([2,4,63,7,8,6]))

const countEvenNum = (arr) => arr.filter(num => num%2=== 0).length; //this filters out the even numbers and keeps it in the arr

console.log(countEvenNum([2,3,1,5,5,67,8,6,2]))

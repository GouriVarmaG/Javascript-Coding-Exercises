// write a js prg to check whether a given array of integers is sorted in ascending order

const isAscending = (arr) =>{
  for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1])
      return false;
  }
  return true
}
console.log(isAscending([2,1,3,8,4]));
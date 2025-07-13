// write a js prg to create a new string adding "New!" in front of a given string. If the given string begins with 'New!' already then return the original string.

const newAdd = (str) =>{
  if(str.slice(0,4) == 'New!'){
    return str
  }
  else{
    return 'New!'+str;
  }
}
console.log(newAdd('New!dog'))


const addNew = (str) =>str.indexOf('New!')===0? str:`New! ${str}`;

console.log(addNew('new!offers'))
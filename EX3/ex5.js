// write a js prg to replace the first digit in a string(should contain atleast a digit) with $ character.

const replaceFirstDigit = (str)=>
  str.replace(/[0-9]/,'$')
//.replace(/\d/,'#')
// str.replace(/[0-9]/g,'$')
console.log(replaceFirstDigit('abd489dhk9'))


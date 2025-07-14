//Write a js prog to conctenate two strings except their first character

const concatStr = (str1,str2) =>
  str1.slice(1)+str2.slice(1)

console.log(concatStr('Software','Developer'))
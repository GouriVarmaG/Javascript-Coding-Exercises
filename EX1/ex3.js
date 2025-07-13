//Write a js prg to replace every character in a given string with the character following it in the alphabet

const replaceLetter = (str) =>{
  const strArr = [...str]
   const firtChar = strArr.shift(); //remove first letter
   strArr.push(firtChar);
  return strArr.join('')
}
console.log(replaceLetter('l'));



//char.charCodeAt(0) returns the Unicode code point of the given character.

// String.fromCharCode() is used to convert a Unicode code point back to a character.

const replaceAlpha = (word) => {
  let wordArr = [...word]
  for(let i=0;i<wordArr.length;i++){
    const code = wordArr[i].charCodeAt(0)
    if(wordArr[i]==='z'){
      wordArr[i] = 'a'
    }
    else{
    wordArr[i] = String.fromCharCode(code+1)
  }}
  return wordArr.join('')
}
console.log(replaceAlpha('abcdefgz'))

const moveChar = (str) =>
  str.split('').map(char => String.fromCharCode(char.charCodeAt(0)+2)).join('');

console.log(moveChar('abcdefgh'))
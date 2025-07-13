//write a js program to get the extension of a filename

let a = "index.html"
let b;
for(i in a){
  if(a[i]=='.'){
     b = i;
    break;
  }
}
console.log(a.slice(b))


const getFileExtension = (str) => str.slice(str.lastIndexOf('.')) //takes the last occurence of the particular char.

console.log(getFileExtension('style.mod.css'))
// write a js prg toget the current date.
// expected output:
// mm-dd-yyyy , mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const now = new Date();

console.log(String(now.getDate()).padStart(2,0)+'/'+String(now.getMonth()+1).padStart(2,0)+'/'+now.getFullYear())
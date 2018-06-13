
const fs = require('fs');

 fs.readFile('simple.txt','utf8',(err,data)=>{
    console.log(data);
})
console.log('finished 1');

let content = fs.readFileSync('simple.txt','utf8');
console.log('abcd');

console.log('finished 2');
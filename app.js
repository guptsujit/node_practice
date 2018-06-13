const os = require('os');
const fs = require('fs');
const userscript = require('./script.js');
let userinfo = os.userInfo();

/*console.log(userinfo.username);
console.log(os.arch());
console.log(os.platform());*/
//console.log(fs);

fs.appendFile('simple.txt','hello world',(error)=>{
if(error){
    console.log(error);
   // throw error;
}
})
console.log(userinfo.username);
console.log(userscript);
console.log(process);
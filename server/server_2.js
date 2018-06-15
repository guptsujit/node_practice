const http = require('http');
const fs = require('fs');

 http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'application/json'});
  let json = {
      "name" : "sujit",
      "email" : "sujitk2@chetu.com"
  }
  let toString = JSON.stringify(json);
  res.write(toString);
  res.end();
}).listen(3030,'127.0.0.1')
console.log('server is running...');
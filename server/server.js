const http = require('http');
const fs = require('fs');

 http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'});
  fs.appendFileSync('data.txt',"this data to write.if something other than");
  const content = fs.readFileSync('data.txt');
  res.write(content.toString());
  res.end();
}).listen(3030,'127.0.0.1')
console.log('server is running...');
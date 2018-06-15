const http = require('http');

const server = http.createServer();
server.on('request',(req,res)=>{

    req.on('error',(err)=>{
        console.log('request error'+err);
        res.end();
    });
    res.on('error',(err)=>{
        console.log('response error'+err);
        res.end();
    });
    res.writeHead(200,{'Content-Type':'text/html'});  
    res.write('<html>');
    res.write('<body style="background-color:red">');
    res.write('<h1>Hello, World!</h1>');
    res.write('</body>');
    res.write('</html>'); 

    //We can also use like this
    //res.write("<html><head><body><div style='background-color:red'>How r u ?<div></body></head></html>");

   //The end function on streams can also take in
   //some optional data to send as the last bit of data on the stream 
    res.end();
})

server.listen(3030,'127.0.0.1');
console.log('server is running...');
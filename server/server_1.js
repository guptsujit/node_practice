const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let html = fs.readFileSync('index.html');
    //routing part starts here
    if (req.url === "/") {
        res.write(html);
    } else {
        res.write('URl not found');
    }
    res.end();
}).listen(3030, '127.0.0.1',function(){
    console.log('server is running...');
})

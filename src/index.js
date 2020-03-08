const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
// Create a middleware function to serve fil
//e from a given root directory
//app.use(express.static('../public'));

const server = http.createServer(app);
const io = socketIO(server); // create a new server. it takes http server as an argument
io.on('connection',(socket)=>{
    console.log("someone is connected");
    //listening client side event
    socket.on('chatMessage',(username,incomingMessage)=>{
        io.emit('messageFromServer',username,incomingMessage);
    })
    // Each socket also fires a special disconnect event:
    socket.on('disconnect',()=>{
        console.log("Someone disconnected");
    })
})
app.use(express.static("public"));

const port = process.env.PORT || 3000;
server.listen(port,()=>{
    console.log('server is up on port '+port);
})
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

app.use('/', (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html');
})
app.use('/user2', (req, res, next) => {
    res.sendFile(__dirname + '/public/index2.html');
})
const server = http.createServer(app);
//onsole.log(socketIO());// returns server object
const io = new socketIO(server); // works with new or just use socketIO(server)
io.on('connection', (socket) => {
    console.log('someone is connected');

    socket.on('newMessage', (message,username) => {
        socket.broadcast.emit('sendMessage', message,username);

    })


    socket.on('disconnect', () => {
        console.log('someone is disconnected from server');
    })

})


const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('server is running..');
});
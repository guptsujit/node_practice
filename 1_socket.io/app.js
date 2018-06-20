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

    socket.on('newMessage', (message, username) => {
        //With broadcast the user who will send the message will not see his/her own message at his end
        // But other user will receive the message 
        //socket.broadcast.emit('sendMessage', message,username);
        //with socket.emit message will send only to a curent connection that is the 
        //user who will send the message will not deliver to other user but the message will be send to himself
        // socket.emit('sendMessage', message,username);
        // io.emit will send the message to all the connected user
        io.emit('sendMessage', message, username, true);

    })


    socket.on('typing', (message) => {
        //emit event user is typing
        socket.broadcast.emit('usertyping', message);
    })
    socket.on('typingStopped', (condition) => {
        //emit event user is typing
        socket.broadcast.emit('userStoppedTyping', condition);
    })
    socket.on('disconnect', () => {
        console.log('someone is disconnected from server');
    })

})


const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('server is running..');
});
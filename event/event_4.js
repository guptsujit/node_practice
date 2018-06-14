const event = require('events');
const eventEmitter = new event.EventEmitter();

eventEmitter.once('walk',()=>{
    console.log('Going for morning walk');
})

eventEmitter.emit('walk');
eventEmitter.emit('walk');
eventEmitter.emit('walk');
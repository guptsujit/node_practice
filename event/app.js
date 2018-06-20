const event = require('events');
const eventEmitter = new event.EventEmitter();

console.log("hey dude1");

setTimeout(()=>{
    console.log("i am in set timeout");
 },0);

 // This will set maximum listener
 //console.log(eventEmitter.setMaxListeners(2));

 eventEmitter.on('write', (message)=>{
     console.log(message);
     message();
 });

eventEmitter.on('speak',()=>{
    console.log("listner1 executed ?");
})
eventEmitter.on('speak',()=>{
    console.log("listner1 executed2?");
})
eventEmitter.on('speak',(user1,user2)=>{
    console.log(`listner3 executed ? ${user1} and ${user2}`);
})
eventEmitter.addListener('speak', ()=>{
    console.log("addListener 4 executed"); 
});

const listener5 = ()=>{
    console.log("Listener 5 executed");   
}
eventEmitter.on('speak', listener5);

function listener6(){
    console.log("Listener 6 executed");      
}
eventEmitter.on('speak', listener6);

console.log("hey dude2");

eventEmitter.emit('speak','sujit','vishal');

// Will remove all listener
//eventEmitter.removeAllListeners(['speak']);

//Returns an array of listeners for the specified event.
const totallistener = eventEmitter.listeners('speak');

 eventEmitter.emit('write',()=>{
     myArray = ['apple','banana'];
     console.log(myArray);
 });


console.log(totallistener);

//count all listener for speak event
const couuntListener = event.listenerCount(eventEmitter,'speak');
console.log(couuntListener+" Listner(s) listening to speak event");
const event = require('events');
const util = require('util');
const eventEmitter = new event.EventEmitter();

function Person(individual) {
    this.name = individual;
}
util.inherits(Person, event.EventEmitter);

Person.prototype.user = function() {
    console.log(this.name);
}

let person1 = new Person('sujit');

let person2 = new Person('rishank');

let person3 = new Person('simple');

let personArrayObj = [person1, person2, person3];

person1.user();

personArrayObj.forEach((peopleObj) => {
    peopleObj.on('whoSpeaked', () => {
        console.log(peopleObj.name + " said hello");
    })
})

personArrayObj.forEach((peopleObj) => {
    peopleObj.emit('whoSpeaked');
})



const eventEmitter = require('events');

class Person extends eventEmitter {
    
    constructor(username){
       //Here super constructor is necessary in derived class
       // for accessing this or returning from derived constructor
       // super is required to get the funtions like on,emit  of parent class in derived class
       super();
        this.name = username;
        this.on('speak',function(){
            console.log(this.name);
        })
      this.showMessage();

    }
    showMessage(){
      this.emit('speak');
   }
}

const person = new Person('sujit');
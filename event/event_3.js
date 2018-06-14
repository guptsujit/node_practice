const eventEmitter = require('events');

class Person extends eventEmitter {
    
    constructor(username){
       //Here super constructor is necessary in derived class
       // to get the funtions of parent class that is eventEmitter class
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
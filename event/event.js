console.log("event");

const EventEmitter = require('events').EventEmitter;
const myEvents = new EventEmitter();
function greetings(){
    myEvents.on('greet', function(data){
        console.log(data);
    } );
    console.log('listening to event greet');
}
greetings();
myEvents.emit('greet', "hello habib");


class Greetings extends EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
    greet(){
        this.on('greet', (data) =>{

            console.log(`${data} ${this.name}`);
        })
    }
}

const myGreetings = new Greetings('Rocky');
myGreetings.greet();
myGreetings.emit('greet', 'Hi')
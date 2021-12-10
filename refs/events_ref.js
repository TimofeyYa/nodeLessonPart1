const EventEmmiter = require('events');

class Logger extends EventEmmiter {
    logs(message){
        this.emit('message', `${message} ${Date.now()}`);
    }
}

const logg = new Logger;

logg.on('message' , (data)=>{
    console.log(data)
})

logg.logs('hi');
//Event module includes EventEmitter class
//Event Emitters are objects that generate events.
//All objects that emit events are instances of EventEmitter class.
//Event Emitters are based on publish/suscribe pattern.
//EventEmitter class provides listeners for listing events and Emitters for emitting events.

var events=require('events');

var em=new events.EventEmitter();

//suscribing the events
em.once('FirstEvent',function(){
    console.log("The first event is Suscribe");
});

em.on('SecondEvent',function(data){
    console.log('Message: ' +data);
});

//Raise the events.
em.emit('FirstEvent');
em.emit('FirstEvent');
em.emit('SecondEvent','The second event is suscribed.');
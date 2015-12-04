var ActorSystem = require("actorjs-core").ActorSystem;
var EventBus = require("actorjs-bus").EventBus;

// Actor based on Object
var Actor = {
    receive: function (msg) {
        console.log("Receive message via the event bus: ", msg)
    }
};

// Create actor system
var actorSystem = new ActorSystem("ActorSystem");

// Spin Actor
var actorRef = actorSystem.actorOf(Actor, "Actor");

// Create instance of event bus
var eventBus = new EventBus();

// Subscribe actor to the bus
eventBus.subscribe(actorRef);

// Pubilish event on the eventBus
eventBus.publish("Hello World!");
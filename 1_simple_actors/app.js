var ActorSystem = require("actorjs-core").ActorSystem;

//Actor based on Class
var ActorClass = function () {
    this.receive = function(msg){
        console.log("Message in Class: ", msg)
    }
};

// Actor based on Object
var ActorObject = {
    receive: function(msg){
        console.log("Message in Object: ", msg)
    }
};

// Create actor system
var actorSystem = new ActorSystem("ActorSystem");

// Spin Actors
var actorRefClass = actorSystem.actorOf(ActorClass, "ActorClass");
var actorRefObject = actorSystem.actorOf(ActorObject, "ActorObject");

// Send messages
actorRefClass.tell("Hello Class");
actorRefObject.tell("Hello Object");
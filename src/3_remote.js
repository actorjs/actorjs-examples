var ActorSystem = require("actorjs-core").ActorSystem;
var ActorNode = require("actorjs-remote").ActorNode;
var ActorClient = require("actorjs-remote").ActorClient;

// Create actor
var Actor = {
    receive: function (msg) {
        console.log("Receive message via remoting: ", msg)
    }
};

// Create actor system
var actorSystem = new ActorSystem("ActorSystem");

// Spin Actor
actorSystem.actorOf(Actor, "Actor");

// Create instance of actor node to host actor systems
var actorNode = new ActorNode();

// Register actorSystem to actorNode
actorNode.use(actorSystem);

// Start listener
actorNode.listen(6666, function(){
   console.log("Server started: ", actorNode.address())
});

// Create instance of ActorClient
var client = new ActorClient(6666, 'localhost', function(){
    console.log("Client started: ", client.address());
    var actorRef = client.actorFor("actor://ActorSystem/Actor");
    actorRef.tell("Hello World!");
});
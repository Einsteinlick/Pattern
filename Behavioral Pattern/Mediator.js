class Man {

	constructor(firstname, lastname){
	  this.firstname = firstname ;
	  this.lastname =  lastname ;
	  this.listener  = null;
	}
	  send(message,receiver){
		  this.listener.send(message,this,receiver);
	  }
	  receive(message, sender) {
		console.log(sender.firstname + " to " + this.firstname +": " + message);
	  }
}
const Chat = function(){
const Listener ={}
return{
	register: function(listen){
		Listener[listen.firstname] = listen;
		listen.listener = this;
	},
	send : function(message ,sender,receiver ){
		if(receiver){
			receiver.receive(message, sender);
		}
		else{ 
			for(key in Listener){
				if(Listener[key]!== sender){
					Listener[key].receive(message, sender);
				}
			}

		}
	}
}
}
	const Winston = new Man ("Winston","Churchill");
	const Charles = new Man ("Charles","Darwin");
	const William = new Man("William","Shakespeare");
	const Isaac = new Man ("Isaac","Newton");
	const listener = new Chat();
	listener.register(Winston);
	listener.register(Charles);
	listener.register(William);
	listener.register(Isaac);
	Winston.send ("Good Morning !");
	Charles.send ("Good Morning !",Winston);
	William.send ("Good Morning !",Winston);


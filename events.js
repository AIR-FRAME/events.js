var Events	= function(){};

Events._events = [];
Events.bind = function(eventName, callBack){
	var evnt = {
		"eventname": eventName,
		"callback": callBack
	}	
	Events._events.push(evnt);
}

Events.trigger = function(eventName){	
	var eventObject = Events._events.find((it) => { return it.eventname === eventName; });
	if(eventObject){
		eventObject.callback();
	}
}

if( typeof module !== "undefined" && ('exports' in module)){
	module.exports	= Events;
}

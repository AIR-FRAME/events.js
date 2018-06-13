var Events	= function(){};
Events.clientChange = null;
Events.trigger = function(eventName){
	Events.clientChange();
}
if( typeof module !== "undefined" && ('exports' in module)){
	module.exports	= Events;
}

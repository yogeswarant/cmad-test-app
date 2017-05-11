vertx.eventBus().consumer("com.glarimy.vertx.library.post", function(message) {	
	console.log(message);
	message.reply(JSON.stringify({"a":1}));
});

vertx.eventBus().consumer("com.glarimy.vertx.library.get", function(message) {
	console.log(message);
	message.reply(JSON.stringify({"a":1}));
});
(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
		}

	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
			if (typeof(this.listeners[eventName]) === "undefined") {
				this.listeners[eventName] = [];
			}
			
			var temp = listener.bind(context);
			this.listeners[eventName].push(temp);
			var tempListeners = this.listeners;
			
			return function () {
				var index = tempListeners[eventName].indexOf(temp);
				if (index >= 0)
					{ tempListeners[eventName].splice(index, 1); }
				};
			console.log("event emitter");
	};

	EE.prototype.emit = function (eventName /*, other args...*/) {
			
			var args = [];
			Array.prototype.push.apply(args, arguments);
			args.splice(0,1); 
			
			for(i in this.listeners[eventName]) {
            this.listeners[eventName][i].apply(this, args);
			}

	};


	global.UAM.EventEmitter = EE;

}(window));
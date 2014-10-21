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
			
	};

	EE.prototype.emit = function (eventName /*, other args...*/) {
			
			var args = [];
			Array.prototype.push.apply(args, arguments);
			args.splice(0,1); 
			
			for(i in this.listeners[eventName]) {
            this.listeners[eventName][i].apply(this, args);
			}

	};

//	var ee = new EE();
//
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2, this.key);
//	}, { key: 'value' });
//
//	ee.emit('test', 1, 2); // 1, 2 value
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute

	global.UAM.EventEmitter = EE;

}(window));

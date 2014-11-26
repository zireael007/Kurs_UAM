UAM.InputView = function (inputView) {
	UAM.EventEmitter.call(this);
	var context = this;
	this.button = document.querySelector('#buttonNew');

	this.button.addEventListener('click', function() {
	    var input = inputView.value;
		if (input !== "undefined") {
			context.emit('newInput', input);
          }
	});

};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);


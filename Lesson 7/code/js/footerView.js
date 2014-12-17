UAM.FooterView = function (footerView) {
	UAM.EventEmitter.call(this);
	this.footerview = footerView;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.update = function (allElements) {
	document.querySelector('#allElts').textContent = allElements;
};

UAM.FooterView.prototype.updateActive = function (activeNo) {
	document.querySelector('#activeElts').textContent = activeNo;
	
};


UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
    this.active = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (elt) {
	this.data.push(elt);
    ++this.active;
   	this.emit('addToStore', elt);
    this.emit('new to footer', this.data.length);
    this.emit('update active', this.active);
};

UAM.Store.prototype.update = function (ifActive) {
    if (ifActive === -1) --this.active;
    else ++this.active;
    this.emit('update active', this.active);
};

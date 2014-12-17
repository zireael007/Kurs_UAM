UAM.ListView = function (listView) {
	UAM.EventEmitter.call(this);
	this.listView = listView;
    var context = this;
  
    this.listView.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI'){
            if(e.target.classList.contains("active")) {
                e.target.classList.remove("active");
                var ifActive = -1;
            }
            else {
                e.target.classList.add("active");
                var ifActive = 1;
            }
           context.emit('lista kliknieta', ifActive);          
        }
	});
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.addToList = function (listEltValue) {
	var node = document.createElement("li");                 
	var textnode = document.createTextNode(listEltValue);
    node.classList.add("active");
	node.appendChild(textnode);      
	this.listView.appendChild(node);
};


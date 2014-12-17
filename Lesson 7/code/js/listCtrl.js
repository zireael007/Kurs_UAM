UAM.ListCtrl = function (listView, store) {

	this.listView = listView;
	this.store = store;
	
	store.on('addToStore', function (elt) {
		listView.addToList(elt);
	});
    
    listView.on('lista kliknieta', function (ifActive) {
        store.update(ifActive);
    });

};
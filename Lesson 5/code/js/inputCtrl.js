UAM.InputCtrl = function (inputView, store) {
    this.inputView = inputView;
    this.store = store;

    inputView.on('newInput', function (newListElt) {
        store.add(newListElt);
    });
};


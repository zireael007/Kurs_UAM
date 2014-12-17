UAM.FooterCtrl = function (footerView, store) {
    this.footerView = footerView;
    this.store = store;

    store.on('new to footer', function (allElements) {
        footerView.update(allElements);
    });
    
    store.on('update active', function (activeNo) {
        footerView.updateActive(activeNo);
    });

};
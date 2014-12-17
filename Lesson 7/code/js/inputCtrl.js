UAM.InputCtrl = function (inputView, store) {
    this.inputView = inputView;
    this.store = store;

    inputView.on('newInput', function (newListElt) {
      store.add(newListElt);
      var target = document.getElementById('spin');  
	   var spinner = new Spinner(opts).spin(target);  
	   spinner.spin(target)
      var dataToSent = [];
		
		store.data.forEach(function(element){
		dataToSent.push({id: i, value: element})});
		
  		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function () {
			if (httpRequest.readyState !== 4 ) {
				return;
			}
			if (httpRequest.status !== 200) {
				alert("Wysłanie danych do serwera nie powiodło się");
				throw new Error('Request failed');
			}
		};
		
		
		httpRequest.open('POST', '/api/todos', true);
		httpRequest.setRequestHeader('Content-Type', 'application/json');
		httpRequest.send(JSON.stringify(dataToSent));
		console.log("Wysłanie danych powiodło się");
	   spinner.stop();
		
    });
    		
};


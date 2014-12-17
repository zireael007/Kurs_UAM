window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded
	var store = new UAM.Store();

	var inputView = new UAM.InputView(document.querySelector('#inputview'));
	var listView = new UAM.ListView(document.querySelector('#listview'));
	var footerView = new UAM.FooterView(document.querySelector('#footerview'));
	
	new UAM.InputCtrl(inputView, store);
	new UAM.ListCtrl(listView, store);
	new UAM.FooterCtrl(footerView, store);
	
	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function () {
 
   
	if (httpRequest.readyState !== 4 ) {
	
		return;
	}
	if (httpRequest.status !== 200) {
		
		alert("Coś nie wyszło");
		throw new Error('Request failed');
	}
	spinner.stop(); 
	var data = JSON.parse(httpRequest.responseText);
	
	data.forEach(function(element) {
			store.add(element.value);
			});
	}

	var target = document.getElementById('spin');  
	var spinner = new Spinner(opts).spin(target);  
	spinner.spin(target);
	httpRequest.open('GET', 'api/todos/');
	httpRequest.send();

	
});

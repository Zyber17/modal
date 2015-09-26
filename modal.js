function Modal(message,options) {
	this.message = message;
	this.options = options;
	var element;

	this.draw = function(location) {
		this.html = document.createElement('div');
		this.html.setAttribute('class','modal modalwrapper');

		var htmlMessage = document.createElement('h2');
		htmlMessage.setAttribute('class','modal modalmessage');
		htmlMessage.appendChild((document.createTextNode(this.message)));

		var htmlOptions = document.createElement('ul');
		htmlOptions.setAttribute('class','modal modaloptionul');

		for (var i = 0; i < this.options.length; i++) {
			var htmlOptionsLi = document.createElement('li');
			htmlOptionsLi.setAttribute('class', 'modal modaloptionli');

			var htmlOptionsButton = document.createElement('button');
			htmlOptionsButton.setAttribute('class', 'modal modaloptionbutton');
			htmlOptionsButton.onclick = this.dissipate;
			htmlOptionsButton.appendChild((document.createTextNode(this.options[i].name)));

			htmlOptionsLi.appendChild(htmlOptionsButton);
			htmlOptions.appendChild(htmlOptionsLi);
		};

		this.html.appendChild(htmlMessage);
		this.html.appendChild(htmlOptions);

		if(location) {
			element = location.appendChild(this.html);
		}else {
			element = document.getElementsByTagName('body')[0].appendChild(this.html);
		}
	}

	this.dissipate = function() {
		element.remove();
	}
}
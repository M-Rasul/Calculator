function makeOperation(operationCode) {
	if(operationCode==='+') {
		window.alert(Number(firstElement.value)+Number(secondElement.value));
	}
	else if(operationCode==='-') {
		window.alert(Number(firstElement.value)-Number(secondElement.value));
	}
	else if(operationCode==='*') {
		window.alert(Number(firstElement.value)*Number(secondElement.value));
	}
	else if(operationCode==='/') {
		window.alert(Number(firstElement.value)/Number(secondElement.value));
	}
}
function onOperationButtonClick(eventObject) {
	var clickedButton = eventObject.currentTarget;
	var operation = clickedButton.innerHTML;
	makeOperation(operation);
}
var firstElement = document.getElementById('num_1');
var secondElement = document.getElementById('num_2');
var operationButtons = document.getElementsByClassName('operation-button');
for(var i=0;i<operationButtons.length;i++) {
	operationButtons[i].style.color = 'cadetblue';
	operationButtons[i].style.background = 'black';
	operationButtons[i].addEventListener('click', onOperationButtonClick);
}
//--------------------------------------------------------------------------------------
var slider1 = new Slider();
var slider2 = new Slider();
slider1.start('it-slider1');
slider2.start('it-slider2');
//--------------------------------------------------------------------------------------
function Dog(name) {
	this.name = name;
	this.voice = function() {
		console.log('Hey! My name is ' + this.name);
	}
}
var dog1 = new Dog('Tobik');
var dog2 = new Dog('Laika');


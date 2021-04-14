function init(){
//add your javascrip between these two lines of code
 	
	//create variables
	var inputEntry = document.getElementById('entryinput');
	var outputText = document.getElementById('textoutput');
	var inputButton = document.getElementById('entrybutton');
 	//create function to handle the event of the alert
 	function myEventFunction(){
 		alert("Oleksandr Lemeha: " + inputEntry.value);
 		outputText.innerHTML = inputEntry.value;
 	}
 	

 	//execute the myEventHandler() function when the button is pressed
 	inputButton.addEventListener('click', myEventFunction);
}
window.addEventListener('load', init);
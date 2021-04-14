function init(){
//add your javascrip between these two lines of code
 	
 	
 	//create function to handle the event of the alert
 	function myEventFunction(){
 		//create variables
		var inputEntry = document.getElementById('entryinput');
		var outputText = document.getElementById('textoutput');
 		alert("Oleksandr Lemeha: " + inputEntry.value);
 		outputText.innerHTML = inputEntry.value;
 	}
 	var inputButton = document.getElementById('entrybutton');

 	//execute the myEventHandler() function when the button is pressed
 	inputButton.addEventListener('click', myEventFunction);
}
window.addEventListener('load', init);
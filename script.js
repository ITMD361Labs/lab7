function init(){
//add your javascrip between these two lines of code
 	//create variables
 	var inputEntry = document.getElementById("entryinput");
 	var inputButton = document.getElementById("entrybutton");
 	var outputText = document.getElementById("textoutput");
 	
 	//create function to handle the event of the alert
 	function myEventHandler(){
 		if(inputEntry.value == ''){
 			alert("No Input, Please Enter Text");
 		}
 		else{
 		 	alert("Oleksandr Lemeha: " + inputEntry.value);
 		 	outputText.innerHTML = inputEntry.value; 
 		}
 	}
 	
 	//execute the myEventHandler() function when the button is pressed
 	inputButton.addEventListener("click", myEventHandler);
}
window.addEventListener('load', init);
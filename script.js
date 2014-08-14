//var t1 = document.getElementById("#t1");
//console.log("Topping 1 Checked");
var run = true;

function calcute() 
{	
	while (run == true) {
		console.log("Running");
		setTimeout(1000);
	}
}

window.onload = calcute();
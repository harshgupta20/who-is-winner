function msg(){
	var randomNumber1 = Math.floor(Math.random()*6) + 1;
	var randomNumber2 = Math.floor(Math.random()*6) + 1;

	if(randomNumber1 > randomNumber2){
		var a = randomNumber1;
		var b = randomNumber2;
    	document.getElementById("p-1").src="pic/" + a + "d.jpeg";
    	document.getElementById("p-2").src="pic/" + b + "d.jpeg";
		alert("Winner is Player 1");
		document.getElementById("p1").innerHTML = "Player 1 ( WINNER )";
		document.getElementById("p2").innerHTML = "Player 2";
	}
	else if(randomNumber2 > randomNumber1){
		var a = randomNumber1;
		var b = randomNumber2;
    	document.getElementById("p-1").src="pic/" + a + "d.jpeg";
    	document.getElementById("p-2").src="pic/" + b + "d.jpeg";
		alert("Winner is Player 2");
		document.getElementById("p2").innerHTML = "Player 2 ( WINNER )";
		document.getElementById("p1").innerHTML = "Player 1";
	}
	else{
		var a = randomNumber1;
		var b = randomNumber2;
    	document.getElementById("p-1").src="pic/" + a + "d.jpeg";
    	document.getElementById("p-2").src="pic/" + b + "d.jpeg";
    	document.getElementById("p1").innerHTML = "Player 1 ( DRAW )";
    	document.getElementById("p2").innerHTML = "Player 2 ( DRAW )";
		alert("Match is draw");
	}
}

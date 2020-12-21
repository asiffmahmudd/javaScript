function rollDice(){	
	var player1 = Math.floor(Math.random()*6)+1;
	var player2 = Math.floor(Math.random()*6)+1;

	document.querySelector(".img1").setAttribute('src','images/dice'+player1+'.png');
	document.querySelector(".img2").setAttribute('src','images/dice'+player2+'.png');

	if(player1 > player2)
		document.querySelector('.container h1').textContent = "🚩Player 1 Wins!";
	else if(player2 > player1)
		document.querySelector('.container h1').textContent = "Player 2 Wins!🚩";
	else
		document.querySelector('.container h1').textContent = "Draw!";
}
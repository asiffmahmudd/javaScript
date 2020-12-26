
var game = 0;
var level = 1;
var pattern = [];
var inputTime = 500;

jQuery(document).keypress(function(){
	if(game == 0){
	 	game++;
		startGame();
	}
});


function startGame(){
	
	buildPattern();
	setTimeout(function(){
		takeUserInput();	
	}, inputTime);
}

function buildPattern(){
	var title = 'Level '+level;
	jQuery('#level-title').text(title);

	var time = 500;
	var random = Math.floor(Math.random()*4);
	pattern.push(random);
	var x = 0;
	console.log(pattern);
	for(var i = 0; i < pattern.length; i++){
		x = pattern[i];
		if(x == 0){
			setTimeout(function(){ 
				showPattern('red');
			}, time);	
		}
		else if(x == 1){
			setTimeout(function(){ 
				showPattern('green');
			}, time);	
		}
		else if(x == 2){
			setTimeout(function(){ 
				showPattern('blue');
			}, time);	
		}
		else if(x == 3){
			setTimeout(function(){ 
				showPattern('yellow');
			}, time);	
		}
		time += 1000;
	}
	level++;
	inputTime = time;
}

function showPattern(s){
	makeSound(s);
	s = '#'+s;
	jQuery(s).addClass('pressed');
	setTimeout(function(){
		jQuery(s).removeClass('pressed');
	}, 300);
}




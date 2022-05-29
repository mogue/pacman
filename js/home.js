var HOME = false;

var HOME_PRESENTATION_TIMER = -1;
var HOME_PRESENTATION_STATE = 0;

var HOME_TRAILER_TIMER = -1;
var HOME_TRAILER_STATE = 0;

var PACMAN_TRAILER_CANVAS_CONTEXT = null;
var PACMAN_TRAILER_DIRECTION = 3;
var PACMAN_TRAILER_POSITION_X = 600;
var PACMAN_TRAILER_POSITION_Y = 25;
var PACMAN_TRAILER_POSITION_STEP = 3;
var PACMAN_TRAILER_MOUNTH_STATE = 3;
var PACMAN_TRAILER_MOUNTH_STATE_MAX = 6;
var PACMAN_TRAILER_SIZE = 16;

var GHOST_TRAILER_CANVAS_CONTEXT = null;
var GHOST_TRAILER_BODY_STATE_MAX = 6;
var GHOST_TRAILER_POSITION_STEP = 3;

var GHOST_BLINKY_TRAILER_POSITION_X = 1000;
var GHOST_BLINKY_TRAILER_POSITION_Y = 25;
var GHOST_BLINKY_TRAILER_DIRECTION = 3;
var GHOST_BLINKY_TRAILER_COLOR = "#ed1b24";
var GHOST_BLINKY_TRAILER_BODY_STATE = 0;
var GHOST_BLINKY_TRAILER_STATE = 0;

var GHOST_PINKY_TRAILER_POSITION_X = 1035;
var GHOST_PINKY_TRAILER_POSITION_Y = 25;
var GHOST_PINKY_TRAILER_DIRECTION = 3;
var GHOST_PINKY_TRAILER_COLOR = "#feaec9";
var GHOST_PINKY_TRAILER_BODY_STATE = 1;
var GHOST_PINKY_TRAILER_STATE = 0;

var GHOST_INKY_TRAILER_POSITION_X = 1070;
var GHOST_INKY_TRAILER_POSITION_Y = 25;
var GHOST_INKY_TRAILER_DIRECTION = 3;
var GHOST_INKY_TRAILER_COLOR = "#4adecb";
var GHOST_INKY_TRAILER_BODY_STATE = 2;
var GHOST_INKY_TRAILER_STATE = 0;

var GHOST_CLYDE_TRAILER_POSITION_X = 1105;
var GHOST_CLYDE_TRAILER_POSITION_Y = 25;
var GHOST_CLYDE_TRAILER_DIRECTION = 3;
var GHOST_CLYDE_TRAILER_COLOR = "#f99c00";
var GHOST_CLYDE_TRAILER_BODY_STATE = 3;
var GHOST_CLYDE_TRAILER_STATE = 0;

function initHome() { 
	HOME = true;
	
	GAMEOVER = false;
	LOCK = false;
	PACMAN_DEAD = false;
	

	$("#panel").hide();
	$("#home").show();
//	$("#home h3 em").append( " - " + new Date().getFullYear() );
	
	$('#help').fadeOut("slow");
	
	var ctx = null;
	var canvas = document.getElementById('canvas-home-title-pacman');
	canvas.setAttribute('width', '550');
	canvas.setAttribute('height', '127');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
    var img = document.getElementById("logoSprite");
    ctx.drawImage(img, 0,0, 550,127);
	/*
	var x = 50;
	var y = 50;
	
	ctx.fillStyle = "#fff200";
	ctx.beginPath();
	ctx.arc(x, y, 45, (0.35 - (3 * 0.05)) * Math.PI, (1.65 + (3 * 0.05)) * Math.PI, false);
	ctx.lineTo(x - 10, y);
	ctx.fill();
	ctx.closePath();
	
	x = 95;
	y = 50;
	
	ctx.fillStyle = "#dca5be";
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
	ctx.fill();
	ctx.closePath(); */
	
	canvas = document.getElementById('canvas-presentation-blinky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_BLINKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0, 'blinky');
	
	canvas = document.getElementById('canvas-presentation-pinky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_PINKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0, 'pinky');
	
	canvas = document.getElementById('canvas-presentation-inky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_INKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0, 'inky');
	
	canvas = document.getElementById('canvas-presentation-clyde');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_CLYDE_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0, 'clyde');
	
	startPresentation();
}

function startPresentation() { 
	$("#presentation *").hide();
	
	if (HOME_PRESENTATION_TIMER === -1) { 
		HOME_PRESENTATION_STATE = 0;
		HOME_PRESENTATION_TIMER = setInterval("nextSequencePresentation()", 500);
	}
}
function stopPresentation() { 

	if (HOME_PRESENTATION_TIMER != -1) { 
		$("#presentation *").hide();
		HOME_PRESENTATION_STATE = 0;
		clearInterval(HOME_PRESENTATION_TIMER);
		HOME_PRESENTATION_TIMER = -1;
	}
}
function nextSequencePresentation() { 
	if (HOME_PRESENTATION_STATE === 0) { 
		$("#presentation-titles").show();
	} else if (HOME_PRESENTATION_STATE === 2) { 
		$("#canvas-presentation-blinky").show();
	} else if (HOME_PRESENTATION_STATE === 4) { 
		$("#presentation-character-blinky").show();
	} else if (HOME_PRESENTATION_STATE === 5) { 
		$("#presentation-name-blinky").show();
	} else if (HOME_PRESENTATION_STATE === 6) { 
		$("#canvas-presentation-pinky").show();
	} else if (HOME_PRESENTATION_STATE === 8) { 
		$("#presentation-character-pinky").show();
	} else if (HOME_PRESENTATION_STATE === 9) { 
		$("#presentation-name-pinky").show();
	} else if (HOME_PRESENTATION_STATE === 10) { 
		$("#canvas-presentation-inky").show();
	} else if (HOME_PRESENTATION_STATE === 12) { 
		$("#presentation-character-inky").show();
	} else if (HOME_PRESENTATION_STATE === 13) { 
		$("#presentation-name-inky").show();
	} else if (HOME_PRESENTATION_STATE === 14) { 
		$("#canvas-presentation-clyde").show();
	} else if (HOME_PRESENTATION_STATE === 16) { 
		$("#presentation-character-clyde").show();
	} else if (HOME_PRESENTATION_STATE === 17) { 
		$("#presentation-name-clyde").show();
	}
	
	if (HOME_PRESENTATION_STATE === 17) { 
		clearInterval(HOME_PRESENTATION_TIMER);
		HOME_PRESENTATION_TIMER = -1;
		
		startTrailer();
	} else { 
		HOME_PRESENTATION_STATE ++;
	}
}

function startTrailer() { 

	var canvas = document.getElementById('trailer');
	canvas.setAttribute('width', '500');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		PACMAN_TRAILER_CANVAS_CONTEXT = canvas.getContext('2d');
	}
	
	if (HOME_TRAILER_TIMER === -1) { 
		HOME_TRAILER_STATE = 0;
		HOME_TRAILER_TIMER = setInterval("nextSequenceTrailer()", 20);
	}
}
function stopTrailer() { 

	if (HOME_TRAILER_TIMER != -1) { 
		$("#presentation *").hide();
		HOME_TRAILER_STATE = 0;
		clearInterval(HOME_TRAILER_TIMER);
		HOME_TRAILER_TIMER = -1;
	}
}
function nextSequenceTrailer() { 

	erasePacmanTrailer();
	eraseGhostsTrailer();
	
	if (PACMAN_TRAILER_MOUNTH_STATE < PACMAN_TRAILER_MOUNTH_STATE_MAX) { 
		PACMAN_TRAILER_MOUNTH_STATE ++; 
	} else { 
		PACMAN_TRAILER_MOUNTH_STATE = 0; 
	}
	if ( PACMAN_TRAILER_DIRECTION === 1 ) { 
		PACMAN_TRAILER_POSITION_X += PACMAN_TRAILER_POSITION_STEP;
	} else if ( PACMAN_TRAILER_DIRECTION === 3 ) { 
		PACMAN_TRAILER_POSITION_X -= PACMAN_TRAILER_POSITION_STEP;
	}
	if ( PACMAN_TRAILER_POSITION_X < -650) { 
		PACMAN_TRAILER_DIRECTION = 1;
		PACMAN_TRAILER_POSITION_STEP ++;
	}
	
	if (GHOST_BLINKY_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) { 
		GHOST_BLINKY_TRAILER_BODY_STATE ++;
	} else { 
		GHOST_BLINKY_TRAILER_BODY_STATE = 0;
	}
	if (GHOST_PINKY_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) { 
		GHOST_PINKY_TRAILER_BODY_STATE ++;
	} else { 
		GHOST_PINKY_TRAILER_BODY_STATE = 0;
	}
	if (GHOST_INKY_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) { 
		GHOST_INKY_TRAILER_BODY_STATE ++;
	} else { 
		GHOST_INKY_TRAILER_BODY_STATE = 0;
	}
	if (GHOST_CLYDE_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) { 
		GHOST_CLYDE_TRAILER_BODY_STATE ++;
	} else { 
		GHOST_CLYDE_TRAILER_BODY_STATE = 0;
	}				
	if ( GHOST_BLINKY_TRAILER_DIRECTION === 1 ) { 
		GHOST_BLINKY_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_BLINKY_TRAILER_DIRECTION === 3 ) { 
		GHOST_BLINKY_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_PINKY_TRAILER_DIRECTION === 1 ) { 
		GHOST_PINKY_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_PINKY_TRAILER_DIRECTION === 3 ) { 
		GHOST_PINKY_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_INKY_TRAILER_DIRECTION === 1 ) { 
		GHOST_INKY_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_INKY_TRAILER_DIRECTION === 3 ) { 
		GHOST_INKY_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_CLYDE_TRAILER_DIRECTION === 1 ) { 
		GHOST_CLYDE_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_CLYDE_TRAILER_DIRECTION === 3 ) { 
		GHOST_CLYDE_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_BLINKY_TRAILER_POSITION_X < -255) { 
		GHOST_BLINKY_TRAILER_DIRECTION = 1;
		GHOST_BLINKY_TRAILER_STATE = 1;
	}
	if ( GHOST_PINKY_TRAILER_POSITION_X < -220) { 
		GHOST_PINKY_TRAILER_DIRECTION = 1;
		GHOST_PINKY_TRAILER_STATE = 1;
	}
	if ( GHOST_INKY_TRAILER_POSITION_X < -185) { 
		GHOST_INKY_TRAILER_DIRECTION = 1;
		GHOST_INKY_TRAILER_STATE = 1;
	}
	if ( GHOST_CLYDE_TRAILER_POSITION_X < -150) { 
		GHOST_CLYDE_TRAILER_DIRECTION = 1;
		GHOST_CLYDE_TRAILER_STATE = 1;
	}
	
	drawPacmanTrailer();
	drawGhostsTrailer();
	
	if (HOME_TRAILER_STATE === 750) { 
		clearInterval(HOME_TRAILER_TIMER);
		HOME_TRAILER_TIMER = -1;
	} else { 
		HOME_TRAILER_STATE ++;
	}
}

function getGhostsTrailerCanevasContext() { 
	return PACMAN_TRAILER_CANVAS_CONTEXT;
}
function drawGhostsTrailer() { 
	var ctx = getGhostsTrailerCanevasContext();
	
	if (GHOST_BLINKY_TRAILER_STATE === 1) { 
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else { 
		ctx.fillStyle = GHOST_BLINKY_COLOR;
	}
	drawHelperGhost(ctx, GHOST_BLINKY_TRAILER_POSITION_X, GHOST_BLINKY_TRAILER_POSITION_Y, GHOST_BLINKY_TRAILER_DIRECTION, GHOST_BLINKY_TRAILER_BODY_STATE, GHOST_BLINKY_TRAILER_STATE, 0, 'blinky');
	
	if (GHOST_PINKY_TRAILER_STATE === 1) { 
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else { 
		ctx.fillStyle = GHOST_PINKY_COLOR;
	}
	drawHelperGhost(ctx, GHOST_PINKY_TRAILER_POSITION_X, GHOST_PINKY_TRAILER_POSITION_Y, GHOST_PINKY_TRAILER_DIRECTION, GHOST_PINKY_TRAILER_BODY_STATE, GHOST_PINKY_TRAILER_STATE, 0, 'pinky');
	
	if (GHOST_INKY_TRAILER_STATE === 1) { 
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else { 
		ctx.fillStyle = GHOST_INKY_COLOR;
	}
	drawHelperGhost(ctx, GHOST_INKY_TRAILER_POSITION_X, GHOST_INKY_TRAILER_POSITION_Y, GHOST_INKY_TRAILER_DIRECTION, GHOST_INKY_TRAILER_BODY_STATE, GHOST_INKY_TRAILER_STATE, 0, 'inky');
	
	if (GHOST_CLYDE_TRAILER_STATE === 1) { 
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else { 
		ctx.fillStyle = GHOST_CLYDE_COLOR;
	}
	drawHelperGhost(ctx, GHOST_CLYDE_TRAILER_POSITION_X, GHOST_CLYDE_TRAILER_POSITION_Y, GHOST_CLYDE_TRAILER_DIRECTION, GHOST_CLYDE_TRAILER_BODY_STATE, GHOST_CLYDE_TRAILER_STATE, 0, 'clyde');
}
function eraseGhostsTrailer(ghost) { 

	var ctx = getGhostsTrailerCanevasContext();
	
	ctx.clearRect(GHOST_BLINKY_TRAILER_POSITION_X - 17, GHOST_BLINKY_TRAILER_POSITION_Y - 17, 64, 64);
	ctx.clearRect(GHOST_PINKY_TRAILER_POSITION_X - 17, GHOST_BLINKY_TRAILER_POSITION_Y - 17, 64, 64);
	ctx.clearRect(GHOST_INKY_TRAILER_POSITION_X - 17, GHOST_BLINKY_TRAILER_POSITION_Y - 17, 64, 64);
	ctx.clearRect(GHOST_CLYDE_TRAILER_POSITION_X - 17, GHOST_BLINKY_TRAILER_POSITION_Y - 17, 64, 64);
}

function getPacmanTrailerCanevasContext() { 
	return PACMAN_TRAILER_CANVAS_CONTEXT;
}
function drawPacmanTrailer() { 

	var ctx = getPacmanTrailerCanevasContext();

    var scaleSize = PACMAN_TRAILER_SIZE * 2;

    var img = document.getElementById("pacmanRightSprite");
    if (PACMAN_TRAILER_DIRECTION  === 1) {
        img = document.getElementById("pacmanRightSprite");    //right
        ctx.setTransform(1, 0, 0, 1, PACMAN_TRAILER_POSITION_X, PACMAN_TRAILER_POSITION_Y);
        ctx.rotate( (PACMAN_TRAILER_MOUNTH_STATE *4+ 0) *Math.PI/180);
    } else if (PACMAN_TRAILER_DIRECTION  === 2) { 
        img = document.getElementById("pacmanRightSprite");          //down
        ctx.setTransform(1, 0, 0, 1, PACMAN_TRAILER_POSITION_X, PACMAN_TRAILER_POSITION_Y);
        ctx.rotate( (PACMAN_TRAILER_MOUNTH_STATE *4+ 90) *Math.PI/180);
    } else if (PACMAN_TRAILER_DIRECTION  === 3) { 			      //left
        img = document.getElementById("pacmanRightSprite");
        ctx.setTransform(-1, 0, 0, 1, PACMAN_TRAILER_POSITION_X, PACMAN_TRAILER_POSITION_Y);
        ctx.rotate( (PACMAN_TRAILER_MOUNTH_STATE *4+ 0) *Math.PI/180);
    } else if (PACMAN_TRAILER_DIRECTION  === 4) { 
        img = document.getElementById("pacmanRightSprite");    //up
        ctx.setTransform(-1, 0, 0, 1, PACMAN_TRAILER_POSITION_X, PACMAN_TRAILER_POSITION_Y);
        ctx.rotate( (PACMAN_TRAILER_MOUNTH_STATE *4- 90) *Math.PI/180);
    }
    ctx.drawImage(img, -PACMAN_TRAILER_SIZE, -PACMAN_TRAILER_SIZE, scaleSize, scaleSize);
    ctx.setTransform(1,0,0,1,0,0);
}
function erasePacmanTrailer() { 

	var ctx = getPacmanTrailerCanevasContext();
	ctx.clearRect(PACMAN_TRAILER_POSITION_X - PACMAN_TRAILER_SIZE, PACMAN_TRAILER_POSITION_Y - PACMAN_TRAILER_SIZE, PACMAN_TRAILER_SIZE * 4, PACMAN_TRAILER_SIZE * 4);
}
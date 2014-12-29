var buttons = document.getElementsByName('button');
var buttonsClicked = [];
var player = 0;
function clickListener(e) 
{   
    var clickedElement = e.target;
    if (clickedElement.tagName === 'BUTTON') {
    	var tags=document.getElementsByTagName(clickedElement.tagName);
    	for(var i=0;i<tags.length;++i) {
      		if(tags[i]==clickedElement) {
        		buttonsClicked.push({
        			index:i,
        			player:player,
        			choice:selectXO(i)
        		}); 
      		}    
    	}
    };
    if (winning) {
    	console.log("Someone won!")
    }
};
function selectXO (i) {
	if (buttons[i].innerHTML === '&nbsp;' && player === 0) {
		buttons[i].innerHTML = "X";
		player = 1;
		return "X"		
	} else if (buttons[i].innerHTML === '&nbsp;' && player === 1) {
		buttons[i].innerHTML = "O";
		player = 0;
		return "O";
	}
};
function winning () {
	if (buttonsClicked[i].choice("X")) {
		return true;
	}
}
document.onclick = clickListener;
window.onload = function(){
	for (var i=0; i<9; i++) {
		document.getElementById('game').innerHTML+='<div class="block"></div>';
	}

	var hod = 0;
	document.getElementById('game').onclick = function(event){
		console.log(event);
		if (event.target.className == 'block'){
			if (hod%2==0) {
				event.target.innerHTML = 'x';
			}
			else {
				event.target.innerHTML = '0';
			}
			hod++;
			checkWinner();
		}
	}

	function checkWinner(){
		var allblock = document.getElementsByClassName('block');
	if(allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x') return alert('Победили крестики');
    if(allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x') return alert('Победили крестики');
    if(allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x') return alert('Победили крестики');
    if(allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x') return alert('Победили крестики');
    if(allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x') return alert('Победили крестики');
    if(allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x') return alert('Победили крестики');
    if(allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x') return alert('Победили крестики');
    if(allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x') return alert('Победили крестики');
	
	if(allblock[0].innerHTML=='О' && allblock[1].innerHTML=='О' && allblock[2].innerHTML=='О') return alert('Победили нолики');
    if(allblock[3].innerHTML=='О' && allblock[4].innerHTML=='О' && allblock[5].innerHTML=='О') return alert('Победили нолики');
    if(allblock[6].innerHTML=='О' && allblock[7].innerHTML=='О' && allblock[8].innerHTML=='О') return alert('Победили нолики');
    if(allblock[0].innerHTML=='О' && allblock[3].innerHTML=='О' && allblock[6].innerHTML=='О') return alert('Победили нолики');
    if(allblock[1].innerHTML=='О' && allblock[4].innerHTML=='О' && allblock[7].innerHTML=='О') return alert('Победили нолики');
    if(allblock[2].innerHTML=='О' && allblock[5].innerHTML=='О' && allblock[8].innerHTML=='О') return alert('Победили нолики');
    if(allblock[0].innerHTML=='О' && allblock[4].innerHTML=='О' && allblock[8].innerHTML=='О') return alert('Победили нолики');
    if(allblock[2].innerHTML=='О' && allblock[4].innerHTML=='О' && allblock[6].innerHTML=='О') return alert('Победили нолики');
	
	if (hod > 7) alert('Ничья!');
	}
	$('#button_wrapper').click(function(){
        location.reload();
    });

}

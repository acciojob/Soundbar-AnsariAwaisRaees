//your JS code here. If required.
function play(){
	var audio = document.getElementById("audio");
	audio.play();
}

function stop() {
	var audio = docemnt.getElementById("audio");
	audio.pause();
	audio.currentTime = 0;
}
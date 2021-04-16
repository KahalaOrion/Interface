// Following The Coding Train https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW
// load song / pause+play / how to change background based on time / jump button

var song;
var button;
var jumpButton;


function setup() {
	print("setup function!")
	createCanvas(200,200);
	song = loadSound("assets/startrek.mp3", loaded);
	amp = new p5.Amplitude();
	

	song.addCue(2, changeBackground, color(0,255,0));
	song.addCue(4, changeBackground, color(255,255,0));
	song.addCue(6, changeBackground, color(255,0,0));
}

function changeBackground(col){
	
	background(col)
}

function jumpSong(){
	var len = song.duration();
	song.jump(random(len));
}

function loaded(){
	console.log("loaded");
	button = createButton("play");
	button.mousePressed(togglePlaying)	
	jumpButton = createButton("jump");
	jumpButton.mousePressed(jumpSong);
}

function togglePlaying(){
	if(!song.isPlaying()){
	song.play();
	button.html("pause");
	} else {
		song.pause();
		button.html("play");
	}
}

function draw(){
	// if (song.currentTime() > 5) {
		// background(song.currentTime()*10,0,255)
	// }

}
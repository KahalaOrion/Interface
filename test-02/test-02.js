// Amplitude Analysis: https://www.youtube.com/watch?v=NCCHQwNAN6Y&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=5&ab_channel=TheCodingTrain



var song;
var button;
var amp;


function setup() {
	print("setup function!")
	createCanvas(200,200);
	song = loadSound("assets/startrek.mp3", loaded);
	amp = new p5.Amplitude();
	
}


function loaded(){
	console.log("loaded");
	button = createButton("play");
	button.mousePressed(togglePlaying)	
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

	var vol = amp.getLevel();
	var diam = map(vol,0, 0.3, 10, 200);

	background (51);
	ellipse(width/2,height/2, diam, diam)

}
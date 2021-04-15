
let song;

function setup() {
	createCanvas(200,200);
	song = loadSound("assets/startrek.mp3", loaded); 


}

function loaded() {
	song.play();
}

function draw(){
	background(0);
	
 }


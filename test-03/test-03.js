// Oscillator!! using The Coding Train 17.6: Sound Synthesis - p5.js Sound Tutorial
 
var osc;
var button;
var playing = false;

function setup(){
	createCanvas(100,100)

	osc = new p5.Oscillator();

	osc.setType('sine');
	
	button = createButton ('play/pause');
	button.mousePressed(toggle);

}


function draw(){
	if (playing) {
		background(200,100,230);
	} else{
	background(51);
	}
}

function toggle(){
	if(!playing){
		osc.start();
		playing = true;
		osc.amp(0.2,1);
		osc.freq(440);
	} else {
		playing = false;
		osc.stop();
	}
}





// let osc, playing, freq, amp;

// function setup() {
//   let cnv = createCanvas(100, 100);
//   cnv.mousePressed(playOscillator);
//   osc = new p5.Oscillator('sine');
// }

// function draw() {
//   background(220)
//   freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
//   amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

//   text('tap to play', 20, 20);
//   text('freq: ' + freq, 20, 40);
//   text('amp: ' + amp, 20, 60);

//   if (playing) {
//     // smooth the transitions by 0.1 seconds
//     osc.freq(freq, 0.1);
//     osc.amp(amp, 0.1);
//   }
// }

// function playOscillator() {
//   // starting an oscillator on a user gesture will enable audio
//   // in browsers that have a strict autoplay policy.
//   // See also: userStartAudio();
//   osc.start();
//   playing = true;
// }

// function mouseReleased() {
//   // ramp amplitude to 0 over 0.5 seconds
//   osc.amp(0, 0.5);
//   playing = false;
// }
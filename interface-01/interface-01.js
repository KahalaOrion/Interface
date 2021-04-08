// Learning how to place shapes + how to make an arc

function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	angleMode(DEGREES);
}

function draw(){
	fill (0);
	noStroke (255);


	// rect(x,y,width,height)
	// arc(x, y, w, h, startAngle, stopANgle, [mode], [detail])
	// line(x1, y1, x2, y2)

	rect(250,190,110,640);
	noFill();
	stroke (0);
	strokeWeight(100);
	strokeCap(PROJECT);
	arc(410, 377, 350, 275, 270, 90);	
	line(500, 550, 620, 760);
	



}

// function mousePressed() {
// 	saveCanvas("sketch-01","png")
// }
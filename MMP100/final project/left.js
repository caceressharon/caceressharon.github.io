function setup() {
	createCanvas(400, 400);
	// background
	background(100, 250, 100);
}

function draw() {

	// ellipse
	noStroke();
	fill(100, 200, 200);
	ellipse(mouseX, mouseY, 25, 25);

}

function mousePressed() {
	background(255, 165, 0);
}

function mouseReleased() {
	background(100, 250, 100);
}

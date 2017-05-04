class Pixel {
	constructor(canvas) {
		this.graph = 5;
		this.x = canvas.width / this.graph;
		this.y = canvas.height / this.graph;
		this.row = 0;
		this.col = 0;
	}
}
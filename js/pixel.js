class Pixel {
	constructor(canvas) {
		this.map = [];
		this.size = 5;
		this.margin = 20;
		this.background = color(240, 240, 240);
		this.fill = color(round(random(16, 250)), round(random(16, 250)), round(random(16, 250)));
		this.stroke = this.fill;

		this.x = (canvas.width / this.graph) - this.margin;
		this.y = (canvas.height / this.graph) - this.margin;
		this.row = 0;
		this.col = 0;

		this.data;
	}
}
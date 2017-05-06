class Pixel {
	constructor(canvas) {
		this.size = 6;
		this.margin = 0.1;
		this.background = color(240, 240, 240);
		this.color = color(round(random(16, 250)), round(random(16, 250)), round(random(16, 250)));

		this.map = [];
		this.canvas = canvas.width;
		this.mcalc = round(this.canvas * this.margin / this.size);
		this.x = round((this.canvas / this.size)) - this.mcalc;
		this.y = round((this.canvas / this.size)) - this.mcalc;
		this.row = 0;
		this.col = 0;

		this.data;
	}
}
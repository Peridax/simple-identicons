var pixel;

function setup() {
    createCanvas(500, 500);
    pixel = new Pixel(canvas);
    noLoop();
    background(pixel.background || '');

    for (var n = 0; n < round(pixel.graph / 2); n++) {

        pixel.data = [];
        for (i = 0; i < pixel.graph; i++) {
            pixel.data.push(round(random(0, 1)));
        }
        pixel.map.push(pixel.data);

    }

    for (i = 0; i < pixel.graph; i++) {
        pixel.map.push(pixel.map[pixel.graph % 2 == 0 ? round(pixel.graph / 2) - i : round((pixel.graph / 2) - 2) - i]);
    }
}

function draw() {

    fill(pixel.fill);
    stroke(pixel.stroke);
    smooth();

    for (i in pixel.map) {
        for (x in pixel.map[i]) {

            if (pixel.map[i][x] == 1) {
                rect(pixel.x * pixel.row + (pixel.margin * (pixel.graph / 2)), pixel.y * pixel.col + (pixel.margin * (pixel.graph / 2)), pixel.x, pixel.y);
            }

            pixel.col++;

            if (pixel.col >= pixel.graph && pixel.row < (pixel.graph - 1)) {
                pixel.col = 0;
                pixel.row++;
            }

        }
    }

    document.body.innerHTML = '<img src="' + canvas.toDataURL("image/png") + '">';

}
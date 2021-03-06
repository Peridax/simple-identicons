var pixel;

function setup() {
    createCanvas(500, 500);
    pixel = new Pixel(canvas);
    noLoop();
    background(pixel.background || '');

    for (var n = 0; n < round(pixel.size / 2); n++) {

        pixel.data = [];
        for (i = 0; i < pixel.size; i++) {
            pixel.data.push(round(random(0, 1)));
        }
        pixel.map.push(pixel.data);

    }

    for (i = 0; i < (floor(pixel.size / 2)); i++) {
        pixel.map.push(pixel.map[pixel.size % 2 == 0 ? round(pixel.size / 2 - 1) - i : round((pixel.size / 2) - 2) - i]);
    }
}

function draw() {

    fill(pixel.color);
    noStroke();
    smooth();

    if (pixel.size < 6 || pixel.size > 9) {
        throw new Error('Pixel size must be bigger than 6 and less than 9');
    }

    for (i in pixel.map) {
        for (x in pixel.map[i]) {

            if (pixel.map[i][x] == 1) {
                rect(pixel.x * pixel.row + (pixel.mcalc * (pixel.size / 2)), pixel.y * pixel.col + (pixel.mcalc * (pixel.size / 2)), pixel.x, pixel.y);
            }

            pixel.col++;

            if (pixel.col >= pixel.size && pixel.row < (pixel.size - 1)) {
                pixel.col = 0;
                pixel.row++;
            }

        }
    }

    document.body.innerHTML = '<img src="' + canvas.toDataURL("image/png") + '">';

}
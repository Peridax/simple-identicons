var pixel, primary, pixelMap, pixelData, i, x;

function setup() {
    createCanvas(500, 500);
    background(255);
    noLoop();
    pixel = new Pixel(canvas);
    pixelMap = [];
    primary = color(round(random(16, 255)), round(random(16, 255)), round(random(16, 255)));

    for (var n = 0; n < round(pixel.graph / 2); n++) {

        pixelData = [];
        for (i = 0; i < pixel.graph; i++) {
            pixelData.push(round(random(0, 1)));
        }
        pixelMap.push(pixelData);

    }

    for (i = 0; i < pixel.graph; i++) {
        pixelMap.push(pixelMap[pixel.graph % 2 == 0 ? round(pixel.graph / 2) - i : round((pixel.graph / 2) - 2) - i]);
    }
}

function draw() {

    fill(primary);
    stroke(primary);
    smooth();

    for (i in pixelMap) {
        for (x in pixelMap[i]) {

            if (pixelMap[i][x] == 1) {
                rect(pixel.x * pixel.row, pixel.y * pixel.col, pixel.x, pixel.y);
            }

            pixel.col++;

            if (pixel.col >= pixel.graph && pixel.row < (pixel.graph - 1)) {
                pixel.col = 0;
                pixel.row++;
            }

        }
    }

}
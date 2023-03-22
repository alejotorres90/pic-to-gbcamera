const filter = (pixels, width, height, contrast, gamma, palette) => {

    const bayer8 = [
        [0, 48, 12, 60, 3, 51, 15, 63],
        [32, 16, 44, 28, 35, 19, 47, 31],
        [8, 56, 4, 52, 11, 59, 7, 55],
        [40, 24, 36, 20, 43, 27, 39, 23],
        [2, 50, 14, 62, 1, 49, 13, 61],
        [34, 18, 46, 30, 33, 17, 45, 29],
        [10, 58, 6, 54, 9, 57, 5, 53],
        [42, 26, 38, 22, 41, 25, 37, 21]
    ];

    const clampNumber = (num, a, b) => Math.min(Math.max(num, a), b);

    function applyLevels(value, brightness, contrast, gamma) {
        let newValue = value / 255.0;
        newValue = (newValue - 0.5) * contrast + 0.5;
        //newValue = newValue + brightness;
        return Math.pow(clampNumber(newValue, 0, 1), gamma) * 255;
    }

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let n = (x + y * width);
            let i = n * 4;

            let bayer = bayer8[(y) % 8][(x) % 8];

            let r = pixels[i];
            let g = pixels[i + 1];
            let b = pixels[i + 2];

            // grayscale
            let c = r * 0.3 + g * 0.59 + b * 0.11;

            // apply levels
            c = clampNumber(applyLevels(c, 0, contrast, gamma), 0, 255);

            // apply bayer
            c = clampNumber(c + ((bayer - 32) * 0.6), 0, 255);

            // quantize to four places which will determine palette color
            c = clampNumber(Math.round(c / 64), 0, 3) * 64;

            pixels[i] = c;
            pixels[i + 1] = c;
            pixels[i + 2] = c;
        }
    }

    for (let i = 0; i < pixels.length; i += 4) {
        let c = clampNumber(Math.floor(pixels[i] / 64), 0, 3);
        let r, g, b;
        [r, g, b] = palette[c];
        pixels[i] = r;
        pixels[i + 1] = g;
        pixels[i + 2] = b;
    }

    return pixels
    
}

export default filter;
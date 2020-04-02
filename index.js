const hex2RGBHSL = require('./hex-2-rgb.js');
const rgb2HEXHSL = require('./rgb-2-hex');

// console.log(process.argv[3])

const callFunction = (source, arg1, arg2, arg3) => {
    if (source === "hex") {
        return hex2RGBHSL.hexToRgbHsl(process.argv[3]);
    }
    else if (source === "rgb"){
        return rgb2HEXHSL.rgbToHexHsl(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5]));
    }
}

callFunction(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);
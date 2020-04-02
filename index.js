const hex2RGB = require('./hex-2-rgb.js');
const rgb2HEX = require('./rgb-2-hex');

// console.log(process.argv[3])

const callFunction = (source, arg1, arg2, arg3) => {
    if (source === "hex") {
        console.log(hex2RGB.hexToRgb(process.argv[3]));
    }
    else if (source === "rgb"){
        console.log(rgb2HEX.rgbToHex(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5])));
    }
}

callFunction(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);
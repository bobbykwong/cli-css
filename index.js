const hex2RGBHSL = require('./hex-2-rgb.js');
const rgb2HEXHSL = require('./rgb-2-hex');

// console.log(process.argv[3])

const callFunction = (source, arg1, arg2, arg3) => {
    if (source === "hex") {
        return hex2RGBHSL.hexToRgbHsl(arg1);
    }
    else if (source === "rgb"){
        return rgb2HEXHSL.rgbToHexHsl(parseInt(arg1), parseInt(arg2), parseInt(arg3));
    }
}


// this special console will create colored output
// console.log(`\x1b[38;2;${process.argv[3]};${process.argv[4]};${process.argv[5]}m%s\x1b[0m`, callFunction(process.argv[2], process.argv[3], process.argv[4], process.argv[5]));

for(let i=3; i<process.argv.length-3; i++){
    callFunction(process.argv[2] ,process.argv[i]);
    console.log(process.argv[i]);
}
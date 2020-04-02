function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// alert(rgbToHex(0, 51, 255)); // #0033ff


function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// alert(hexToRgb("#0033ff").g); // "51";

// console.log(process.argv[3])

const callFunction = (source, arg1, arg2, arg3) => {
    if (source === "hex") {
        console.log(hexToRgb(process.argv[3]));
    }
    else if (source === "rgb"){
        console.log(rgbToHex(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5])));
    }
}

callFunction(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);
/**
 * As i need to convert a rgb value to hex in order
 * to show every hex value on every color box, i use
 * a function to do it
 * 
 * ---converts passing 'rgb' to 'hex'
 * 
 * -----credits for stackoverflow website----
 */

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;

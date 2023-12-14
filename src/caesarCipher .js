function caesarChiper(string, shiftFactor) {
  let encryptedString = "";
  for (let i = 0; i < string.length; i++) {
    let asciiValue = string.charCodeAt(i);
    encryptedString += convertAsciiToChar(asciiValue, shiftFactor);
  }
  return encryptedString;
}

function convertAsciiToChar(value, shiftFactor) {
  let string = "";
  if ((value >= 65 && value <= 90) || (value >= 97 && value <= 122)) {
    if (value + shiftFactor > 122 && value >= 97 && value <= 122) {
      //for small letters
      for (let i = 0; i < shiftFactor; i++) {
        value++;
        if (value > 122) value = 97;
      }
      string += String.fromCharCode(value);
    } else if (value + shiftFactor > 90 && value >= 65 && value <= 90) {
      // for capital letters
      for (let i = 0; i < shiftFactor; i++) {
        value++;
        if (value > 90) value = 65;
      }
      string += String.fromCharCode(value);
    } else if (shiftFactor < 0) {
      // for negative shift factors
      if (value >= 65 && value <= 90) {
        // for capital letters
        for (let i = 0; i > shiftFactor; i--) {
          value--;
          if (value < 65) value = 90;
        }
        string += String.fromCharCode(value);
      } else if (value >= 97 && value <= 122) {
        for (let i = 0; i > shiftFactor; i--) {
          // for small letters
          value--;
          if (value < 97) value = 122;
        }
        string += String.fromCharCode(value);
      }
    } else string += String.fromCharCode(value + shiftFactor);
  } else string += String.fromCharCode(value);
  return string;
}

module.exports = caesarChiper;

// ROT13 cipher: the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Function that takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) {

  let decodedStr = "";

  for (let i=0; i<str.length; i++) {

    let cur = str.charAt(i);
    // only letters are decoded and we assume that all letters are uppercase
    if (cur.match(/[A-Z]/)) {

      // number of the current letter in the ASCII table
      let numCur = str.charCodeAt(i);
      let decodedLetter = "";

      // if the letter occurs before M (inclusive)
      if (numCur <= 77) {
        decodedLetter += String.fromCharCode(numCur + 13);
      } else { // if the letters occurs after N (inclusive)
        decodedLetter += String.fromCharCode(numCur - 13);
      }

      cur = decodedLetter;

    }

    decodedStr += cur;

  }
  
  return decodedStr;
}

function palindrome(str) {
  /*
   * 1) remove all non-alphanumeric characters;
   * 2) convert all letters to lowercase;
   * 3) check if it is palindrome: 
   *    create a strReverse and compare with str;
   */
  var nonAlpha = /[^a-zA-Z0-9]/g;
  str = str.replace(nonAlpha, "").toLowerCase();
  
  let strReverse = "";
  for (let i=str.length-1; i>=0; i--)
    strReverse += str.charAt(i);

  return (str === strReverse);
}

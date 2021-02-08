// function that checks if a given telefone number has the format of a valid US number
function telephoneCheck(str) {

  /*
   * 1) May start with a country code 1 which is followed by a space (optional);
   * 2) Starts with three digits surrounded by parenthesis OR not;
   * 3) Next we may have a space or a dash (optional);
   * 4) Next we have three more digits followed by the same as 3);
   * 5) Finally, the string is ended with 4 digits.
   */
  
  var allowedFormat = /^(1|1\s)?(\d{3}|\(\d{3}\))(-|\s)?(\d{3})(-|\s)?(\d{4})$/

  return allowedFormat.test(str);

}

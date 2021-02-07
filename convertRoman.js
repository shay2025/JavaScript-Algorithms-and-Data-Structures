function convertToRoman(num) {

    // How Roman Numerals work : https://www.mathsisfun.com/roman-numerals.html

    let roman = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }

    /*
     * 1) Get the number of units and convert the number accordingly to its roman number
     * 2) Repeat step 1) for the remaing digits (tens digits, hundreds, etc)
     */

    let convertedNum = "";
    let numDigits = num.toString().length;
    for (let i=numDigits-1; i>=0; i--) {

        // position of the digit (units, tens, hundreds, etc)
        let pos = Math.pow(10, i);

        // get digit of the current position
        // and convert to its whole number
        /* for example, if we have the number 192
         * and we wish to obtain the tens digit
         * we do ((192/10) % 10) = 9
         */

        let digit = Math.floor(((num/pos) % 10));

        if (digit == 9 || digit == 4) {

            // Taking the previous example, 
            // 90 = 100 - 10 = roman[10] + roman[9 * 10 + 10]
            convertedNum += roman[pos] + roman[digit * pos + pos];

        } else {

            // get the biggest number (property in 'roman') that comes right before 'number'
            function largestRoman(roman, number, pos) {
                let max = 0;
 
                // array of numbers declared on the object 'roman'
                let numbers = Object.getOwnPropertyNames(roman);

                for (let j=0; j<numbers.length; j++) {

                    let n = Number.parseInt(numbers[j]);
                    if (n > number) break;
                    if (max < n && n <= number)
                        max = n;
                }

                return max;

            }
 
            // while there are digits to be converted
            let rest = digit * pos;
            while (rest > 0) {
                let max = largestRoman(roman, rest, pos);
                convertedNum += roman[max];
                rest -= max;
            }
            
        }
    }
    
    return convertedNum;
}

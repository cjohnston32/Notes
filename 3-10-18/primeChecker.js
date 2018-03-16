/** Pseudocode
 * Determine if a given number is prime or not
 *  Prime: Divisible only by one and itself
 *  Option 1: You only need to test if the given number is divisible by each integer up to that number (not including it)
 *      Start at 2, since all numbers are divisible by one we are only testing if a number is ONLY divisible by itself
 */

 function primeChecker(number) {
     for (var i = 2; i < number; i++) {
         if (number % i === 0 || number === 1) {
             return false;
         }
     }
     return true;
 }
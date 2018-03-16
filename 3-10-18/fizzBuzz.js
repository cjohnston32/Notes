/* Pseudocode
1) Need to print numbers 1-100 in the console
2) For multiples of three, print 'Fizz' instead
3) For multiples of five, print 'Buzz'
4) For multiples of three and five, print 'FizzBuzz'

for loop (1-100)
    if (current number is multiple of 3&5)
        print 'FizzBuzz'
        return
    else if (current number is multiple of 5)
        print 'Buzz'
    else if (current number is multiple of 3)
        print 'Fizz'
    else
        print number
 */
var number;
function mult3(number) {
    return (number%3===0)? true: false;
}

function mult5(number) {
    return (number%5===0)? true: false;
}

function mult35(number) {
    return (mult5(number) && mult3(number))? true: false;
}

 for (var i=1; i<101; i++) {
     if (mult35(i)) {
         console.log('FizzBuzz');
     }
     else if(mult3(i)) {
        console.log('Fizz');
     }
     else if(mult5(i)) {
         console.log('Buzz');
     }
     else {
         console.log(i);
     }
 }
/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`)
}
greet('Mohammed');

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 == 0){
    return false
  }
  else {
    return true
  }
}

console.log(isOdd(5));


/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
//   let tally=1;
//   let count=1;
//     if(n===1){
//     tally = 0;
//     return tally
//     }
//     else{
//     while (n-count>1){
//     n=n-count;
//     count=2;
//     tally=tally+1;
//     }
    
//     return tally
//   }
// }

// console.log(oddsSmallerThan(0));
// console.log(oddsSmallerThan(10));
// console.log(oddsSmallerThan(11));
return Math.trunc(n/2)
}



/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  let num = 1
  if (n % 2 == 0){
    num=n*2;
  }

  else {
    num=n ** 2
  }

return num

}

console.log(squareOrDouble(3))


module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };

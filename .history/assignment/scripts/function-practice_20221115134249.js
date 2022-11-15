console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello, (name)!"', helloName(`Dane`));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log(`Test addNumbers, 3 + 5 =`, addNumbers(3, 5));
console.log(`Test addNumbers, 4 + 9 =`, addNumbers(4, 9));
console.log(`Test addNumbers, 89 + 137 =`, addNumbers(89, 137));



// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree){
  return numOne * numTwo * numThree;
}
console.log(`Test multiplyThree, 4 * 8 * 2 =`, multiplyThree(4, 8, 2));
console.log(`Test multiplyThree, 19 * 23 * 67 =`, multiplyThree(19, 23, 67));
console.log(`Test  multiplyThree, 453 * 842 * 106 =`, multiplyThree(453, 842, 106));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

const array1 = [];

function getLast( array ) {
  if 
  return array1[array1.length - 1];
}

console.log(`Test getLast, should say 19:`, getLast(array.push(1, 4, 6, 19)));
console.log(`Test getLast, should say 48:`, getLast(array1.push(12, 24, 36, 48)));
console.log(`Test getLast, should say 0:`, getLast(array1.push(123, 456, 789, 0)));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  
}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

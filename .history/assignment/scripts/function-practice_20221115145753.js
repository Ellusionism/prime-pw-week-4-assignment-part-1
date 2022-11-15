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

function getLast( array ) {
  return array[array.length - 1];
}

console.log(`Test getLast, should say 19:`, getLast([1, 4, 6, 19]));
console.log(`Test getLast, should say 48:`, getLast([12, 24, 36, 48]));
console.log(`Test getLast, should say 0:`, getLast([123, 456, 789, 0]));
console.log(`Test getLast, should say undefined:`, getLast([]));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){
  for (i=0; i<array.length; i++){
    if ( array[i] === value ){
      return true;
    }
  }
  return false;
}

console.log(`Test find, should say true:`, find(5, [1, 4, 5, 19]));
console.log(`Test find, should say false:`, find(6, [8, -2, 19, 4]));
console.log(`Test find, should say true:`, find(-194, [86, 435, -712, -194]));
console.log(`Test find, should say false:`, find(-1, [1, 8, 99, 42]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (i=0; i<string.length; i++) {
    if (string[i].charAt(0) === letter) {
      return true;
    }
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(numbers) {
  let sum = 0;
  for (i=0; i<numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(`Test of sumAll, should return 10:`, sumAll([1, 2, 3, 4]));
console.log(`Test of sumAll, should return 456:`, sumAll([123, -456, 789]));
console.log(`Test of sumAll, should return -2:`, sumAll([4, 0, -9, 3]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveArray(array) {
  let newArray = [];
  for (i=0; i<array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i])
    }
  }
  return newArray;
}

const arrayOne = [-3, -2, -1, 0, 1, 2, 3];
const arrayTwo = [-14, 93, 18, -22, 55, -26, -40, 67];
const arrayThree = [0, -10, -20, -30, -40, -50];

console.log(`Test of positiveArray, original array:`, arrayOne,  `positive array:`, positiveArray(arrayOne));
console.log(`Test of positiveArray, original array:`, arrayTwo,  `positive array:`, positiveArray(arrayTwo));
console.log(`Test of positiveArray, original array:`, arrayThree,  `positive array:`, positiveArray(arrayThree));



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// The problem I picked was "You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false if not."

// The starter code it gave me was: const zeroFuel = (distanceToPump, mpg, fuelLeft) => {};

//My solution was: 
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};

console.log(`Test of zeroFuel, should return true:`, zeroFuel (50, 25, 2))
console.log(`Test of zeroFuel, should return false:`, zeroFuel (50, 25, 2))
console.log(`Test of zeroFuel, should return true:`, zeroFuel (50, 25, 2))
console.log(`Test of zeroFuel, should return true:`, zeroFuel (50, 25, 2))
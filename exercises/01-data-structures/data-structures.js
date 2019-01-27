/**
 * Create an array with any three values and the return the array
 *
 * @param  {[string]}  string
 * @return {array}
 */

function createAnArray() {
  const array = [];
  /*** Add three items to the array ****/
  return array;
}

/**
 *  Return BMW by accessing a property from the array of cars
 *
 *  @param  {none}
 *  @return {varible}
 */

function accessingAnArray() {
  const cars = ['BMW', 'Honda', 'Civic'];
}

/**
 * loop through the array using a for loop and return the highest number
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 * highestNumber([1, 2, 3]) // [3]
 * highestNumber([5, 1, 2, 3, 10]) // [10]
 *
 **/
function highestNumber(array) {}

/***
 * Combine an array by using the spread operator
 * @param  { array, arary }
 *  @returns { array }
 *
 **/

function combineArray(array1, array2) {}
/**
 * A palindrom is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 * Checks to see if a string is a palindrome.
 * Use the split and join methods to solve this problem
 * @param  {[string]}  string
 * @return {Boolean}
 */
function isPalindrome(str) {}

/***
 *  Make an object that represents a dog called myDog which contains the properties "name"
 *  (a string), "legs", "tails" and "friends"
 */

function createDogObject() {}

/**
 * Access testObj and return the property ballcap
 *
 *
 */
function accessObject() {
  const testObj = {
    hat: 'ballcap',
    shirt: 'jersey',
    shoes: 'cleats'
  };
  // Only change code below this line

  let hatValue = testObj; // Change only this line of code

  return hatValue;
}
/***
 *   The function should return an object with your first name and last name
 *   i.e let name = {
 *     firstName:'Jamal',
 *    lastName:'Taylor'
 *   }
 *
 */
function createStudentObject() {}

/**
 *  Add three friends to the array nested inside the myDog Object
 *
 */

function addFriendsForMyDog() {
  const myDog = {
    name: 'Happy Coder',
    legs: 4,
    tails: 1,
    friends: ['']
  };
  // Only change code below this line.

  return myDog;
}

/**
 *  Using Object.keys return all the properties contained in the object
 *  the function should return name,legs,tails, and friends in an array
 */

function returnListOfCountries() {
  let myDog = {
    name: 'Happy Coder',
    legs: 4,
    tails: 1,
    friends: ['freeCodeCamp Campers']
    // Only change code below this line.
  };
}

module.exports = {
  createAnArray,
  accessingAnArray,
  highestNumber,
  isPalindrome,
  createDogObject,
  createStudentObject,
  addFriendsForMyDog,
  returnListOfCountries
};

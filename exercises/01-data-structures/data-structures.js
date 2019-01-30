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

/**
 * Combine an array by using the spread operator
 * @param  { array, array }
 * @returns { array }
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 *
 *
 **/

function combineArray(array1, array2) {}

/**
 * A palindrom is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 * Checks to see if a string is a palindrome.
 * Use the split and join methods to solve this problem
 * @param  {[string]}  string
 * @return {Boolean},
 *
 */

function isPalindrome(str) {}

/**
 * @param  {[string]}  string
 * @return {object},
 *  Make an object that represents a dog called myDog which contains the properties "name"
 *  (a string), "legs", "tails" and "friends" should be an array with a list of friends names
 *  @example  the function should return an object that resembles this:
 *** myObj = {
    legs: 4,
     tails: 1",
    };
 *   
 ****/

function createDogObject() {}

/**
 * Access testObj and return the property ballcap in a variable
 * @return {object},
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

/**
 *   Update the object to contain your first and last name.
 *   Add at least three skills inside the array
 *   @return {array}
 */

function createStudentObject() {
  const student = {
    firstname: '',
    lastname: '',
    skills: ['']
  };
  // Only change code below this line.

  return student;
}

/**
 *  Using Object.keys return all the properties contained in the object
 *  the function should return name,legs,tails, and friends in an array
 *
 *  @return {array}
 */

function returnObjectProperties() {
  const dog = {
    tail: 1,
    legs: 4,
    friends: ['Rusty', 'Sparky'],
    name: 'Rocket'
  };
  //Add code here
  //hint you need to return an array
}

/**
 * The function accepts two arguments and returns a combined object
 * @param  {obj1} {obj2}
 * @return {object},
 *
 */

function combineObject(obj1, obj2) {}

module.exports = {
  createAnArray,
  accessingAnArray,
  highestNumber,
  isPalindrome,
  createDogObject,
  createStudentObject,
  returnObjectProperties,
  combineArray,
  accessObject,
  combineObject
};

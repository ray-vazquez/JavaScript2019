/**
 * Add three programming languages and return the languages array
 * @return {array}
 */

function createAnArray() {
  var array = ["hello", "again", "world"];
  /*** Add three items to the array ****/
  return array;
}

/**
 *  Return BMW by accessing a property from the array of cars
 *
 *  @return {string} BMW
 */

function accessingAnArray() {
  var cars = ["BMW", "Honda", "Civic"];
  return cars[0];
}

/**
 * Loop through the array using a for loop and return the highest number
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 * highestNumber([1, 2, 3]) // [3]
 * highestNumber([5, 1, 2, 3, 10]) // [10]
 *
 **/
function highestNumber(array) {
  var largerNum = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > largerNum) {
      largerNum = array[i];
    }
  }
  return largerNum;
}


/**
 * Combine an array by using the spread operator
 * @param  {array} array1
 * @param  {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

function combineArray(array1, array2) {
  var newArr = [...array1, ...array2];
  return newArr;
}

/**
 * A palindrom is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, nurses or run.
 * Checks to see if a string is a palindrome.
 * Use the split and join methods to solve this problem
 * @param  {[string]}  string
 * @return {Boolean}
 *
 */

function isPalindrome(str) {
  return (str.split('').reverse().join('').toLowerCase() === str ? true : false)
}

/**
 * Make an object that represents a dog called myDog which contains the keys
 * "name", "legs", "tails" and "owners". Each should have a value.
 * "Owners" should be an array with a list of owners names.
 * @return {object}
 */

function createDogObject() {
  var myDog = {
    name: "Reggie",
    legs: 4,
    tails: 2,
    owners: ["Ramon", "Dominique"]
  };
  return myDog;
}

/**
 * Access testObj and return the value for hat inside clothes (which should be ballcap)
 * @return {string} type of hat
 */
function accessObject() {
  var clothes = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
  };
  // Only change code below this line

  var hatValue = clothes.hat; // Change only this line of code

  return hatValue;
}

/**
 *   Update the object to contain your first and last name.
 *   Add at least three skills inside the array
 *   @return {object} student
 */

function createStudentObject() {
  var student = {
    firstname: "",
    lastname: "",
    skills: []
  };
  // Only change code below this line.
  student.firstname = 'Ramon'
  student.lastname = 'Vazquez'
  student.skills = ['HTML','CSS', 'JavaScript']
  return student;
}

// alternatively create student object outside function to make reusable
// var ramon = createStudentObject()

// var ramon = createStudentObject('Ramon', 'Vazquez', ['HTML','CSS', 'JavaScript'])

// ramon.firstname = 'Ramon';
// ramon.lastname = 'Vazquez'; 
// ramon.skills = ['HTML','CSS', 'JavaScript']
// console.log(Object.entries(ramon))


/**
 *  Using Object.keys return all the properties contained in the object.
 *  The properties are name, legs, tails and friends.
 *
 *  @return {array}
 */

function returnObjectProperties() {
  var dog = {
    tail: 1,
    legs: 4,
    friends: ["Rusty", "Sparky"],
    name: "Rocket"
  };
  //Add code here
  //hint you need to return an array

  var dogKeys = Object.keys(dog);
  return dogKeys;
}

/**
 * Combines two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 */

function combineObject(obj1, obj2) {
  var newObj = { ...obj1, ...obj2 };

  return newObj;
}

/***
 *
 * @return {array}
 */

function removeDuplicates() {
  // Use Sets to remove duplicate elements from the array
  var numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
  var unique = new Set(numbers);
  var arr = [];

  for (var i of unique) {
    arr.push(i);
  }
  return arr;
  /** Return the an array of unique values */
}

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
  combineObject,
  removeDuplicates
};

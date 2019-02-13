/**
 *  Upper case the first letter in each array element
 * @param  { array }
 * @return {array}
 * @example
 * upperCaseEachElementInArray(['javascript','html','css']) // ['Javascript','HTML','CSS']
 * upperCaseEachElementInArray(['Brad','Tom']) // ['Brad','Tom']
 *
 *
 */

function upperCaseEachElementInArray(array) {
  var arr = [];

  for (var i = 0; i < array.length; i++) {
    var newWord = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    arr.push(newWord);
  }
  return arr;
}

/**
 *  Use the Spread Operator to add an additional name (middle name) to an object
 *
 * @param  {Object} names an object representing a person, where each key is a type of name
 * e.g. {firstName:'Tom',lastName:'Jerry'}
 * @param {string} middleName
 * @return {Object} a clone of the names object with a middle name added to it
 * @example
 * addMiddleNameToObject({firstName:'Tom',lastName:'Jerry'},'Harris')
 * // {firstName:'Tom',MiddleName:'Harris', lastName:'Jerry'}
 */

function addMiddleNameToObject(names, middleName) {
  var obj = {};
  for (var item in names) {
    obj[item] = names[item];
  }
  var middleName = (obj["middleName"] = middleName);

  return {...obj, middleName};
}

/**
 * Use split method to return an array on white space
 * @param  { string }
 * @return { array }
 * @example
 * stringToArrayConverter("I went home.");
 * // ["I", "went", "home."]
 */

function stringToArrayConverter(str) {
  return str.split(" ");
}
/**
 *
 * @param  { string }
 * @return { array }
 * @example
 */

/**
 * Tally the number of occurrences of each programming language in an array of languages.
 * @param {array} languages
 * @return {Object} an object where each key represents a language and its value is
 * the number of occurrences.
 * @example
 * dynamicObject(["Javascript","Javascript","HTML","HTML", "CSS","CSS","PHP"])
 * { "Javascript":2, "HTML":2, "CSS":2, "PHP":1 }
 */

function dynamicObject(array) {
  var obj = {};
  for (var item of array) {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  return obj;
}

module.exports = {
  upperCaseEachElementInArray,
  addMiddleNameToObject,
  stringToArrayConverter,
  dynamicObject
};

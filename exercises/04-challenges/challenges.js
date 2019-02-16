/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *  @param  {string}
 *  @return {string}
 *
 *  @example confirmEnding("Bastian", "n") true
 *  @example confirmEnding("Connor", "n")  false
 *
 */

var confirmEnding = (string, str) => {
  return string.slice(-1) === str ? true : false;
};

/**
 *  Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 *  @param  {string}
 *  @return {string}
 *
 *  @example repeatStringNumTimes("*", 3)
 *  @example repeatStringNumTimes("abc", 3) should return "abcabcabc"
 *  @example repeatStringNumTimes("abc", -2) should return ""
 */

var repeatStringNumTimes = (string, str) => {
  // var num = parseInt(str);
  // for (var i = 1; i < num; i++) {
  //   if (num < 0) {
  //     return (" ");
  //   } else {
  //     return (string += string);
  //   }
  // }
};

/**
 *  Find the Longest Word in a String
 *  @param {string}
 *  @return {string}
 *
 *  @example findLongestWordLength("Google do a barrel roll")  should return 6
 *  @example findLongestWordLength("May the force be with you") should return 5
 *
 */

var findLongestWordLength = string => {
  var arr = [...string.split(" ")];
  var longestWordLength = [];
  arr.forEach(i => {
    longestWordLength.push(i.length);
  });
  return Math.max(...longestWordLength);
};

module.exports = {
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes
};

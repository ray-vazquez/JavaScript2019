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
  for (let i = 0; i < str; i++) {
    if (typeof str === "number" && str > 0) {
      return string.repeat(str);
    } else if (typeof str === "number" && str < 0) {
      return "";
    } else {
      return "something went way wrong";

    }
  }
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
  var words = [];

  arr.forEach(i => {
    words = [...words, i.length]
  });
  return Math.max(...words);
};

module.exports = {
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes
};

/**
 * This is the unit test for the exercise found in *exercises/02-debugging/command-line.js*
 * We run it to see if your answers are correct.
 */

/**
 * The *require* function loads a third party library that we need called Chai.
 * What we are doing is kind of like when you use a <script> tag in the browser.
 */
var { expect } = require("chai");

/**
 * We are now importing the functions we wrote in *exercises/02-debugging/command-line.js*
 */
var {
  add,
  multiply,
  getMessage
} = require("../../exercises/02-debugging/command-line");

/**
 * The following tests your code to see if your answers are correct.
 * The *describe* blocks output a descriptive title in the command line.
 * The *it* blocks describe what the outcome of the test should be.
 * the *expect* function compares the result of what you wrote
 * with the correct answer and sees if your answer is right.
 *
 * To start the debugger in VSCode, change the first *describe()* to *describe.only()*.
 * Then open the Debugger panel and press on the green arrow at the top left.
 * @see https://www.youtube.com/watch?v=9wP4SDSr-ko
 */

describe("Command Line Exercises", function() {
  /* To use debugger, change to describe() above to describe.only() */
  describe("add", function() {
    it("should add two numbers", function() {
      var sum = add(2, 3);
      expect(sum).to.equal(5);
    });
  });
  describe("multiply", function() {
    it("should multiply two numbers", function() {
      var product = multiply(2, 3);
      expect(product).to.equal(6);
    });
  });

  describe("getMessage", function() {
    it("should return a large string of text", function() {
      var message = getMessage();
      var correctAnswer = `...........................
1 apple
2 kiwi
3 banana
4 orange
5 blueberry
6 cranberry
7 mango
8 passion fruit
9 avocado
10 cherry
...........................`;
      expect(message).to.equal(correctAnswer);
    });
  });
});

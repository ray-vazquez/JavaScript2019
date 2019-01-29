const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const {
  createAnArray,
  accessingAnArray,
  highestNumber,
  combineArray,
  isPalindrome
} = require('../../exercises/01-data-structures/data-structures.js');

describe('Data structures', () => {
  it('should return an array with three values', () => {
    const newArr = createAnArray();
    expect(newArr.length).to.equal(3);
  });
  it('it should return a BMW', () => {
    const car = accessingAnArray();
    expect(car).to.equal('BMW');
  });
  it('it should return the highest number in the array', () => {
    const number = highestNumber([1, 2, 3, 4, 10, -1]);
    expect(number).to.equal(10);
  });
  it('it should merge both arrays', () => {
    const combinedArray = combineArray(['HTML'], ['CSS']);
    expect(combinedArray).to.be.equalTo(['HTML', 'CSS']);
  });
  it('should return true or false if the word isa palidrome', () => {
    const eyeResult = isPalindrome('eye');
    const notAPalindrome = isPalindrome('not a palindrome');
    const nope = isPalindrome('nope');

    expect(eyeResult).to.be.equal(true);
    expect(notAPalindrome).to.be.equal(false);
    expect(nope).be.equal(false);
  });
});

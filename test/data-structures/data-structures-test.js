const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const {
  createAnArray,
  accessingAnArray,
  highestNumber,
  combineArray,
  isPalindrome,
  createStudentObject,
  returnObjectProperties,
  combineObject
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
  it('it should return a object', () => {
    const dog = createDogObject();
    expect(dog).to.be.an('object');
    expect(dog).to.have.all.keys('legs', 'tails', 'friends');
  });
  it('it should return ballcap', () => {
    const obj = accessObject();
    expect(obj).to.equal('ballcap');
  });
  it('it should return an object that contains an array that has three values', () => {
    const student = createStudentObject();
    expect(student.skills.length).to.equal(3);
  });
  it('it should return all object properties', () => {
    const objectProperties = returnObjectProperties();
    expect(objectProperties.length).to.equal(4);
  });
  it('it should combine two objects and return a single object', () => {
    const obj1 = {
      firstName: 'Clark'
    };
    const obj2 = {
      lastName: 'Kent'
    };
    const combinedObj = combineObject(obj1, obj2);
  });
});

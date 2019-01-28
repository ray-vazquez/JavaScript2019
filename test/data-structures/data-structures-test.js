var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const {
  createAnArray
} = require('../../exercises/01-data-structures/data-structures.js');

describe('Data structures', () => {
  it('should return an array with three values', () => {
    const newArr = createAnArray();
    expect(newArr.length).to.equal(3);
  });
});

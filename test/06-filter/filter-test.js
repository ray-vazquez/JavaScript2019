const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));
const { filter, deleteUser } = require("../../exercises/06-filter/filter");

describe("filter", () => {
  it("tests filter will remove values that meet a given condition", () => {
    let idx = 0;
    const originalArray = [4, 18, 50, 33];
    const notDivisibleByTen = filter(originalArray, (number, index, array) => {
      expect(index).to.equal(idx);
      expect(array).to.be.equalTo(originalArray);
      idx += 1;
      return number % 10 !== 0;
    });
    expect(notDivisibleByTen).to.equalTo([4, 18, 33]);
  });
  it("should remove the user object with the matching id", () => {
    const users = [
      {
        id: 1024,
        username: "smile134",
        email: "smile134@example.com"
      },
      {
        id: 1025,
        username: "newyorkfarmer",
        email: "johndoe@example.com"
      },
      {
        id: 1026,
        username: "redsocksfan#1",
        email: "massusa@example.com"
      }
    ];
    const user = deleteUser(users, 1025);
    expect(user).to.deep.equal([
      {
        id: 1024,
        username: "smile134",
        email: "smile134@example.com"
      },
      {
        id: 1026,
        username: "redsocksfan#1",
        email: "massusa@example.com"
      }
    ]);
  });
});

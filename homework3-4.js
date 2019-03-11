var _ = require('lodash')


let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

const addSalaries = obj => {
  let sales = company.sales;
  let development = company.development;
  let internals = company.internals;

  [sales, development, internals].reduce(function (acc, curVal, index) {
    console.log(acc[sale)
  
  return acc
  }, {})
  
}

console.log(addSalaries(company));




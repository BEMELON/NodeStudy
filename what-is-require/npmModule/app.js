console.log('Starting app.js');

// 1. find System for module
// 2. find npmModule for modules
const _ = require('lodash');


console.log(_.isString(true)); // Boolean isn't String
console.log(_.isString('BEMELON'));

// remove duplicate array or String
var filteredArray = _.uniq(['BEMELON', 1, 'BEMELON', 1, 2, 3, 4]);
console.log(filteredArray);

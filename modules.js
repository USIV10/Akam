const names = require('./mod1.js');
const sayHi = require('./mod2.js');

const data = require('./alt-exports')

const addValues = require('./mind-blowing')

console.log(data);
 sayHi('Susan');
sayHi(names.David);
sayHi(names.Sam);    
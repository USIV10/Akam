/* const names = require('./mod1.js');
const sayHi = require('./mod2.js');

const data = require('./alt-exports')

const addValues = require('./mind-blowing')

console.log(data);
 sayHi('Susan');
sayHi(names.David);
sayHi(names.Sam);    */

/* const _ = require('lodash');
const items = [1, [2, [3, [4, ]]]];
const newItems = _.flattenDeep(items);
 console.log(newItems);  */

 const bar = () => console.log('bar')
const baz = () => console.log('baz')
const foo = () => { console.log('foo')
 bar()
baz()
} 
foo()
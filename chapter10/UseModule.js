const myModule = require('./MyModule.js');
require('./MyModule.js');
myModule.api();
//myModule.internalAPI();
console.log('Data ',myModule.DATA);
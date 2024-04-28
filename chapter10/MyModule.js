const api = ()=>console.log('API');
const internalAPI =()=>console.log('Internal API');
console.log('My module initialized');
exports.api = api;
exports.DATA = "Hello";
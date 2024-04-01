
//IIFE->Immeidately invoking function expression
//console.log('MyModule ',window.MyModule);
window.MyModule = window.MyModule || (function()
{
    console.log('Moudle loaded');
    function api()
    {
        console.log('Api ');
    }
    return {
        api
    };
})();
//console.log('MyModule==> ',window.MyModule);
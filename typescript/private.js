var MyBox = /** @class */ (function () {
    function MyBox(data) {
        this.x = data;
    }
    return MyBox;
}());
var obj = new MyBox(10);
var data = obj;
console.log("data ", data.x);

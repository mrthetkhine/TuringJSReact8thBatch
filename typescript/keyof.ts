type Point = { x: number; y: number };
type P = keyof Point;
let data:P = "x";
data = "y";
console.log(data);
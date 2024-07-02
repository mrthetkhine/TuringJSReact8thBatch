type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
 function isEven(x:number)
 {
    return x %2==0;
 }
 isEven.description = "isEven function";
 doSomething(isEven);
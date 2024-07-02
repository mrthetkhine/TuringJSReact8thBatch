type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return true;
};
 
//console.log(!f1());
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};
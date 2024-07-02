function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
console.log(longest([1,2,3],[1,2]));
console.log(longest("Hello","hi"));
//console.log(longest(12,34));
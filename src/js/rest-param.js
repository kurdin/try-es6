console.log('---------------------------------------------------------------------------------------------------');
console.log('Rest params');
console.log('---------------------------------------------------------------------------------------------------');

function restParam (a, ...b) {
  return a * b.length;
}

console.log(restParam(10, 'hello, world!', 'foo', 'bar', 'baz'));


console.log('---------------------------------------------------------------------------------------------------');

console.log('---------------------------------------------------------------------------------------------------');
console.log('Default param');
console.log('---------------------------------------------------------------------------------------------------');


function bar (name = 'guest') {
  console.log('Hello, ' + name + '!');
}

bar('world');


console.log('---------------------------------------------------------------------------------------------------');

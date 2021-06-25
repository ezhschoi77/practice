var result = 0;

console.time('duration_sum');

for (let index = 0; index < 1000; index++) {
    result += index;
}

console.timeEnd('duration_sum');

console.log('Result : %d', result)


console.log('file name: %s', __filename);
console.log('file path: %s', __dirname);


var Person = {name: 'abcd', age: 20};
console.dir(Person);

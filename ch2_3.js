console.log('argv param number:' + process.argv.length);
console.dir(process.argv);

if (process.argv.length > 2) {
    console.log('3rd param:' + process.argv[2]);
}

process.argv.forEach(function(item, index) {
    console.log(index + ': ', item);
});

console.dir(process.env);

console.log('os env variable:' + process.env['OS']);
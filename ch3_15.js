function add(a, b, callback) {
    var result = a + b;
    callback(result);

    var count = 0;
    var history = function() {
        count++;
        return a + ' + ' + b + ' = ' + result;
    };
    return history;
}

var addhistory = add(20, 100, function(result) {
    console.log('callback!!');
    console.log('a+b =' + result );
});

console.log('res:' + addhistory);
var fs = require('fs');
var readline = require('readline');
var filename = './addr.txt';

var infile = fs.createReadStream(filename, {flags: 'r'});
var reader = readline.createInterface(infile);
reader.on('line', function(line) {
    //console.log('line: ' + line);
    var name = line.split(' ')[0];
    console.log('name:' + name);
});
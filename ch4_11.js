var rs = require('fs');

var infile = rs.createReadStream('./output.txt', {flags: 'r'});
var outfile = rs.createWriteStream('./output2.txt', {flags: 'w'});

infile.on('data', function(data) {
    console.log('read data:', data);
    outfile.write(data);
});

infile.on('end', function() {
    console.log('file reading finish');
    outfile.end(function() {
        console.log('file writing finish');
    });
});
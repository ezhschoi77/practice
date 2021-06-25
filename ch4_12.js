var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.access(outname, function(exists) {
    if (exists) {
        fs.unlink(outname, function(err) {
            if (err) throw err;
            console.log('exit file[' + outname + '] deleted');
        });
    }

    var infile = fs.createReadStream(inname, {flags: 'r'});
    var outfile = fs.createWriteStream(outname, {flags: 'w'});
    infile.pipe(outfile);
    console.log('file copy [' + inname + ']->[' + outname + ']')
});
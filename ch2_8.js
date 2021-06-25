
var path = require('path');

var dir = ['users', 'aaa', 'bbb'];
var docDir = dir.join(path.sep);
console.log('doc dir:' + docDir);

var curPath = path.join('/Users/aaa', 'notepad.exe');
console.log('file path: ' + curPath);

var filename = 'c:\\aaaa\\bb\\cc.txt';
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('dir: %s , file: %s, ext: %s', dirname, basename, extname);
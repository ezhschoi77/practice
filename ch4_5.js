var fs = require('fs');

//파일을 동기식 IO로 읽기
var data = fs.readFileSync('./calc2.js', 'utf8');
//console.log(__dirname);

console.log(data);
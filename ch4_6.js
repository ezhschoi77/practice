var fs = require('fs');

//파일을 비동기식 IO로 읽기
fs.readFileSync('./calc2.js', 'utf8', function(err, data) {
    console.log('data:'+ data);
    if (err) {
        console.log(err);
    }
});

console.log('파일읽기 요청');
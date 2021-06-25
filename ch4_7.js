//동기식 readFileSync, writeFileSync
//비동기식 readFile, writeFile

var fs = require('fs');

fs.writeFile('./output.txt', 'Hello World!!', function(err){
    if (err)
    {
        console.log('Err:' + err);
    }
    console.log('write success!!');
});
const fs = require('fs');

// r,w,w+,a+
fs.open('./output.txt', 'a+', function(err, fd) {
    if (err) throw err;

    const buf = '안녕\n';

    fs.writeFile(fd, buf, err => {
        if (err) {
            console.error(err);
            return;
        }
        fs.close(fd, function() {
            console.log('file write');
        });
    });
    // fs.writeFile(fd, buf, 0, buf.length, null, function(err, written, buffer) {
    //     if (err) throw err;

    //     console.log(err, written, buffer);

    //     fs.close(fd, function() {
    //         console.log('file write');
    //     });
    // });
});
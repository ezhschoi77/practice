const fs = require('fs');

fs.open('./output.txt', 'r', function(err, fd) {
    if (err) {
        console.error(err);
        return;
    }

    var buf = new Buffer(100);

    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
        if (err) throw err;

        var inStr = buffer.toString('utf8', 0, bytesRead);
        console.log('data:%s', inStr);

        console.log(err, bytesRead, buffer);
        fs.close(fd, function() {
            console.log('output.txt read complete');
        })
    })
});
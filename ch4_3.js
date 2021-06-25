process.on('tick', function(count) {
    console.log('tick event: %s', count);
});

setTimeout(function() {
    console.log('2초후 tick evnet 전달');
    process.emit('tick', '3');
}, 2000);
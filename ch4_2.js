process.on('exit', function() {
    console.log('exit event');
});

setTimeout(function() {
    console.log('2초후 종료 시도');
    process.exit();
}, 2000);
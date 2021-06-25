var os = require('os');

console.log('hostname:' + os.hostname());
console.log('mem: %d / %d', os.freemem(), os.totalmem());
console.log('cpus:' + console.dir(os.cpus()));
console.log('networks:' + console.dir(os.networkInterfaces()));
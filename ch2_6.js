var nconf = require('nconf');

nconf.env();

console.log('OS env:' + nconf.get('OS'));
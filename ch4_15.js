var winston = require('winston');//log module
var winstonDaily = require('winston-daily-rotate-file');//daily log module
var moment = require('moment');//시간처리 모듈
const { debug } = require('winston');

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}


// loglevel
// 0.debug, 1.info, 2.notice, 3.warning, 4.error
// 5.crit, 6.alert, 7.emerg
var logger = new (winston.logger) ({
    transport: [
        new (winstonDaily)({
            name: 'info-file',
            filename: './log/server',
            datePattern: '_yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'info',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            name: 'exception-file',
            filename: './log/exception',
            dataPattern: '_yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'error',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});

debug('ddddd');
info('infoinfo');
error('error');
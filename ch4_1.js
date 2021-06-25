var url = require('url');

const testUrl = 'https://m.naver.com/search.naver?query=steve_jobs&where=m&sm-mtp_hty';

var curURL = url.parse(testUrl);

var curStr = url.format(curURL);

console.log('주소문자열: %s', curStr);
console.dir(curURL);

// 파라메터 구분

var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('query: %s', param.query);
console.log('param: %s', querystring.stringify(param));
    

var ENC_UTF8 = 'utf-8';

// buffer 크기 지정 후 문자열 쓰기
var output = '안녕1!';
var buffer1 = Buffer.alloc(10);
buffer1.write(output, ENC_UTF8);
console.log('buffer1: %s', buffer1.toString());

// 버터 객체를 문자열을 이용해 작성
var buffer2 = Buffer.from('안녕2!', ENC_UTF8);
console.log('buffer2: %s', buffer2.toString());

// 타입을 확인
console.log('buffer type: %s', Buffer.isBuffer(buffer1));

// 버퍼 객체에 들어 있는 문자열 데이터를 문자열 변수로 만든다.
var byteLen = Buffer.byteLength(output);
var str1 = buffer1.toString(ENC_UTF8, 0, byteLen);
var str2 = buffer2.toString(ENC_UTF8);

//첫번째 버퍼 객체의 문자열을 두번째 버퍼 객체로 복사
buffer1.copy(buffer2, 0, 0, byteLen);
console.log('복사한 문자열: %s', buffer2.toString(ENC_UTF8));

//두개의 버퍼를 붙여줌
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('concat: %s', buffer3.toString(ENC_UTF8));
// constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// prototype
Person.prototype.walk = function(speed) {
    console.log(speed + 'km 속도로 걸어간다');
}

var p1 = new Person('aa', 3);
var p2 = new Person('bb', 4);

console.log(p1.name + '객체 walk(10) 호출');

p1.walk(10);
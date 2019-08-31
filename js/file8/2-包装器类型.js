//Boolean Number  String
//Boolean()
//Number()
//String()
var n = new Number(123);
console.log(n);  //Number的实例
console.log(typeof n); //object
console.log(n instanceof Number);
console.log(n instanceof Object);
var m = 123;
console.log(m);  //基本数据类型number
console.log(typeof m); //number
console.log(m instanceof Number);//false
console.log(m instanceof Object);//false

//将基本数据类型的number/boolean/string转成对应的包装器类型
var o = new Object(123);
console.log(o);
console.log(typeof o);
console.log(o instanceof Number);
console.log(o instanceof Object);

var boolean = new Boolean(0);
console.log(boolean)
console.log( typeof boolean);














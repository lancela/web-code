//
//值传递与址传递
var a =1;
var b =a;
console.log(a,b);
b = 3;
console.log(a,b);

var obj = {

	name:'as',
	age:12
	
};
var obj2 = obj;
console.log(obj,obj2);
obj2.gender = '男';
console.log(obj,obj2);

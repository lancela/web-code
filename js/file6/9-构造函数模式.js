//构造函数模式
//自定义构造函数
function sayName(){
	console.log(this.name);
}
function Person(name,age,gender){
	//new Person()
	//this=>new 关键字创建的新实例
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.sayName = sayName;
	//return o
}
var p1 = new Person('zhangsan',12,'男');
console.log(p1.constructor);
console.log(p1);
//Dog构造函数
function Dog(name,age,color){
	this.name = name;
	this.age = age;
	this.color = color;
}
var dog = new Dog('一休',12,'金黄色');
console.log(dog);
console.log(dog.constructor);
























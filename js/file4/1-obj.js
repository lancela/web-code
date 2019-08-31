//1.使用new 构造函数去创建构造函数的实例
// Object 构造函数
var obj = new Object();
console.log(obj);  //{}
//往对象中添加属性或者方法
obj.name = '张三';
obj.age = 12;
obj.sayHi = function(){}
console.log(obj); //{name:'zhangsan',age:12,sayHi:[Function]}

//2.使用对象字面量声明对象
var obj2 = {};
console.log(obj2); //{}

var obj3 = {
	name:'lisi',
	age:22,
	sayHi:function(){
		console.log('sayHi');
	}
};
console.log(obj3);
console.log('----------');
//1.通过.访问对象中的属性或者方法
console.log(obj3.name); //lisi
//如果属性在对象中不存在的话，不报错，输出undefined
console.log(obj3.gender); //undefined
console.log(obj3.sayHi);  //[Function]
obj3.sayHi(); //运行函数  sayHi
function test(){}
//这里并没有运行函数，只是打印了函数的引用
console.log(test); //[Function]
//函数的运行
test();  //函数的运行


















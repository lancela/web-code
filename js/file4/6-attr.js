//每一个构造函数都有一个原型对象
//实例可以调用对应的构造函数中的原型对象的属性和方法
//Object的原型对象
console.log(Object.prototype);
console.log(Object.prototype.constructor === Object);   //true
var obj = {name:'zhangsan'};
console.log(obj.toString()); //[object Object]
//实例中没有的属性和方法，实际上使用的是原型对象中的属性和方法
console.log(obj.toString === Object.prototype.toString);


console.log('-------');
//通过实例找构造函数
console.log(obj.constructor); //Object

//in 是否是自有属性或者继承属性，是true
console.log('name' in obj); //true
console.log('toString' in obj); //true
console.log('aaa' in obj); //false
//给obj中添加了toString
obj.toString = function(){
	console.log(111);
}

//hasOwnProperty()  判断自有属性
console.log(obj.hasOwnProperty('name'));   //true
console.log(obj.hasOwnProperty('toString'));  //false,如果自己重写了toString，那么为true

console.log('-------');
//是否是自有属性并且可枚举 propertyIsEnumerable()
console.log(obj.propertyIsEnumerable('name'));
console.log(obj.propertyIsEnumerable('toString'));


for(var key in obj){
	console.log(key);
}
//判断Object.prototype是不是obj的原型对象
console.log(Object.prototype.isPrototypeOf(obj));
//获取当前时间对象
var date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());































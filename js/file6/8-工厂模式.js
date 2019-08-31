//工厂模式批量创建对象
var obj = {
	name:'zhangsan',
	age:12,
	gender:'男'
};
var obj2 = {
	name:'lisi',
	age:20,
	gender:'女'
};
function sayName(){
	console.log(this.name);
}
function createObject(n,a,g){
	return {
		name:n,
		age:a,
		gender:g,
		sayName:sayName
	};
}
var o1 = createObject('zhangsan',12,'男');
var o2 = createObject('lisi',34,'女');
var dog = createObject('一休',1,'雌');

console.log(o1,o2,dog);
//通过实例找构造函数  实例上调用的原型对象中的constructor属性
console.log(o1.constructor); //Object
console.log(o1.sayName === o2.sayName); //true








//对象的属性的特性
var obj = {
	name:'zhangsan',
	age:12
};

console.log(obj); //{name:'zhangsan',age:12}  键值对  key-value  属性-属性值
//获取属性的描述信息
console.log(Object.getOwnPropertyDescriptor(obj,'name'));
//修改属性的描述信息,修改属性的默认特性
Object.defineProperty(obj,'name',{
	//设置可枚举性
	//enumerable:false,
	//设置是否可修改值
	//writable:false,
	//设置属性值
	value:'terry',
	//设置属性是否可使用delete删除，是否可重新定义。是否可配置的
	configurable:false,
});
/*Object.defineProperty(obj,'name',{
	enumerable:false
});*/
//obj.name = 'lisi';
//delete obj.name;
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj,'name'));










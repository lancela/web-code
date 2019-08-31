var obj = {
	name:'zhangsan',
	age:12
};
//1.通过.访问对象的属性
console.log(obj.name);
//2.通过[]访问对象的属性
console.log(obj['name']);
//中括号中没有使用引号包裹的，当做变量处理
var age = 'age';
console.log(obj[age]);

//遍历对象  for-in循环
for(var key in obj){
	//key-->属性名--变量
	//obj.key  访问的是obj中的key属性的值。undefined
	console.log(key,'----',obj[key]);
}











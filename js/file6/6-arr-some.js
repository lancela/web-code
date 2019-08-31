var stus = [{
	name:'zhangsan',
	age:20
},{
	name:'lisi',
	age:12
},{
	name:'briup',
	age:13
}];
console.log(stus);
//判断数组中是否都是成年人，都是返回true;否则返回false
var result = !(stus.some(function(item,index,arr){
	return item.age<18;
}));
console.log(result);  //false
//判断是否有未成年人，有返回true，否则返回false
var result = stus.some(function(item,index,arr){
	return item.age<18;
});
console.log(result);  //true

//filter
//过滤出来所有的成年人，和未成年人
var result = stus.filter(function(item,index,arr){
	//return item.age>=18;
	return item.age<18;
});
console.log(result);

//map
//查找出所有人的名字，返回数组
var result = stus.map(function(item,index,arr){
	return item.age*2;
});
console.log(result);

//链式调用
//查找所有的未成人的名字
//先过滤未成年人，再映射名字
var result = stus.filter(function(item,index,arr){
	return item.age<18;
}).map(function(item,index,arr){
	return item.name;
});
console.log(result);







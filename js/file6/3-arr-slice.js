//slice 截取数组中的一部分,不改变原数组。参数为一个从开始位置截取到末尾。参数是两个，从开始位置开始，到结束位置，不包括结束位置上的。
//返回值：截取出来的元素组成的数组
var arr = [123,34,5,67,3,6,8];
var result = arr.slice(2);
console.log(result);//[5,67,3,6,8]
console.log(arr);//[123,34,5,67,3,6,8]
var result2 = arr.slice(2,4);
console.log(result2); //[5,67]

//splice 可以进行删除、插入、替换
//两个参数：splice(开始位置,删除的项数)
//三个参数：splice(开始位置，删除项数，添加的元素一个或者多个)
//返回值：删除的元素组成的数组
//改变原数组
var arr = [32,4,9,3,0];
//删除
var result = arr.splice(1,3);
console.log(result); //[4,9,3]
console.log(arr);//[32,0]
//插入
arr.splice(1,0,'hello','sss');
console.log(arr); //[32,'hello','sss',0]
//替换 从索引为1的位置开始，删除两项，插入元素1，2
arr.splice(1,2,'1','2','34');
console.log(arr);  //[32,'1','2','34',0]

















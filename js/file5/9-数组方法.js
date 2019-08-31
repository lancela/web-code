//栈、队列方法
var arr = [2,3,4,5,6];
console.log(arr); //[2,3,4,5,6]
//arr.push(7);
console.log('数组长度：',arr.push(7)); //6
console.log('添加之后的数组',arr); //[2,3,4,5,6,7]

console.log('取出的元素：',arr.pop());  //7
console.log('取出之后的数组：',arr); //[2,3,4,5,6]

console.log('数组的长度：',arr.unshift('hello'));  //6
console.log(arr); //['hello',2,3,4,5,6]
console.log('取出的元素：',arr.shift());  //'hello'
console.log(arr); //[2,3,4,5,6]











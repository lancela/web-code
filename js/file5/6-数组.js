//声明数组
//1.构造函数
var arr = new Array();
console.log(arr); //[]
var arr = new Array(20); //设置数组的长度为20
console.log(arr); //[,,,,,] 
console.log(arr[5]);  //undefined
var arr = new Array('zhangsan','lisi');
console.log(arr);  //['zhangsan','lisi']
console.log(arr.length); //2
console.log(arr[0]); //zhangsan
console.log(arr[100]); //undefined

//2.数组字面量
var arr = [];
console.log(arr);  //[]

var arr = ['zhangsan','lisi'];
console.log(arr);  //['zhangsan','lisi']














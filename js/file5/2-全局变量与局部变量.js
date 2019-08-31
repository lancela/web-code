//函数内用var 修饰的变量是局部变量
// 在函数外部声明的变量是当前文件的全局变量

var a =1;
function test(){
	console.log(a);//1
	var b = 2;
	//b = 2;//内部没用var修饰是全局变量
	console.log(b);//2
}
console.log(b);//1
console.log(a);//报错error



var g = 100;
function testG (){
	console.log(g); //undefined
	//变量声明提升.在函数内部的
	var g =200;
	console.log(g);//200
}
testG();
console.log(g);//100

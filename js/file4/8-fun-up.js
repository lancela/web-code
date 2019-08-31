//函数声明提升 会提升到代码的最前面
test();
function test(){
	console.log(1);
}

//函数声明提升和变量声明提升
console.log(a);  //undefined
var a = 1;
/*
var one;
function one(){}
console.log(one);
function one(){}
var one;
console.log(one);*/

console.log(one);  //fun
function one(){
	console.log('one');
}
var one = 123;
console.log(one); //123
/*
 * var one;
 * function one(){}
 * console.log(one);
 * one = 123;
 * console.log(123);
 * */



/*
var one = 123;
var one = 345;
console.log(one); //345
var obj = {};
obj.name = 'zhangsan';
obj.name = 'lisi';
obj.name  //lisi
*/











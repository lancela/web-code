//1.函数声明
function test(){
	//函数体
	console.log('test');
	//return 后的语句不会再执行
	return 1;
	console.log('after');
}
test();
//var result = test();
//console.log(result); //1

//2.函数表达式声明  匿名函数
var test1 = function(){
	console.log(123);
}
test1();

//匿名函数使用  立即执行函数 IIFE
(function(){
	console.log(111);
})();









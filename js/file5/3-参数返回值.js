
function test(a,b){
	return 'hello';
}
//没有手动return 返回undefined
console.log(test.length);

test();
console.log(test());//没有返回值 undefined 有返回值打印返回值

//函数做为参数
//fun = function(){}
function handle(fun){
	var msg = 'hello'; 
	fun(msg);
}


handle(function(m){
	console.log(m);
});
//函数做返回值
function handle2(){
	return function (){
		console.log(123);
	}
}
handle2()();
console.log(handle2()); //function 

//test.bind()();

//闭包 函数访问上下文中的变量
var arr = [];
for(var i=0;i<5;i++){
	/*arr[i] = function(){
		console.log(i);
	}*/
	//闭包解决方案
	arr[i] = (function(num){
		//return num;
		return function(){
			console.log(num);
		};
	})(i);
}
arr[0]();  //0
arr[1]();  //1
arr[2]();  //2
arr[3]();  //3
arr[4]();  //4
//arr[0] = 100;  [100]
//arr[1] = 200;  [100,200] 
//[fun,fun,fun,fun,fun]










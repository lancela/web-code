//阶乘  5   120
//3   6
// num*(num-1)*(num-2)...*1 = 

var num = 7;
var mult = 1;  //控制值
var str = '';  //控制字符串
for(var i=num;i>0;i--){
	mult *= i;
	if(i==1){
		str += i;
	}else{
		str += i + '*';
	}
}
console.log(str+'='+mult);












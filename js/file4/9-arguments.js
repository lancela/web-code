//arguments里存放实参列表，类数组对象，length属性代表存放实参的个数，callee属性代表函数
//累加
function add(a,b){
	console.log(arguments);
	var total = 0;
	//遍历arguments进行累加
	for(var i=0;i<arguments.length;i++){
		total += arguments[i];
		//console.log(arguments[i]);
	}
	return total;
}
var result = add(1,2,4,5,6,45,20,45);
console.log(result);

//递归阶乘
function mul(num){
	//console.log(arguments.callee);
	if(num>1){
		//return num*mul(num-1);
		return num*arguments.callee(num-1);
	}else{
		return 1;
	}
}
var result = mul(10);
console.log(result);








var arr = [23,454,12,33,12,56,90];
console.log(arr);
//反转 翻转
/*
console.log(arr.reverse());
console.log(arr);
*/
//排序
console.log(arr.sort(com));
console.log(arr);

function com(a,b){
	//return a-b;  假设 a-b<0   a<b  负数
	//a<b  a b  --->升序
	//假设a-b>0 正数  a>b   b  a--->升序
	/*if(a<b){
		return -1;  //负数，不交换位置，a  b   a<b  升序
	}
	return 1;
	*/
	//return b-a;  //假设b>a  正数 b a 降序
	if(a>b){
		return -1;
	}
	return 1;
}

var stus = [{
	name:'zhangsan',
	age:14
},{
	name:'lisi',
	age:20
}];
console.log(stus);
stus.sort(compare('age','降序'));
console.log(stus);



//按照name排
//按照age排
//万能比较函数
function compare(attr,rules){
	return function(o1,o2){
		if(rules==='升序'){
			if(o1[attr]<o2[attr]){
				return -1;
			}
			return 1;
		}else{
			if(o1[attr]>o2[attr]){
				return -1;
			}
			return 1;
		}
	}
}


























//判断一个成绩属于什么级别
var grade = 89;
var result = '';
//grade = +grade; //0
//console.log(grade);
//要求输出 不及格60以下，中60-70，良70-90，优90以上
if(grade&&((typeof grade)==='number')&&(grade>=0)&&(grade<=100)){
	//判断
	if(grade<60){
		result = '不及格';
	}else if(grade>=60&&grade<70){
		result = '中';
	}else if(grade>=70&&grade<90){
		result = '良';
	}else{
		result = '优';
	}
}else{
	result = '成绩出现错误，请更改';
}
console.log(result);
//解决方案
/*if(((typeof grade)===='string')||((typeof grade )=== 'number')){
	grade = +grade;
	//if判断拿过来
}else{
	result = '请更改';
}*/









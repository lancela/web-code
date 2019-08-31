// 后台程序
onmessage = function(event){
	// 主程序给后台程序的参数
	var num = event.data;
	var total = 0;
	for (var i =0 ;i<num;i++){
		total +=i;
	}
	postMessage(total);
}
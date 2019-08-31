function myAjax(method,url,param,handle,handle2){
	var baseURL = 'http://134.175.154.93:8099/';
	//handle当内部的异步执行成功的回调函数,将后台返回的数据交给handle
	var http = new XMLHttpRequest();
	//get 有参
	if(method==="GET"&&param){
		url+='?'+encodeFormData(param);
	}
	http.open(method,baseURL+url);
	console.log(baseURL+url);
	http.onreadystatechange=function(){
		if(http.status===200&&http.readyState===4){
			console.log('成功');
			handle(JSON.parse(http.responseText));
		}
		if(http.status!==200){
			handle2(http.responseText);
		}
	}
	//post有参
	if(method==='POST'&&param){
		//设置Content-Type为表单格式
		http.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
		//发送表单数据
		http.send(encodeFormData(param));
	}else{
		http.send();
	}
	
}


function encodeFormData(data){
		if(!data){
			return "";
		}
		var pairs = [];
		for(var name in data){
			if(!data.hasOwnProperty(name)){
				continue;
			}
			if(typeof data[name] == "function"){
				continue;
			}
			var value = data[name].toString();
			name = encodeURIComponent(name.replace("%20","+"));//编码名字
			value = encodeURIComponent(value.replace("%20","+"));//编码值
			pairs.push(name+"="+value);
		}
		return pairs.join('&');
	}
function outer(){
	var a=1;
	var inner = function(){
		a++;
		console.log(a,1);
	}

	console.log(a,2);
	return inner;
}
console.log(outer());
outer()();
var arr = [1,2,3,4];
console.log(typeof arr);
console.log(arr instanceof Array);
console.log(arr instanceof Object);

//arr->Array-->Object

//Array(构造函数) 里有isArray()方法
console.log(Array.isArray(arr)); //ture


function test(){
	console.log(Array.isArray(arguments)); //ture

}
test();



console.log(arr);
console.log(arr.toString());
console.log(arr.join());//1,2,3,4
console.log(arr.join('&'));//1&2&3&4
console.log(JSON.stringify(arr));
var arr2 = JSON.parse(JSON.stringify(arr));
console.log(arr2===arr);



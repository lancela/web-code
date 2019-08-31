var str = '123HELLO wor Hello ld hello';
//var pattern = /hello/ig;
var pattern = /(helloo)/i;
/*console.log(pattern.test(str)); //false
console.log(pattern.lastIndex);
*/
//console.log(pattern.exec(str)); //null
//将匹配到的所有的字符串拿出来，放到一个数组中 ['','','']  exec['']
/*var arr = [];
while(result = pattern.exec(str)){
	//console.log(result);
	//arr.push(result[0]);
	arr = arr.concat(result);
}
console.log(arr);
*/
console.log('----------');
//String类型提供的正则表达式方法match，返回所有符合条件的元素组成的数组
var result = str.match(pattern);
console.log(result);

//匹配到返回索引，没有匹配到返回-1
console.log(str.search(pattern)); 

var str = 'hello hello hello world';
//将所有的hello字符串替换成js字符串,不改变原字符串，返回更改后的字符串
var result = str.replace(/hello/i,'JavaScript');
console.log(result,str);
//split返回数组
console.log('=======')
var str = '12&34 &45';
console.log(str.split('&'));
console.log(str.split(/&/).toString('&'));
console.log(str.split(' '));

// \d*
// h{3,}\d\w
// /hello/

// /l{2}/
// /ll/
// \d  [0-9]
// \D
// ...


// *
// +
// ?
// {2,5}
// {2,}
// {2}
// .....















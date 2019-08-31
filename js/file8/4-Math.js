var num = 12.3;
//向上取整
console.log(Math.ceil(num)); //13
//向下取整   parseInt()
console.log(Math.floor(num)); //12
//四舍五入取整
console.log(Math.round(13.6)); //14
console.log(Math.round(13.2)); //13
//随机数
console.log(Math.random()); //[0-1)

//前世今生
var arr = ['李元霸','李白','杜甫','王昭君','貂蝉','西施','刘邦','妲己','项羽','虞姬'];
//随机数-->数组的下标  [0-1)  [0-10)
var index = Math.floor(Math.random()*arr.length);
console.log(arr[index]);

console.log(Math.min(23,45,23,52,6));console.log(Math.max(23,45,23,52,6));
//ES6 解构  babel
console.log(Math.max(...[23,45,23,52,6]));


























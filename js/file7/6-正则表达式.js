var str = 'helloworld javascript';
//贪婪模式和非贪婪模式，默认是贪婪模式
var pattern = /\w{3,8}/i;
console.log(pattern.exec(str)); //hello
//  \d?   出现0-1次
//  \d+?  \d{2,5}?  

//验证电话号码
var str = '23432422323';
var pattern = /^\d{11}$/;
console.log(pattern.test(str));













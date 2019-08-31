//var str = 'helababab2lo123waa8orld567ae';
//var pattern = /[abe][abe]/ig;
//var pattern = /[abe]{2,}\d/ig;
//var pattern = /[^abe]/ig;
var pattern = /^[a-z].*\d$/g;
var str = 'adfsdfsfdsfsf29';

var pattern = /^\d{11}$/;
console.log(str.match(pattern));
/*xxx@xxxx.xxx
3-12  4-10   3-5*/
//var pattern = /^([a-z]|[0-9]){3,12}@([a-z]|[0-9]){4,10}\.[a-z]{3,5}$/ig;
var pattern = /^([a-z]|[0-9]){3,12}@\1{4,10}\.[a-z]{3,5}$/ig;
var str = 'liuyr@liuyr.com';
console.log(str.match(pattern));

var str = 'abbab';
var pattern = /([a-z]){2}.\1/g; //bbab
//var pattern = /([a-z])([a-z]).\1/g;
//abba
//var pattern = /([a-z]).\1/g;//[ 'bab' ]
//var pattern = /[a-z]{2}/g; //ab,ba
//var pattern = /([a-z]){2}.([a-z])/g;  //abba
console.log(str.match(pattern));
//null
//bbab
//abba ??----- bbab
//匹配过程
//如果匹配上，直接扔出来，下次开始位置是扔出来的下一位开始
//如果没有匹配上，从本次匹配的下一位开始继续匹配

var str = 'llhelloll'
var pattern = /[a-z]{2}/g;
console.log(str.match(pattern));

var str = 'acbycby';
var pattern = /([a-z]){3}(y).\1\2/;
//abab
//pattern = /([a-z])([a-z]).\1/
console.log(str.match(pattern));//abab
//如果圆括号后边有次数，在使用\n引用的时候，用的是第n个圆括号最后一次匹配的结果,可以在不加g修饰的match中的数组中除了第一个之外的其他元素中拿到。
var str = 'hellohelloworld';
var pattern = /(hello)+?/ig;
console.log(str.match(pattern));







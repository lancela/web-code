//日期对象 Date
//当前时间的日期对象  将时间戳转成js的Date类型
var date = new Date(1563355259000);
console.log(date);
//获取年份  月  日  时 分 秒
//时间戳  秒时间戳  毫秒时间戳  1000
//将时间戳转换成js的Date对象，获取年月日时分秒，展示给用户
//最后输出2019-07-17 17:18:18
//new Date('2019/09/09 09:09:09');
console.log(date.getFullYear()); //2019
console.log(date.getMonth()+1); //0-11
console.log(date.getDate()); //17
console.log(date.getHours()); //小时 17
console.log(date.getMinutes()); //分钟
console.log(date.getSeconds()); //秒

var month = date.getMonth()+1;
month = month<10?'0'+month:month;
var day = date.getDate();
day = day<10?'0'+day:day;
var hours = date.getHours();
hours = hours<10?'0'+hours:hours;
var str = date.getFullYear()+'-'+month+'-'+day+' '+hours;
console.log(str);

//将js的date转成时间戳，要传递给后台
console.log((new Date()).getTime());
//一天的秒数
console.log(24*60*60);
















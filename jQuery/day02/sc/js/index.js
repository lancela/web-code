$(function(){
	$('.sc-body li').click(function(){
		var text = $(event.target).text();
		switch(text){
			case '学生管理':
			//加载页面
			$('.content').load('./pages/student.html');
			break;
			case '课程管理':
			//加载页面
			$('.content').load('./pages/course.html');
			break;
			case '班级管理':
			//加载页面
			$('.content').load('./pages/class.html');
			break;
			case '年级管理':
			//加载页面
			$('.content').load('./pages/grade.html');
			break;
			case '教师管理':
			//加载页面
			$('.content').load('./pages/teacher.html');
			break;
		}
	});
});
// console.log($());
// 1. 找到li给li注册点击事件
$('.tab .tab-control li').click(function(){
	// 1.1 获取当前触发的li的索引
	var index = $(this).index();
	// 1.2 给当前的li添加类名active，其他兄弟li移除active类名
	$(this).addClass('active').siblings().removeClass('active');
	// 1.3 根据索引找到对应的div项，添加active类名，当前这个div的其他兄弟要移除active
	$('.tab .tab-content .tab-content-item').eq(index)
	.addClass('active')
	.siblings()
	.removeClass('active');
}); 

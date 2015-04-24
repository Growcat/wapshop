$(document).ready(function() {
 
	// 移动端触摸改变导航显示样式
	var events = {
		start: 'touchstart',
		move : 'touchmove',
		end  : 'touchend'
	};

	function isMobile(){
		return navigator.userAgent.match(/mobile/i) ? true : false;  
	} 
	
	if(!isMobile()){
		events.start = "mousedown";
        events.move = "mousemove";
        events.end = "mouseup";
	}	

	$('a', '#bottom_nav').bind(events.start, function(event) {
		// alert(0);
		event.preventDefault();
		$(this).css({background:'#efefef'}).siblings('a').css({background:'#fff'});
		
		var imgid = $(this).children('img').attr("id");
		descpic(imgid);


		$(this).siblings().each(function(i) {
			var imgids = $(this).children('img').attr('id');;
			srcpic(imgids);
			// alert($(this).siblings('a').length);
			// alert(imgids);
		});

	}).bind(events.move, function(event) {
		event.preventDefault();
	}).bind(events.end, function(event) {
		// event.preventDefault();
	});











	// 此js代码，用于底部导航的激活状态的视觉效果
	// $("#bottom_nav a").hover(function() {
	// 	$(this).css('color', 'red');
	// 	$(this).siblings().css('color', '#333');

	// 	$(this).siblings().css('background', '#efefef');
	// 	var imgid = $(this).children().attr("id");
	// 	descpic(imgid);
	// 	var simg = $(this).children("img").attr("id");
	// }, function() {
	// 	$(this).css('color', '#333');
	// 	$(this).siblings().css('background', '#fff');
	// 	var imgid = $(this).children().attr("id");
	// 	srcpic(imgid);

	// });

	
	// 商品列表切换
	$(".drop").children('div').hover(function() {
		$(this).children('a').css('color', '#f79138');
		$(".droplist").show();
		var dex_n = $(this).index();
		swichDrop(dex_n);
	}, function() {
		$(this).children('a').css('color', '#333');
	});
	
	











	// 商品子列表选择项后隐藏
	$(".dropitem li").click(function(event) {	
		$(".dropitem li a").css('color', '#666');
		$(".dropitem li").css('background', '#fefefe');
		$(this).children('a').css('color', '#000');
		$(this).css('background', '#f8f8f8');
		setTimeout(function (){
    		$(".droplist").hide();
   		}, 200); 

   	
   		var ant_dex_n = $(this).parent("ul").index();
		$(".drop div").eq(ant_dex_n).children('a').css('color', '#f79138');
		$(".drop div").eq(ant_dex_n).css('border-bottom', '1px solid #f79138');
	});




});







	// 替换导航图片方法
	function descpic(imgid) {
		var descimg = 'images/h_' + imgid + '.png?t='+new Date().getTime();
		$("#" + imgid).attr('src', descimg);//背景图变成红色

	}

	function srcpic(imgid) {
		var srcimg = 'images/' + imgid + '.png?t='+new Date().getTime();
		$("#" + imgid).attr('src', srcimg);//背景图变为默认
	}

	//商品列表三个下拉框切换方法
	function swichDrop(dex_n){
		$(".droplist").children('ul').hide();
		$(".droplist").children('ul').eq(dex_n).show();
		$(".drop div").eq(dex_n).css('border-bottom', '1px solid #f79138');
		$(".drop div").eq(dex_n).siblings().children('a').css('color', '#333');
		$(".drop div").eq(dex_n).siblings().css('border-bottom', '1px solid #eee');
	}



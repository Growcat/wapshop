$(document).ready(function() {

	// 此js代码，用于底部导航的激活状态的视觉效果
	$("#bottom_nav a").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).siblings().css('background', '#eee');
		var imgid = $(this).children().attr("id");
		descpic(imgid);
		var simg = $(this).children("img").attr("id");
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).siblings().css('background', '#fff');
		var imgid = $(this).children().attr("id");
		srcpic(imgid);

	});

	function descpic(imgid) {
		var descimg = 'images/h_' + imgid + '.png';
		$("#" + imgid).attr('src', descimg);
	}

	function srcpic(imgid) {
		var srcimg = 'images/' + imgid + '.png';
		$("#" + imgid).attr('src', srcimg);
	}

});
$(document).ready(function() {
	cart_fns.bindEvent();
});

var cart_fns = {
	// 增加数量
	add: function($btn) {
		var $numInput = $btn.parent().siblings('input');//input数量框
		var n = parseInt($numInput.val()) + 1;
		$numInput.val(n);
	},

	minus: function($btn) {
		
		var $numInput = $btn.parent().siblings('input');//input数量框
		var n = parseInt($numInput.val()) - 1;
		if (n <= 1) {n=1;}//不允许数量小于1
		$numInput.val(n); 
	},
 

	bindEvent: function() {
	 

		//加减按钮绑定事件
		$("button[fct='add']").click(function(event) {
			cart_fns.add($(this));
		});

		$("button[fct='minus']").click(function(event) {
			cart_fns.minus($(this));
		});
		
	}
}

 
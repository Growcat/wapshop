<!-- 单选按钮样式更改事件 -->
	$(function() {
	  $('label').click(function(){
	    var radioId = $(this).attr('for');
        // var radioName= $('#' + radioId).attr('name')
	    // $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', true);
	    $('label').removeAttr('class') && $(this).attr('class', 'checked');
	  });
	});
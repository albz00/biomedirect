// JQuery listener
$(function () {
	// Button, Goto No-Text
	$("#btnToCentralMenuX").on({
		mouseup: function () { $(this).attr('src', '../CommonFiles/Buttons/BTN_TogLessonMenuX.jpg');},
		mousedown: function () { $(this).attr('src', '../CommonFiles/Buttons/BTN_TogLessonMenuXHit.jpg'); },
		mouseenter: function () { $(this).attr('src', '../CommonFiles/Buttons/BTN_TogLessonMenuXOver.jpg'); },
		mouseleave: function () { $(this).attr('src', '../CommonFiles/Buttons/BTN_TogLessonMenuX.jpg'); }
	});
});

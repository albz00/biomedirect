// jQuery
$(function(){
    $("#btn-return").on({
		mouseup: function () {$(this).attr('src','../../../../CommonFiles/Buttons/BTN_ToLessonOver.jpg'); },
		mousedown: function () {$(this).attr('src','../../../../CommonFiles/Buttons/BTN_ToLessonHit.jpg'); },
		mouseenter: function () {$(this).attr('src','../../../../CommonFiles/Buttons/BTN_ToLessonOver.jpg'); },
		mouseleave: function () { $(this).attr('src', '../../../../CommonFiles/Buttons/BTN_ToCentralMenu.jpg'); }
	});
});


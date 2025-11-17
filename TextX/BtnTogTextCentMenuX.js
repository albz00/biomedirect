// JQuery listener
$(function () {
    // Button, Goto Text
    $("#btnToCentralMenuT").on({
        mouseup: function () { $(this).attr('src', '../CommonFiles/Buttons/BTN_TogLessonMenuTOver.jpg'); },
        mousedown: function () { $(this).attr('src', '../CommonFiles/Buttons/BTN_TogLessonMenuTHit.jpg'); },
        mouseenter: function () { $(this).attr('src', '../CommonFiles/Buttons/BTN_TogLessonMenuTOver.jpg'); },
        mouseleave: function () { $(this).attr('src', '../CommonFiles/Buttons/BTN_TogLessonMenuT.jpg'); }
    });
});

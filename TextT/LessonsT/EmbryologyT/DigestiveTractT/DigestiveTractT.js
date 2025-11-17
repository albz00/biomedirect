// Pause All Side Videos
sideVideoDiaphragm.pause();
sideVideoFusions.pause();

// LESSON MENU LINKS
$(function () {
    $('#menu1').on('click', function () { currentSlide = 1; clickedLink = true; }); // Folding
    $('#menu2').on('click', function () { currentSlide = 4; clickedLink = true; }); // Elongation
    $('#menu3').on('click', function () { currentSlide = 7; clickedLink = true; }); // Endodermal Distribution
    $('#menu4').on('click', function () { currentSlide = 9; clickedLink = true; }); // Overview
    $('#menu5').on('click', function () { currentSlide = 18; clickedLink = true; }); // Coiling
    $('#menu6').on('click', function () { currentSlide = 23; clickedLink = true; }); // Appendix
    $('#menu7').on('click', function () { currentSlide = 25; clickedLink = true; }); // Cloaca
    $('#menu8').on('click', function () { currentSlide = 31; clickedLink = true; }); // Body Cavities
    $('#menu9').on('click', function () { currentSlide = 41; clickedLink = true; }); // Rotations & Mesenteries
    $('#menu10').on('click', function () { currentSlide = 44; clickedLink = true; }); // Stomach
    $('#menu11').on('click', function () { currentSlide = 48; clickedLink = true; }); // Pancreas & Bile Duct
    $('#menu12').on('click', function () { currentSlide = 53; clickedLink = true; }); // Fusions
});

// SIDE LESSON BUTTONS
$(function () {
    // Buttons
    $("#btnSideDiaphragm").on({
		mouseup: function () { $(this).attr('src', 'Diaphragm/BTN_DiaphragmOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'Diaphragm/BTN_DiaphragmHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'Diaphragm/BTN_DiaphragmOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'Diaphragm/BTN_Diaphragm.jpg'); }
	});

    $("#btnSideFusions").on({
		mouseup: function () { $(this).attr('src', 'Fusions/BTN_FusionsOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'Fusions/BTN_FusionsHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'Fusions/BTN_FusionsOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'Fusions/BTN_Fusions.jpg'); }
	});

    // JQuery Listener for Side Buttons
	$('#btnSideDiaphragm').on('click', function () {
		openSide('#sideDiaphragm', 'sideVideoDiaphragm', srcArray_Diaphragm);
	});

	$('#btnSideFusions').on('click', function () {
		openSide('#sideFusions', 'sideVideoFusions', srcArray_Fusions);
	});

    // Side Back Button
	$('.btnSideBack').on('click', function () {
        backSlideSide();
	});
});

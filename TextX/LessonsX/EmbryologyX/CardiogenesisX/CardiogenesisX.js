// Pause All Side Videos
sideVideoLoopColored.pause();
sideVideoAVcanal.pause();

// LESSON MENU LINKS
$(function(){
    $('#menu1').on('click', function () { currentSlide = 1; clickedLink = true; }); // Cardiogenic Field
    $('#menu2').on('click', function () { currentSlide = 3; clickedLink = true; }); // Heart Tube
    $('#menu3').on('click', function () { currentSlide = 4; clickedLink = true; }); // Blood Vessel Proliferation
    $('#menu4').on('click', function () { currentSlide = 9; clickedLink = true; }); // Heart Loop
    $('#menu5').on('click', function () { currentSlide = 15; clickedLink = true; }); // Primitive Chambers

    $('#menu6').on('click', function () { currentSlide = 19; clickedLink = true; }); // Pharyngeal Arteries
    $('#menu7').on('click', function () { currentSlide = 25; clickedLink = true; }); // Aortic Trunk
    $('#menu8').on('click', function () { currentSlide = 28; clickedLink = true; }); // Subclavian Artery
    $('#menu9').on('click', function () { currentSlide = 32; clickedLink = true; }); // Carotids
    $('#menu10').on('click', function () { currentSlide = 36; clickedLink = true; }); // Pulmonary Branch
    $('#menu11').on('click', function () { currentSlide = 40; clickedLink = true; }); // Great Veins
 
    $('#menu12').on('click', function () { currentSlide = 44; clickedLink = true; }); // Interventricular Division
    $('#menu13').on('click', function () { currentSlide = 47; clickedLink = true; }); // Endocardial Cushions
    $('#menu14').on('click', function () { currentSlide = 51; }); // Flow Routes

    $('#menu15').on('click', function () { currentSlide = 54; clickedLink = true; }); // Interatrial Division
    $('#menu16').on('click', function () { currentSlide = 68; clickedLink = true; }); // Prenatal Shunts – Foramen Ovale
    $('#menu17').on('click', function () { currentSlide = 76; clickedLink = true; }); // Pulmonary Bypass – Ductus Arteriosu
    $('#menu18').on('click', function () { currentSlide = 81; clickedLink = true; }); // Prenatal Circulation
    $('#menu19').on('click', function () { currentSlide = 92; clickedLink = true; }); // Postnatal Circulation
});

// SIDE LESSON BUTTONS
$(function () {
 	// Buttons
    $("#btnSideLoopColored").on({
		mouseup: function () { $(this).attr('src', 'LoopColored/BTN_LoopColoredOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'LoopColored/BTN_LoopColoredHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'LoopColored/BTN_LoopColoredOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'LoopColored/BTN_LoopColored.jpg'); }
	});

    $("#btnSideAVcanal").on({
		mouseup: function () { $(this).attr('src', 'AVcanal/BTN_AVcanalOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'AVcanal/BTN_AVcanalHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'AVcanal/BTN_AVcanalOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'AVcanal/BTN_AVcanal.jpg'); }
	});

    // JQuery Listener for Side Buttons
	$('#btnSideLoopColored').on('click', function () {
		openSide('#sideLoopColored', 'sideVideoLoopColored', srcArray_LoopColored);
	});

	$('#btnSideAVcanal').on('click', function () {
		openSide('#sideAVcanal', 'sideVideoAVcanal', srcArray_AVcanal);
	});

    // Side Back Button
	$('.btnSideBack').on('click', function () {
        backSlideSide();
	});
});

// Pause All Side Videos
sideVideoLimbImages.pause();

//JQuery Button Implementation
$(function(){
	// Lesson Menu Links
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; });   // Osteogenesis
    $('#menu2').on('click', function () { currentSlide = 4; }); clickedLink = true;   // Axial Skeleton
    $('#menu3').on('click', function () { currentSlide = 4; }); clickedLink = true;   // Sclerotome
    $('#menu4').on('click', function () { currentSlide = 6; }); clickedLink = true;   // Resegmentation
    $('#menu5').on('click', function () { currentSlide = 11; }); clickedLink = true;  // Sclerotome Designation
    $('#menu6').on('click', function () { currentSlide = 15; }); clickedLink = true;  // Vertebra
    $('#menu7').on('click', function () { currentSlide = 25; }); clickedLink = true;  // Ribs
    $('#menu8').on('click', function () { currentSlide = 30; }); clickedLink = true;  // Sternum

    $('#menu9').on('click', function () { currentSlide = 36; }); clickedLink = true;  // Skull
    $('#menu10').on('click', function () { currentSlide = 36; }); clickedLink = true; // Skull, Lateral
    $('#menu11').on('click', function () { currentSlide = 47; }); clickedLink = true; // Skull, Base
    $('#menu12').on('click', function () { currentSlide = 54; }); clickedLink = true; // Skull, Crown

    $('#menu13').on('click', function () { currentSlide = 58; }); clickedLink = true; // Appendicular Skeleton
    $('#menu14').on('click', function () { currentSlide = 58; }); clickedLink = true; // Limb Bud
    $('#menu15').on('click', function () { currentSlide = 61; }); clickedLink = true; // Limb Bones
    $('#menu16').on('click', function () { currentSlide = 66; }); clickedLink = true; // Long Bones
    $('#menu17').on('click', function () { currentSlide = 73; }); clickedLink = true; // Synovial Joints
});

// SIDE LESSON BUTTONS
$(function () {
	// Side Buttons
    $("#btnSideLimbImages").on({
		mouseup: function () { $(this).attr('src', 'LimbImages/BTN_LimbImagesOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'LimbImages/BTN_LimbImagesHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'LimbImages/BTN_LimbImagesOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'LimbImages/BTN_LimbImages.jpg'); }
	});

    // JQuery Listener for Side Buttons
	$('#btnSideLimbImages').on('click', function () {
		openSide('#sideLimbImages', 'sideVideoLimbImages', srcArray_LimbImages);
	});

    // Side Back Button
	$('.btnSideBack').on('click', function () {
        backSlideSide();
	});
});

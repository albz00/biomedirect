/* Open LessonNameT.html and follow it's instructions. */


// Pause All Side Videos
/*sideVideoNameSideA.pause();
sideVideoNameSideB.pause();
*/
// LESSON MENU LINKS
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Glossary
    $('#menu2').on('click', function () { currentSlide = 8; clickedLink = true; }); // Ribose (Haworth Projection)
    $('#menu3').on('click', function () { currentSlide = 9; clickedLink = true; }); // Numbering
    $('#menu4').on('click', function () { currentSlide = 10; clickedLink = true; }); // Nucleosides
    $('#menu5').on('click', function () { currentSlide = 14; clickedLink = true; }); // Nucleotides
    $('#menu6').on('click', function () { currentSlide = 17; clickedLink = true; }); // Deoxynucleotides
    $('#menu7').on('click', function () { currentSlide = 20; clickedLink = true; }); // Polymerization
    $('#menu8').on('click', function () { currentSlide = 22; clickedLink = true; }); // Elongation

    $('#menu9').on('click', function () { currentSlide = 27; clickedLink = true; }); // Distinctions
    $('#menu10').on('click', function () { currentSlide = 32; clickedLink = true; }); // Double Strand Kinetics
    $('#menu11').on('click', function () { currentSlide = 36; clickedLink = true; }); // DNA Atomic Symbols Model
    $('#menu12').on('click', function () { currentSlide = 37; clickedLink = true; }); // Ladder Model
    $('#menu13').on('click', function () { currentSlide = 40; clickedLink = true; }); // Ribbon Model
    $('#menu14').on('click', function () { currentSlide = 41; clickedLink = true; }); // Space Filled Model
    $('#menu15').on('click', function () { currentSlide = 43; clickedLink = true; }); // Poker Chip Model
    $('#menu16').on('click', function () { currentSlide = 44; clickedLink = true; }); // Alternate Conformations
});

// SIDE LESSON BUTTONS
/*$(function () {
	// Side Buttons
    $("#btnSideNameSideA").on({
		mouseup: function () { $(this).attr('src', 'NameSideA/BTN_NameSideAOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'NameSideA/BTN_NameSideAHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'NameSideA/BTN_NameSideAOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'NameSideA/BTN_NameSideA.jpg'); }
	});

    $("#btnSideNameSideB").on({
		mouseup: function () { $(this).attr('src', 'NameSideB/BTN_NameSideBOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'NameSideB/BTN_NameSideBHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'NameSideB/BTN_NameSideBOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'NameSideB/BTN_NameSideB.jpg'); }
	});

    // JQuery Listener for Side Buttons
	$('#btnSideNameSideA').on('click', function () {
		openSide('#sideNameSideA', 'sideVideoNameSideA', srcArray_NameSideA);
	});

	$('#btnSideNameSideB').on('click', function () {
		openSide('#sideNameSideB', 'sideVideoNameSideB', srcArray_NameSideB);
	});

    // Side Back Button
	$('.btnSideBack').on('click', function () {
        backSlideSide();
	});
});
*/
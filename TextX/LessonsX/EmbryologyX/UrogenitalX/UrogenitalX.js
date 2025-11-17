// Pause All Side Videos
sideVideoNephronReabsorption.pause();
sideVideoMultiplier.pause();
sideVideoHorseshoe.pause();
sideVideoTestesDescent.pause();

// LESSON MENU LINKS
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; });   // Renal System
    $('#menu2').on('click', function () { currentSlide = 1; clickedLink = true; });   // Intermediate Mesoderm
    $('#menu3').on('click', function () { currentSlide = 5; clickedLink = true; });   // Pronephros
    $('#menu4').on('click', function () { currentSlide = 6; clickedLink = true; });   // Mesonephros
    $('#menu5').on('click', function () { currentSlide = 8; clickedLink = true; });   // Metanephros
    $('#menu6').on('click', function () { currentSlide = 10; clickedLink = true; });  // Kidney
    $('#menu7').on('click', function () { currentSlide = 11; clickedLink = true; });  // Collecting System
    $('#menu8').on('click', function () { currentSlide = 17; clickedLink = true; });  // Excretory System
    $('#menu9').on('click', function () { currentSlide = 25; clickedLink = true; });  // Ascent
    $('#menu10').on('click', function () { currentSlide = 28; clickedLink = true; }); // Reproductive Systems
    $('#menu11').on('click', function () { currentSlide = 29; clickedLink = true; }); // Primordial Germ Cells
    $('#menu12').on('click', function () { currentSlide = 34; clickedLink = true; }); // Gonads
    $('#menu13').on('click', function () { currentSlide = 36; clickedLink = true; }); // Sex Cords
    $('#menu14').on('click', function () { currentSlide = 38; clickedLink = true; }); // Testis Cords/Follicles
    $('#menu15').on('click', function () { currentSlide = 39; clickedLink = true; }); // Testis/Ovary
    $('#menu16').on('click', function () { currentSlide = 40; clickedLink = true; }); // Glands/Vagina
    $('#menu17').on('click', function () { currentSlide = 43; clickedLink = true; }); // Gonad Descent
    $('#menu18').on('click', function () { currentSlide = 46; clickedLink = true; }); // Genitalia Transverse
    $('#menu19').on('click', function () { currentSlide = 57; clickedLink = true; }); // Genitalia External
    $('#menu20').on('click', function () { currentSlide = 62; clickedLink = true; }); // Finale
});

// SIDE LESSON BUTTONS
$(function () {
	// Side Buttons
    $("#btnSideNephronReabsorption").on({
		mouseup: function () { $(this).attr('src', 'NephronReabsorption/BTN_NephronReabsorptionOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'NephronReabsorption/BTN_NephronReabsorptionHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'NephronReabsorption/BTN_NephronReabsorptionOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'NephronReabsorption/BTN_NephronReabsorption.jpg'); }
	});

    $("#btnSideMultiplier").on({
		mouseup: function () { $(this).attr('src', 'Multiplier/BTN_MultiplierOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'Multiplier/BTN_MultiplierHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'Multiplier/BTN_MultiplierOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'Multiplier/BTN_Multiplier.jpg'); }
	});

    $("#btnSideHorseshoe").on({
		mouseup: function () { $(this).attr('src', 'Horseshoe/BTN_HorseshoeOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'Horseshoe/BTN_HorseshoeHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'Horseshoe/BTN_HorseshoeOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'Horseshoe/BTN_Horseshoe.jpg'); }
	});

    $("#btnSideTestesDescent").on({
		mouseup: function () { $(this).attr('src', 'TestesDescent/BTN_TestesDescentOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'TestesDescent/BTN_TestesDescentHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'TestesDescent/BTN_TestesDescentOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'TestesDescent/BTN_TestesDescent.jpg'); }
	});

    // JQuery Listener for Side Buttons
	$('#btnSideNephronReabsorption').on('click', function () {
		openSide('#sideNephronReabsorption', 'sideVideoNephronReabsorption', srcArray_NephronReabsorption);
	});

	$('#btnSideMultiplier').on('click', function () {
		openSide('#sideMultiplier', 'sideVideoMultiplier', srcArray_Multiplier);
	});

	$('#btnSideHorseshoe').on('click', function () {
		openSide('#sideHorseshoe', 'sideVideoHorseshoe', srcArray_Horseshoe);
	});

	$('#btnSideTestesDescent').on('click', function () {
		openSide('#sideTestesDescent', 'sideVideoTestesDescent', srcArray_TestesDescent);
	});

    // Side Back Button
	$('.btnSideBack').on('click', function () {
        backSlideSide();
	});
});

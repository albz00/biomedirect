/*
// Pause All Side Videos
sideVideoFpump.pause();
*/
// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Permeability 
    $('#menu2').on('click', function () { currentSlide = 1; clickedLink = true; }); // Types of Transmembrane Passage
    $('#menu3').on('click', function () { currentSlide = 2; clickedLink = true; }); // Facilitated Characteristics
    $('#menu4').on('click', function () { currentSlide = 3; clickedLink = true; }); // Transport Proteins
    $('#menu5').on('click', function () { currentSlide = 5; clickedLink = true; }); // Structure
    $('#menu6').on('click', function () { currentSlide = 6; clickedLink = true; }); // Classes
    $('#menu7').on('click', function () { currentSlide = 13; clickedLink = true; }); // Channels
    $('#menu8').on('click', function () { currentSlide = 15; clickedLink = true; }); // Transporters
    $('#menu9').on('click', function () { currentSlide = 18; clickedLink = true; }); // ATPase Pumps
    $('#menu10').on('click', function () { currentSlide = 21; clickedLink = true; }); // Mechanism
    $('#menu11').on('click', function () { currentSlide = 23; clickedLink = true; }); // Uniporters
    $('#menu12').on('click', function () { currentSlide = 29; clickedLink = true; }); // Symporters
    $('#menu13').on('click', function () { currentSlide = 31; clickedLink = true; }); // Antiporters
    $('#menu14').on('click', function () { currentSlide = 33; clickedLink = true; }); // P Class Pumps
    $('#menu15').on('click', function () { currentSlide = 41; clickedLink = true; }); // Examples
    $('#menu16').on('click', function () { currentSlide = 42; clickedLink = true; }); // Membrane Asymmetry
    $('#menu17').on('click', function () { currentSlide = 43; clickedLink = true; }); // Na/K ATPase
    $('#menu18').on('click', function () { currentSlide = 50; clickedLink = true; }); // CFTR
    $('#menu19').on('click', function () { currentSlide = 62; clickedLink = true; }); // Action Potential
    $('#menu20').on('click', function () { currentSlide = 71; clickedLink = true; }); // Ca ATPase
    $('#menu21').on('click', function () { currentSlide = 72; clickedLink = true; }); // Na/Ca Antiporter
    $('#menu22').on('click', function () { currentSlide = 73; clickedLink = true; }); // Band 3 Anion Antiporter
    $('#menu23').on('click', function () { currentSlide = 74; clickedLink = true; }); // Maintaining pH
    $('#menu24').on('click', function () { currentSlide = 75; clickedLink = true; }); // Gastric HCL
    $('#menu25').on('click', function () { currentSlide = 78; clickedLink = true; }); // Glucose Absorption
});

/*
// SIDE LESSON BUTTONS
$(function () {
	// Side Buttons
    $("#btnSideFpump").on({
		mouseup: function () { $(this).attr('src', 'Fpump/BTN_ATPasePumpsOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'Fpump/BTN_ATPasePumpsHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'Fpump/BTN_ATPasePumpsOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'Fpump/BTN_ATPasePumps.jpg'); }
    
    // JQuery Listener for Side Buttons
	$('#btnSideFpump').on('click', function () {
		openSide('#sideFpump', 'sideVideoFpump', srcArray_Fpump);
	});
});
*/

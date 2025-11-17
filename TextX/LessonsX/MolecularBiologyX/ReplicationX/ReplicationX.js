$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; }); // Introductory Concepts
    $('#menu2').on('click', function () { currentSlide = 3; }); // The Cell Cycle
    $('#menu3').on('click', function () { currentSlide = 5; }); // Characteristics of Replication
    $('#menu4').on('click', function () { currentSlide = 6; }); // Requirements
    $('#menu5').on('click', function () { currentSlide = 7; }); // DNA Polymerase
    $('#menu6').on('click', function () { currentSlide = 8; }); // Mg+2
    $('#menu7').on('click', function () { currentSlide = 9; }); // Template
    $('#menu8').on('click', function () { currentSlide = 10; }); // dNTPs
    $('#menu9').on('click', function () { currentSlide = 12; }); // Primer
    $('#menu10').on('click', function () { currentSlide = 17; }); // 5'-3' Direction
    $('#menu11').on('click', function () { currentSlide = 18; }); // Complimentary
    $('#menu12').on('click', function () { currentSlide = 19; }); // Proofreading
    $('#menu13').on('click', function () { currentSlide = 21; }); // Bidirectional
    $('#menu14').on('click', function () { currentSlide = 23; }); // Discontinuous
    $('#menu15').on('click', function () { currentSlide = 26; }); // Semiconservative
    $('#menu16').on('click', function () { currentSlide = 30; }); // Overview
    $('#menu17').on('click', function () { currentSlide = 31; }); // Initiation of Replication
    $('#menu18').on('click', function () { currentSlide = 31; }); // ori
    $('#menu19').on('click', function () { currentSlide = 38; }); // Helicase
    $('#menu20').on('click', function () { currentSlide = 39; }); // Single Stranded Binding Proteins
    $('#menu21').on('click', function () { currentSlide = 40; }); // Replication Bubble
    $('#menu22').on('click', function () { currentSlide = 41; }); // Replisome
    $('#menu23').on('click', function () { currentSlide = 43; }); // Leading Strand, DNA Polymerase ε
    $('#menu24').on('click', function () { currentSlide = 45; }); // Lagging Strand Replication
    $('#menu25').on('click', function () { currentSlide = 46; }); // Primase
    $('#menu26').on('click', function () { currentSlide = 47; }); // Sliding Clamp
    $('#menu27').on('click', function () { currentSlide = 48; }); // Clamp Loader
    $('#menu28').on('click', function () { currentSlide = 51; }); // DNA Polymerase δ
    $('#menu29').on('click', function () { currentSlide = 53; }); // Okazaki Fragments
    $('#menu30').on('click', function () { currentSlide = 54; }); // Replication
    $('#menu31').on('click', function () { currentSlide = 56; }); // Strands
    $('#menu32').on('click', function () { currentSlide = 62; }); // Topoisomerase
    $('#menu33').on('click', function () { currentSlide = 65; }); // Primer Removal
    $('#menu34').on('click', function () { currentSlide = 66; }); // RNAase
    $('#menu35').on('click', function () { currentSlide = 68; }); // DNA Polymerase β
    $('#menu36').on('click', function () { currentSlide = 70; }); // DNA Ligase
    $('#menu37').on('click', function () { currentSlide = 71; }); // Telomerase 
});

// SIDE LESSON BUTTON
$(function () {
	// Buttons
    $("#btnSideBang").on({
		mouseup: function () { $(this).attr('src', 'Bang/BTN_BangOver.jpg'); },
		mousedown: function () { $(this).attr('src', 'Bang/BTN_BangHit.jpg'); },
		mouseenter: function () { $(this).attr('src', 'Bang/BTN_BangOver.jpg'); },
		mouseleave: function () { $(this).attr('src', 'Bang/BTN_Bang.jpg'); }
	});

    // JQuery Listener for Side Buttons
	$('#btnSideBang').on('click', function () {
		openSide('#sideBang', 'sideVideoBang', srcArray_BangX);
	});

    // Side Back Button
	$('.btnSideBack').on('click', function () {
        backSlideSide();
	});
});

$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; }); // Introductory Concepts
    $('#menu2').on('click', function () { currentSlide = 3; }); // The Cell Cycle
    $('#menu3').on('click', function () { currentSlide = 7; }); // Characteristics of Replication
    $('#menu4').on('click', function () { currentSlide = 8; }); // Requirements
    $('#menu5').on('click', function () { currentSlide = 9; }); // DNA Polymerase
    $('#menu6').on('click', function () { currentSlide = 10; }); // Mg+2
    $('#menu7').on('click', function () { currentSlide = 11; }); // Template
    $('#menu8').on('click', function () { currentSlide = 12; }); // dNTPs
    $('#menu9').on('click', function () { currentSlide = 14; }); // Primer
    $('#menu10').on('click', function () { currentSlide = 19; }); // 5'-3' Direction
    $('#menu11').on('click', function () { currentSlide = 20; }); // Complimentary
    $('#menu12').on('click', function () { currentSlide = 21; }); // Proofreading
    $('#menu13').on('click', function () { currentSlide = 24; }); // Bidirectional
    $('#menu14').on('click', function () { currentSlide = 26; }); // Discontinuous
    $('#menu15').on('click', function () { currentSlide = 29; }); // Semiconservative
    $('#menu16').on('click', function () { currentSlide = 33; }); // Overview
    $('#menu17').on('click', function () { currentSlide = 34; }); // Initiation of Replication
    $('#menu18').on('click', function () { currentSlide = 34; }); // ori
    $('#menu19').on('click', function () { currentSlide = 43; }); // Helicase
    $('#menu20').on('click', function () { currentSlide = 44; }); // Single Stranded Binding Proteins
    $('#menu21').on('click', function () { currentSlide = 45; }); // Replication Bubble
    $('#menu22').on('click', function () { currentSlide = 46; }); // Replisome
    $('#menu23').on('click', function () { currentSlide = 48; }); // Leading Strand, DNA Polymerase ε
    $('#menu24').on('click', function () { currentSlide = 50; }); // Lagging Strand Replication
    $('#menu25').on('click', function () { currentSlide = 51; }); // Primase
    $('#menu26').on('click', function () { currentSlide = 52; }); // Sliding Clamp
    $('#menu27').on('click', function () { currentSlide = 53; }); // Clamp Loader
    $('#menu28').on('click', function () { currentSlide = 56; }); // DNA Polymerase δ
    $('#menu29').on('click', function () { currentSlide = 58; }); // Okazaki Fragments
    $('#menu30').on('click', function () { currentSlide = 59; }); // Replication
    $('#menu31').on('click', function () { currentSlide = 61; }); // Strands
    $('#menu32').on('click', function () { currentSlide = 67; }); // Topoisomerase
    $('#menu33').on('click', function () { currentSlide = 71; }); // Primer Removal
    $('#menu34').on('click', function () { currentSlide = 73; }); // RNAase
    $('#menu35').on('click', function () { currentSlide = 78; }); // DNA Polymerase β
    $('#menu36').on('click', function () { currentSlide = 77; }); // DNA Ligase
    $('#menu37').on('click', function () { currentSlide = 79; }); // Telomerase 
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
		openSide('#sideBang', 'sideVideoBang', srcArray_BangT);
	});

    // Side Back Button
	$('.btnSideBack').on('click', function () {
        backSlideSide();
	});
});

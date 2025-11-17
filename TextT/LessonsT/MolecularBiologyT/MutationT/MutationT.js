/* No Xs to change to Ts
 
 * Setup Lesson Menu Links
   - make           menu#                   consecutive starting with 1, 
   - replace        currentSlide = #s       with                    "stopPoint": #s         from src_array 
   - add            "menuLink": "Name",     from src_array          behind //  
 */

// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; }); // Mutation
    $('#menu2').on('click', function () { currentSlide = 4; }); // Types
    $('#menu3').on('click', function () { currentSlide = 8; }); // Silent Mutations
    $('#menu4').on('click', function () { currentSlide = 16; }); // Point Mutations
    $('#menu5').on('click', function () { currentSlide = 26; }); // Chromosomal Aberrations
    $('#menu6').on('click', function () { currentSlide = 34; }); // Inheritance of Translocations
    $('#menu7').on('click', function () { currentSlide = 44; }); // Inheritance of Inversions
    $('#menu8').on('click', function () { currentSlide = 48; }); // Clinical Example
    $('#menu9').on('click', function () { currentSlide = 50; }); // Ploidy
    $('#menu10').on('click', function () { currentSlide = 52; }); // Phenotypes
    $('#menu11').on('click', function () { currentSlide = 57; }); // Aneuploidy
    $('#menu12').on('click', function () { currentSlide = 58; }); // Syndromes
    $('#menu13').on('click', function () { currentSlide = 68; }); // Mutagenesis
    $('#menu14').on('click', function () { currentSlide = 72; }); // Endogenous Processes
    $('#menu15').on('click', function () { currentSlide = 73; }); // Ligase, Unequal Crossovers
    $('#menu16').on('click', function () { currentSlide = 80; }); // Nondisjunction, Infidelity, p450
    $('#menu17').on('click', function () { currentSlide = 89; }); // Spontaneous
    $('#menu18').on('click', function () { currentSlide = 90; }); // Depurination
    $('#menu19').on('click', function () { currentSlide = 93; }); // Deamination
    $('#menu20').on('click', function () { currentSlide = 96; }); // Tautomeric Shifts
    $('#menu21').on('click', function () { currentSlide = 110; }); // Exogenous Processes
    $('#menu22').on('click', function () { currentSlide = 111; }); // Radioactivity
    $('#menu23').on('click', function () { currentSlide = 116; }); // Chemical Mutagens
    $('#menu24').on('click', function () { currentSlide = 126; }); // DNA Repair
    $('#menu25').on('click', function () { currentSlide = 134; }); // Excision Repair
    $('#menu26').on('click', function () { currentSlide = 142; }); // Xeoderma Pigmentosum
    $('#menu27').on('click', function () { currentSlide = 144; }); // Natural Selection
});

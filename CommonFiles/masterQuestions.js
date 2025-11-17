/* https://www.sitepoint.com/simple-javascript-quiz/

 * initialize existing elements
   const quiz = document.getElementById('quiz');
 * const submitBtn = document.getElementById('submit');
   const prevBtn = document.getElementById('prev');
   const nextBtn = document.getElementById('next');
   var attemptTracker = [];
   var remaining = qBank.length;
*/

const quiz = document.getElementById('quiz');
//const submitBtn = document.getElementById('submit');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
var attemptTracker = [];
var remaining = qBank.length;

function buildQuiz() {
    // HTML output
    const output = [];


if (shuffleMe) {
      qBank = shuffle(qBank);
}

    qBank.forEach((currentQuestion, questionNum) => {
        // list of possible answers
        const answers = [];

        for (letter in currentQuestion.answers) {
            // format each ans and add to answers[]
            answers.push(
                `<button class="ansChoice" id="q${questionNum}${letter}" onclick="checkAnswer('${letter}')" onmouseover="showExplain('${letter}')" onmouseout="hideExplain('${letter}')">
                ${letter}. ${currentQuestion.answers[letter]}
                </button>`);
        }

        // format and add question and answers[] to output[] 
        // 04.30.2021 ARobertson added image - Trackit 13555
        output.push(
            `<div class="questionSlide">
            <div class="question">${questionNum + 1}. ${currentQuestion.question} </div> 
            <div class="answers"> ${answers.join('')} </div>
            <div class="image"> <p style="text-align:center;"><img src="${currentQuestion.Image}" id="fixed-width-image"></p></div>
            </div>`);

        // build attempt tracker
        attemptTracker.push({ "q": questionNum, "attempt1": 0, "attempt2": 0, "attemptTotal": 0, "correctCount": 0});
    });

    // combine output list into one string of HTML
    quiz.innerHTML = output.join('');

    // display number of remaining questions
    document.getElementById('remaining').innerHTML = remaining;
}

/* Shuffle questions with Fisher-Yates shuffle algorithm */
function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

function showQuestionSlide(n) {
    slides[currentSlide].classList.remove('activeSlide');
    slides[n].classList.add('activeSlide');
    currentSlide = n;

    // hide or display pagination buttons based on currentSlide
    // previous button
    if (currentSlide === 0) {
        prevBtn.style.display = 'none';
    }
    else {
        prevBtn.style.display = 'inline-block';
    }
    // next button
    if (currentSlide === slides.length - 1) {
        nextBtn.style.display = 'none';
        //submitBtn.style.display = 'inline-block';
    }
    else {
        nextBtn.style.display = 'inline-block';
        //submitBtn.style.display = 'none';
    }
}

function showPrevSlide() {
    showQuestionSlide(currentSlide - 1);
}

function showNextSlide() {
    showQuestionSlide(currentSlide + 1);
}

function checkAnswer(userAns) {
    var userAnsBtn = document.getElementById(`q${currentSlide}${userAns}`);
    var answerIsCorrect = 0;
    var correctCount = Object.keys(qBank[currentSlide].correctAns).length; // How many correct answers exist
    if (userAnsBtn.classList.contains('correct') || userAnsBtn.classList.contains('incorrect')){
        // do nothing. This allows hover function to work but will not register any clicks
    }
    else {      
        for (i in qBank[currentSlide].correctAns) {            
            if (qBank[currentSlide].correctAns[i] == userAns) {
                answerIsCorrect = 1;
                break;
            }
            else {
                answerIsCorrect = 0;
            }
        }
        attemptTracker[currentSlide].correctCount=correctCount;
        if (answerIsCorrect == 1) {        
                userAnsBtn.classList.add('correct');                               
                attemptTracker[currentSlide].attemptTotal++;
                
                if (attemptTracker[currentSlide].attemptTotal == 1) { 
                    attemptTracker[currentSlide].attempt1++;
                }
                else if (attemptTracker[currentSlide].attemptTotal >= 1 && ((attemptTracker[currentSlide].attemptTotal - attemptTracker[currentSlide].attempt1)>1)){ 
                       if ((attemptTracker[currentSlide].attemptTotal - attemptTracker[currentSlide].attempt1 - attemptTracker[currentSlide].attempt2)<=2){
                           attemptTracker[currentSlide].attempt2++;
                       }    
                }
                else {
                    attemptTracker[currentSlide].attempt1++; 
                }
                
             
        }
        
        else {
             userAnsBtn.classList.add('incorrect');
             attemptTracker[currentSlide].attemptTotal++;
            }
        
        showExplain(userAns);
        updateAttempt();
    }
}

function updateAttempt() {

    // update number of unanswered questions
    if (attemptTracker[currentSlide].attemptTotal == 1) {
        remaining--;
        document.getElementById('remaining').innerHTML = remaining;
    }

    // update attempt tracker based on total attempts for all questions combined (unaswered are excluded)
    var attempt1count = 0;
    var attempt2count = 0;
    attemptTracker.forEach((question, index) => {
        // sum all first then second attempts only if attempt was made
        if (question.attemptTotal > 0) {
            if (question.attempt1 > 0) {
                attempt1count = Math.round((attempt1count + (question.attempt1/question.correctCount)) * 1000)/1000;

            }
            if (question.attempt2 > 0) {
                attempt2count = Math.round((attempt2count + (question.attempt2/question.correctCount)) * 1000)/1000;
            }
        }

        // find percent based on questions answered and update display
        var answered = qBank.length - remaining;
        if (answered > 0) {
            let attempt1percent = 100 * attempt1count / answered;
            let attempt2percent = 100 * attempt2count / answered;
            document.getElementById('first').innerHTML = Math.round(attempt1percent) + "% [" + attempt1count + "]";
            document.getElementById('second').innerHTML = Math.round(attempt2percent) + "% [" + attempt2count + "]";
        }
    });

    /* Initial interpretation of attempt tracking */
    //var RemainingSpans = document.querySelectorAll('.remaining');
    //RemainingSpans.forEach((span, index) => {
    //    span.innerHTML = remaining;
    //});
    // update attempt tracker only if first or second attempt for each question separate 
    // (keeps numbers frozen for any clicks thereafter)
    //if (attemptTracker[currentSlide].attemptTotal <= 2) {
    //    let attempt1percent = 100 * (attemptTracker[currentSlide].attempt1 / attemptTracker[currentSlide].attemptTotal)
    //    document.getElementById(`first${currentSlide}`).innerHTML = attempt1percent + "%";
    //    document.getElementById(`second${currentSlide}`).innerHTML = "0%";

    //    if (attemptTracker[currentSlide].attemptTotal > 1) {
    //        let attempt2percent = 100 * (attemptTracker[currentSlide].attempt2 / (attemptTracker[currentSlide].attemptTotal - 1));
    //        document.getElementById(`second${currentSlide}`).innerHTML = attempt2percent + "%";
    //    }
    //}
}

function showExplain(userAns) {
    // only display explanation if button was clicked
    var userAnsBtn = document.getElementById(`q${currentSlide}${userAns}`);
    if (userAnsBtn.classList.contains('correct') || userAnsBtn.classList.contains('incorrect')) {
        userAnsBtn.innerHTML = qBank[currentSlide].explain[userAns];
    }
}

function hideExplain(userAns) {
    var userAnsBtn = document.getElementById(`q${currentSlide}${userAns}`);
    var correctCount = Object.keys(qBank[currentSlide].correctAns).length; // How many correct answers exist
    if (userAnsBtn.classList.contains('correct') || userAnsBtn.classList.contains('incorrect')) {
        if(userAnsBtn.classList.contains('correct') && correctCount > 1){
            userAnsBtn.innerHTML = userAns + ". ONE OF SEVERAL CORRECT ANSWERS " + qBank[currentSlide].answers[userAns];           
        }
        else {
            userAnsBtn.innerHTML = userAns + ". " + qBank[currentSlide].answers[userAns];
        }
    }
}

// display quiz
buildQuiz();

// set these variables after quiz is built
const slides = document.querySelectorAll('.questionSlide');
var currentSlide = 0;

// pagination
showQuestionSlide(currentSlide);

prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);
//submitBtn.addEventListener("click", showResults);

// JQuery listener
$(function () {
});
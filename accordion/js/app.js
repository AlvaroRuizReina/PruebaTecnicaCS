// declared variables
const accordionTitles = document.querySelectorAll('.accordion-title');

// anonymous function that contains the functionality of our accordion
accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
        const height = accordionTitle.nextElementSibling.scrollHeight;
        accordionTitle.classList.toggle('active-header');
        if(accordionTitle.classList.contains('active-header')) {
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            accordionTitle.nextElementSibling.style.maxHeight = "0px";
        }
    })
})

// Function that contains the functionality of our test
function checkAnswers() {
    // msg, button and icons variables
    let msgAnswerSuccess = document.querySelector('.msg-answer-success');
    let msgAnswerFail = document.querySelector('.msg-answer-fail');
    let msgErrorCompleteTest = document.querySelector('.msg-error-complete-test');
    let btnCertificate = document.getElementById('btn-certificate');
    let classIcon = document.querySelectorAll('.accordion-form > i');

    // result variable
    let resultAnswers = document.querySelector('.result-answers');

    // incremental variables
    let totalQuestions = 10;
    let question = 0;

    // variables and array form
    let myForm = document.forms["quizForm"];
    let answers = ["a", "b", "a", "c", "c", "b", "a", "c", "b", "a"];

    // Loop that checks if the answers have been checked or not
    for (let i = 1; i <= totalQuestions; i++) {
        if(myForm["ans" + i].value === null || myForm["ans" + i].value === "") {
            Array.from(classIcon).forEach((elementIcon) => {
                elementIcon.style.visibility = 'hidden';
            });
            msgErrorCompleteTest.style.display = 'block';
            msgAnswerSuccess.style.display = 'none';
            msgAnswerFail.style.display = 'none';
            return false;
        }else {
            // condition that collects the value of the answers
            if (myForm["ans" + i].value === answers[i - 1]) {
                question++;
                // condition that evaluates if the correct answers are equal >= 5
                if (question >= 5) {
                    Array.from(classIcon).forEach((elementIcon) => {
                        elementIcon.style.visibility = 'visible';
                    });
                    msgAnswerSuccess.style.display = 'block';
                    btnCertificate.style.display = 'block';
                    msgAnswerFail.style.display = 'none';
                    msgErrorCompleteTest.style.display = 'none';
                }else {
                    msgAnswerFail.style.display = 'block';
                    msgAnswerSuccess.style.display = 'none';
                    msgErrorCompleteTest.style.display = 'none';
                }
            }
        }
    }
    // Show the results of correct answers on the screen
    resultAnswers.innerHTML = 
        '<span><p>El número de respuestas acertadas correctamente ha sido de:</p><h2>' + question + '/10</h2></span>';
    return false;
}
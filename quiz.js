
function checkAnswer() {
    
    const correctAnswer = "4";

    const userAnswercheck = document.querySelector('input[name="quiz"]:checked');

    const userAnswer = userAnswercheck.value
    if (userAnswercheck) {

        if (userAnswer === correctAnswer) {  // Exact match to what is expected
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
           
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

const submitButton = document.getElementById('submit-answer');  
submitButton.addEventListener('click', checkAnswer);  // Event listener addition

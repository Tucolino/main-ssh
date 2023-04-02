const quizData = [
    {
        question: 'What do I do?',
        a: 'Developer',
        b: 'UI UX Designer',
        c: 'Engineer',
        d: 'Archtech',
        correct: 'a'
    }, {
        question: 'What is the most programming lenguage?',
        a: 'JS',
        b: 'Java',
        c: 'Kotlin',
        d: 'Python',
        correct: 'a'
    }, {
        question: 'Who is the actual President of Brazil?',
        a: 'Diogo Defante',
        b: 'Jair Messias Bolsonaro',
        c: 'Luiz Inácio Lula da Silva',
        d: 'Marina da Silva',
        correct: 'c'
    }, {
        question: 'What is the best Need For Speed?',
        a: 'Carbon',
        b: 'Most Wanted',
        c: 'Underground 2',
        d: 'Heat',
        correct: 'b'
    }, {
        question: 'Which social media is the most important to get a job?',
        a: 'Instagram',
        b: 'Facebook',
        c: 'Pinterest',
        d: 'Linkedin',
        correct: 'd'
    }, {
        question: 'Which social media is the most important to get a job?',
        a: 'Instagram',
        b: 'Facebook',
        c: 'Pinterest',
        d: 'Linkedin',
        correct: 'd'
    }, {
        question: 'Which social media is the most important to get a job?',
        a: 'Instagram',
        b: 'Facebook',
        c: 'Pinterest',
        d: 'Linkedin',
        correct: 'd'
    }, {
        question: 'Which social media is the most important to get a job?',
        a: 'Instagram',
        b: 'Facebook',
        c: 'Pinterest',
        d: 'Linkedin',
        correct: 'd'
    }
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
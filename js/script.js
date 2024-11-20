const questions = [
    {
        que: "Which of the following is a markup language?",
        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "PHP",
        correct: "a",
    },
    {
        que: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b",
    },
    {
        que: "What does CSS stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "b",
    },
    {
        que: "Which of the following is a client-side language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        que: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        que: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
];

document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    let correct = 0;
    const total = questions.length;

    const questionBox = document.getElementById("quesBox");
    const allInputs = document.querySelectorAll("input[type='radio']");
    const submitButton = document.querySelector("#submit");

    const loadQuestion = () => {
        if (index === total) {
            return quizEnd();
        }
        reset();
        const data = questions[index];
        questionBox.innerHTML = `${index + 1}) ${data.que}`;
        allInputs[0].nextElementSibling.innerText = data.a;
        allInputs[1].nextElementSibling.innerText = data.b;
        allInputs[2].nextElementSibling.innerText = data.c;
        allInputs[3].nextElementSibling.innerText = data.d;
    };

    const getAnswer = () => {
        let ans = null;
        allInputs.forEach((inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        });
        return ans;
    };

    const reset = () => {
        allInputs.forEach((inputEl) => {
            inputEl.checked = false;
        });
    };

    const quizEnd = () => {
        document.getElementsByClassName("container")[0].innerHTML = `
            <div class="col">
                <h3 class="w-100">Hi, you've scored ${correct} / ${total}.</h3>
            </div>
        `;
    };

    submitButton.addEventListener("click", () => {
        const ans = getAnswer();
        if (!ans) {
            alert("Please select an answer before proceeding!");
            return;
        }
        if (ans === questions[index].correct) {
            correct++;
        }
        index++;
        loadQuestion();
    });

    loadQuestion();
});
const startQuizBtn = document.querySelector(".start-btn");

function handleStartQuiz() {
    const mainContainer = document.querySelector(".main-container");
    mainContainer.style.display = "block";
    startQuizBtn.style.display = "none";

    class Quiz {
        constructor(root, score = 0) {
            this.allQuestions = quizData.map(
                (question) => new Question(question.question, question.answers, question.correctIndex)
            );
            this.activeIndex = 0;
            this.score = score;
            this.root = root;
        }

        nextQuestion() {
            if (this.allQuestions.length > this.activeIndex) {
                this.createUI();
            } else {
                alert(`Game is over. Your score is ${this.score} out of ${this.allQuestions.length}.`);
            }
        }

        resultQuestion(input) {
            this.root.innerHTML = "";
            let div = document.createElement("div");
            div.classList.add("animation")
            div.classList.add("resultDiv")

            let h3 = document.createElement("h3");
            h3.innerHTML = `Score: <span>${this.score}</span>`;
            let h2 = document.createElement("h2");
            h2.innerText = input;
            let nextBtn = document.createElement("button");
            nextBtn.innerText = "Next";
            nextBtn.addEventListener("click", () => {
                this.nextQuestion();
            });

            div.append(h3, h2, nextBtn);
            this.root.append(div);
        }

        createUI() {
            this.root.innerHTML = "";
            
            this.root.append(this.allQuestions[this.activeIndex].createUI());
            
            let submitBtn = document.querySelector(".submit-btn");
            let totalScore = document.querySelector(".score");
            totalScore.innerHTML = `Score: <span>${this.score}</span>`;
            let checkedInput = document.querySelectorAll(".option input");
            submitBtn.addEventListener("click", () => {
                let isAnswered = false;
                checkedInput.forEach((elm) => {
                    if (elm.checked === true) {
                        isAnswered = true;
                        if (this.allQuestions[this.activeIndex].isCorrect(elm.dataset.id)) {
                            this.updateScore();
                            this.resultQuestion("Right Answer");
                        } else {
                            this.resultQuestion("Wrong Answer");
                        }
                    }
                });
                if (!isAnswered) {
                    this.resultQuestion("You have not selected any option");
                }
                this.activeIndex = this.activeIndex + 1;
            });
        }

        updateScore() {
            this.score = this.score + 1;
            return this.score;
        }
    }

    class Question {
        constructor(title, options, correctAnswer) {
            this.title = title;
            this.options = options;
            this.correctAnswer = correctAnswer;
        }

        isCorrect(answer) {
            return Number(this.correctAnswer) === Number(answer);
        }

        getCorrectAnswer() {
            return this.options[this.correctAnswer];
        }

        createUI() {
            let quizBox = document.createElement("section");
            let h2 = document.createElement("h2");
            h2.classList.add("score");
            h2.classList.add("text-center");
            let h3 = document.createElement("h3");
            h3.innerHTML = `<strong>Question:</strong> <span class="question">${this.title}</span>`;
            let div = document.createElement("div");
            div.classList.add("options");
            this.options.forEach((elm, i) => {
                let optionDiv = document.createElement("div");
                optionDiv.classList.add("option");
                let input = document.createElement("input");

                input.setAttribute("type", "radio");
                input.setAttribute("id", i);
                input.setAttribute("name", "index");
                let label = document.createElement("label");
                label.setAttribute("for", i);
                input.setAttribute("data-id", i);
                label.innerText = elm;

                optionDiv.append(input, label);
                div.append(optionDiv);
            });
            let button = document.createElement("button");
            button.classList.add("submit-btn");
            button.setAttribute("type", "submit");
            button.innerText = "SUBMIT";
            quizBox.append(h2, h3, div, button);
            quizBox.classList.add("animation")
            return quizBox;
        }
    }

    let quiz = new Quiz(document.querySelector(".question-container"));
    quiz.createUI();
}

startQuizBtn.addEventListener("click", handleStartQuiz);



// discription


// The code defines two classes: Quiz and Question.

// The Quiz class represents the overall quiz and manages the questions, 
// score tracking, and rendering of the quiz interface. It takes two parameters:
//  root, which is the HTML element where the quiz will be displayed, and score,
//   which represents the initial score (defaulting to 0 if not provided). The Quiz 
//   class has methods such as nextQuestion, resultQuestion, createUI, and updateScore.

// The Question class represents an individual question in the quiz. It takes three
//  parameters: title (the text of the question), options (an array of answer options), 
//  and correctAnswer (the index of the correct answer within the options array). 
//  The Question class has methods like isCorrect, which checks if a given answer is correct, 
//  getCorrectAnswer, which retrieves the correct answer, and createUI, which generates 
//  the HTML structure for displaying the question.

// Inside the Quiz class, the nextQuestion method checks if there are more questions remaining.
//  If there are, it creates the user interface for the next question using the createUI method.
//   If there are no more questions, an alert is displayed with the final score.

// The resultQuestion method updates the user interface to display the result of the current question. 
// It takes an input parameter, representing the result message (e.g., "Right Answer," "Wrong Answer,"
//  or "You have not selected any option"). It creates HTML elements to display the score, result message,
//   and a "Next" button. Clicking the "Next" button triggers the nextQuestion method to move to the next question.

// The createUI method generates the user interface for the current question. It clears the HTML 
// content of the root element, appends the HTML structure created by the createUI method of the
//  Question class, and adds an event listener to the submit button to handle user answers. If an 
//  answer is selected, it checks if it is correct, updates the score using the updateScore method,
// and displays the result using the resultQuestion method. If no answer is selected, a message 
// is displayed indicating that no option was selected. Finally, the activeIndex is incremented 
// to move to the next question.

// The updateScore method increments the score by 1 and returns the updated score.

// At the end of the code, an event listener is added to the start button, so when it
//  is clicked, the handleStartQuiz function is executed.

// In summary, this code sets up a quiz application that allows users to answer questions,
//  provides feedback on their answers, and displays the final score at the end of the quiz.






// Regenerate response

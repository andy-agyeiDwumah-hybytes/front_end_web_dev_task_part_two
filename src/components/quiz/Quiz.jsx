// React
import { useRef, useState } from "react";
// Styles
import styles from "./Quiz.module.css";
// Components
import QuizQuestion from "../quizQuestion/QuizQuestion";
import QuizNavigateBtn from "../quizNavigateBtn/QuizNavigateBtn";
import QuizSubmit from "../quizSubmit/QuizSubmit";

const quizData = [
  {
    question: "What does HTML stand for?",
    answers: [
      "HyperText Markup Language",
      "HyperTool Markup Language",
      "HyperTransfer Markup Language",
      "HighText Markup Language",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which HTML element is used to define the largest heading?",
    answers: ["<h6>", "<header>", "<h1>", "<head>"],
    correctAnswer: 3,
  },
  {
    question:
      "Which attribute is used to specify a unique identifier for an HTML element?",
    answers: ["class", "name", "key", "id"],
    correctAnswer: 4,
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["<lb>", "<line>", "<br>", "<break>"],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of the <h1> tag in HTML?",
    answers: [
      "To insert a horizontal line",
      "To create a hyperlink",
      "To define the most important heading on a page",
      "To display an image",
    ],
    correctAnswer: 3,
  },
];

// Store reference to last question
const quizQuestionsLengthMinusOne = quizData.length - 1;

export default function Quiz() {
  // Set it to the first question by default
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userScore, setScore] = useState(null);
  const formRef = useRef();

  const getPreviousQuestion = () => {
    if (currentQuestion === 0) return;
    setCurrentQuestion(prev => prev - 1);
  };

  const getNextQuestion = () => {
    if (currentQuestion === quizQuestionsLengthMinusOne) return;
    setCurrentQuestion(prev => prev + 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    let i = 0;
    // Get answers from user
    for (const value of formData.values()) {
      let userAnswer = +value;  // Convert to number
      if (userAnswer === quizData[i]["correctAnswer"]) i++;
    }
    setScore(i);
  };
  return (
    <>
      <header className={styles.headerContainer}>
        <h1 id="header-heading">HTML Quiz</h1>
      </header>
      <main className={styles.main}>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          aria-labelledby="header-heading"
        >
          <div className={styles.formContentContainer}>
            {quizData.map((quizQuestion, questionIdx) => {
              return (
                <QuizQuestion
                  key={`question_${questionIdx + 1}`}
                  quizQuestion={quizQuestion}
                  questionIdx={questionIdx}
                  styles={styles}
                  currentQuestion={currentQuestion}
                />
              );
            })}
            <div
              className={[
                styles.quizBtnContainer,
                styles.quizBtnContainerNavigate,
              ].join(" ")}
            >
              <QuizNavigateBtn
                onClick={getPreviousQuestion}
                className={styles.quizBtnPrev}
                // Disable previous button if user is on the first question
                disabled={currentQuestion === 0 ? true : false}
                styles={styles}
              >
                Prev
              </QuizNavigateBtn>
              <QuizNavigateBtn
                onClick={getNextQuestion}
                className={styles.quizBtnNext}
                // Disable next button if user is on the last question
                disabled={
                  currentQuestion === quizQuestionsLengthMinusOne ? true : false
                }
                styles={styles}
              >
                Next
              </QuizNavigateBtn>
            </div>
            <QuizSubmit
              currentQuestion={currentQuestion}
              quizQuestionsLengthMinusOne={quizQuestionsLengthMinusOne}
              userScore={userScore}
              numberOfQuizQuestions={quizData.length}
              styles={styles}
            />
          </div>
        </form>
      </main>
    </>
  );
}

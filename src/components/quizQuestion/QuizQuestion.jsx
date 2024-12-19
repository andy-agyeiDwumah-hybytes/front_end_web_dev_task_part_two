// Components
import QuizAnswer from "../quizAnswer/QuizAnswer";

export default function QuizQuestion({quizQuestion, questionIdx, styles, currentQuestion}) {
  return (
    <fieldset
      className={
        questionIdx === currentQuestion
          ? [styles.questionsContainer, styles.active].join(" ")
          : styles.questionsContainer
      }
    >
      <legend className={styles.quizQuestionLegend}>
        {quizQuestion.question}
      </legend>
      {quizQuestion.answers.map((answer, answerIdx) => {
        return (
          <QuizAnswer
            key={`question_${questionIdx + 1}_answer_${answerIdx + 1}`}
            questionIdx={questionIdx}
            answerIdx={answerIdx}
            answer={answer}
            styles={styles}
          />
        );
      })}
    </fieldset>
  );
}

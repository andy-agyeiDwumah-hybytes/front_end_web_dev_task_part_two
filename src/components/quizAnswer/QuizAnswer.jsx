export default function QuizAnswer({questionIdx, answerIdx, answer, styles}) {
  return (
    <div>
      <input
        type="radio"
        name={`question_${questionIdx + 1}`}
        id={`question_${questionIdx + 1}_answer_${answerIdx + 1}`}
        value={answerIdx + 1}
        className={styles.quizInputRadio}
      />
      <label
        htmlFor={`question_${questionIdx + 1}_answer_${answerIdx + 1}`}
        className={styles.quizQuestionLabel}
      >
        {answer}
      </label>
    </div>
  );
}

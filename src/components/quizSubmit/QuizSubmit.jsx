export default function QuizSubmit({
  currentQuestion,
  quizQuestionsLengthMinusOne,
  userScore,
  numberOfQuizQuestions,
  styles }) {
  return (
    // If the user is on the last question
    currentQuestion === quizQuestionsLengthMinusOne && (
      <div
        className={[
          styles.quizBtnSubmitContainer,
          styles.quizBtnContainer,
        ].join(" ")}
      >
        {" "}
        {/* Display score if quiz is finished else display submit button */}
        {userScore !== null ? (
          <p className={styles.displayScorePara}>
            <strong>Your score: {userScore} / { numberOfQuizQuestions }</strong>
          </p>
        ) : (
          <button
            type="submit"
            className={styles.quizBtn}
            disabled={userScore !== null ? true : false}
          >
            Submit quiz
          </button>
        )}
      </div>
    )
  );}

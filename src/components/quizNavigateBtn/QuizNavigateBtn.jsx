export default function QuizNavigateBtn({onClick, className, children, disabled, styles}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[styles.quizBtn, className].join(" ")}
      disabled={disabled}
      >
        {children}
    </button>
  );
}

export default function Child({ onSetScore, styles }) {
  return (
    <>
      <button
        type="button"
        className={styles.button}
        onClick={() => onSetScore(prev => prev + 1)}>Click me!</button>
    </>
  );
}

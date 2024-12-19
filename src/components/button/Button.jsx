// Styles
import styles from "./Button.module.css"

export default function Button({ onClick, label }) {
  return (
    <main className={styles.main}>
      <div>
        <button type="button" onClick={onClick} className={styles.button}>
          {label}
        </button>
      </div>
    </main>
  );
}

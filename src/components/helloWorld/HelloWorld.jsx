// Styles
import styles from "./HelloWorld.module.css";

export default function HelloWorld({ name }) {
  return (
    <main className={styles.main}>
      <div className={[styles.circle, styles.shape].join(" ")}></div>
      <div className={[styles.square, styles.shape].join(" ")}></div>
      <div className={[styles.triangle, styles.shape].join(" ")}></div>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>Hello, World!</h1>
        <p className={styles.para}>I am {name}.</p>
      </div>
    </main>
  );
}
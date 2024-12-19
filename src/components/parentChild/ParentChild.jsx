// React
import { useState } from "react";
// Components
import Child from "../child/Child";
// Styles
import styles from "./ParentChild.module.css"

export default function ParentChild() {
  const [score, setScore] = useState(0);

  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>Increase Score</h1>
        <Child onSetScore={setScore} styles={styles} />
        <p className={styles.para}>{score}</p>
      </div>
    </main>
  );
}

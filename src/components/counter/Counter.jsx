// React
import { useState } from "react"
// Styles
import styles from "./Counter.module.css"

export default function Counter() {
  const [counter, setCounter] = useState(0)

  const handleIncrease = () => {
    setCounter(prev => prev + 1)
  }

  const handleDecrease = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <main className={styles.main}>
      <div>
        <button onClick={handleDecrease} className={[styles.counterBtn, styles.decreaseBtn].join(" ")}>
          Decrease
        </button>
        <p className={styles.counterText}>{counter}</p>
        <button onClick={handleIncrease} className={[styles.counterBtn, styles.increaseBtn].join(" ")}>
          Increase
        </button>
      </div>
    </main>
  );
}

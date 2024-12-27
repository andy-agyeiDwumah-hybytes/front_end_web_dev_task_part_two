// React
import { useEffect, useState } from "react";
// Styles
import styles from "./Timer.module.css";

export default function Timer() {
  // Set to 0 by default to allow user to select a time
  const [timer, setTimer] = useState(0);
  // Default time for new timer
  const [newTimer, setNewTimer] = useState(30);

  useEffect(() => {
    // Create interval only when timer is greater than zero
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      // Runs on every subsequent rerender
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimer(newTimer);
    setNewTimer(30);
  };

  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <h1 className={styles.timerTextDiv} role="timer">
          {timer}
        </h1>
        {timer === 0 && (
          <form
            onSubmit={handleSubmit}
            className={styles.timerForm}
            aria-label="Set timer"
          >
            <input
              type="number"
              id="time"
              name="timer"
              min="1"
              aria-label="Set new timer"
              value={newTimer}
              className={styles.numInput}
              onChange={e => setNewTimer(e.target.value)}
            />
            <button type="submit" className={styles.submitBtn}>
              Start timer
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

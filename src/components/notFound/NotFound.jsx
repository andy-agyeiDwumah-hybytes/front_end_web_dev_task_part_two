// React
import { Link } from "react-router";
// Styles
import styles from "./NotFound.module.css"

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.heading}>Page not found.</h1>
        <p className={styles.para}>
          Back to <Link to="/">home</Link>
        </p>
      </div>
    </main>
  );
}

// Styles
import styles from "./Home.module.css";
// Components
import Footer from "../footer/footer";
import Menu from "../menu/Menu";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.mainHeading}>Welcome to the home page</h1>
        <h2 className={styles.secondaryHeading}>Navigate to the different exercises</h2>
        <Menu styles={styles} />
      </main>
      <Footer styles={styles} />
    </>
  );
}

const d = new Date();
const currentYear = d.getFullYear();

export default function Footer({styles}) {
  return (
    <footer className={styles.homeFooter}>
      <p className={styles.footerPara}>
        <strong>
          <em>Copyright &copy; {currentYear}</em>
        </strong>
      </p>
    </footer>
  );
}

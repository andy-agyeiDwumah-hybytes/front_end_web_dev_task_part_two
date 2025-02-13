export default function Footer({styles}) {
  return (
    <footer className={styles.homeFooter}>
      <p className={styles.footerPara}>
        <strong>
          <em>Copyright &copy; {new Date().getFullYear()}</em>
        </strong>
      </p>
    </footer>
  );
}

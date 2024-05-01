import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer_main}>
    <p className={styles.footer_text}>OrientPath | Pioneering Strategic Insights</p>
    <p className={styles.footer_date}>&copy; {new Date().getFullYear()} OrientPath. All rights reserved.</p>
  </footer>
  )
}

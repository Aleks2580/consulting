import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header_main}>
    <img className={styles.image} src="/logo.png"></img>
    <div className={styles.nav}>
      <span className={styles.link}>About Us</span>
      <span className={styles.link}>Services</span>
      <span className={styles.link}>Cases</span>
      <span className={styles.link}>Contacts</span>
    </div>
  </header>
  )
}

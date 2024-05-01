import styles from "./header.module.css"
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header_main}>
    <img className={styles.image} src="/logo.png"></img>
    <div className={styles.nav}>
        <Link className={styles.link_wrapper} href="#about"><span className={styles.link}>About Us</span></Link>
        <Link className={styles.link_wrapper} href="#services"><span className={styles.link}>Services</span></Link>
        <Link className={styles.link_wrapper} href="#cases"><span className={styles.link}>Cases</span></Link>
        <Link className={styles.link_wrapper} href="#contacts"><span className={styles.link}>Contacts</span></Link>
      </div>
  </header>
  )
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.main}>
        <img className={styles.image} src="/logo.png"></img>
        <div className={styles.nav}>
          <span className={styles.link}>About</span>
          <span className={styles.link}>Services</span>
          <span className={styles.link}>Cases</span>
          <span className={styles.link}>Contacts</span>
        </div>
      </header>
      <div className={styles.hero_main}>
        
      </div>
    </main>
  );
}

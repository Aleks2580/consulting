import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header_main}>
        <img className={styles.image} src="/logo.png"></img>
        <div className={styles.nav}>
          <span className={styles.link}>About Us</span>
          <span className={styles.link}>Services</span>
          <span className={styles.link}>Cases</span>
          <span className={styles.link}>Contacts</span>
        </div>
      </header>
      <div className={styles.hero_main}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>
            Strategic Consulting and Research Solutions{" "}
            <span className={styles.span}> Globally</span>
          </h1>
          <p className={styles.hero_text}>
            At OrientPath, we are committed to creating significant impact and
            delivering measurable results worldwide. Since 2016, we've been at
            the forefront of providing expert strategies and insights, ensuring
            success for diverse markets across the globe.
          </p>
        </div>
      </div>
      <div className={styles.mouse}>
        <div className={styles.mouse_icon}>
          <span className={styles.mouse_wheel}></span>
        </div>
      </div>
    </main>
  );
}

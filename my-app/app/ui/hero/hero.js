import styles from "./hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero_main}>
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
      <button className={styles.hero_button}>Contact Us</button>
    </div>
  </section>
  )
}

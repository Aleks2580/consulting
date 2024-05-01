'use client'
import { Fade } from "react-awesome-reveal";
import styles from "./hero.module.css"
import Mouse from "../mouse/mouse"
import Link from "next/link"

export default function Hero() {
  return (
    <section className={styles.hero_main}>
    <div className={styles.hero_content}>
    <Fade direction="up" delay={1000} duration={3000}>
      <h1 className={styles.hero_title}>
        Strategic Consulting and Research Solutions{" "}
        Globally
      </h1>
      </Fade>
      <Fade direction="up" delay={2200} duration={4000}>
      <p className={styles.hero_text}>
        At OrientPath, we are committed to creating significant impact and
        delivering measurable results worldwide. Since 2016, we've been at
        the forefront of providing expert strategies and insights, ensuring
        success for diverse markets across the globe.
      </p>
      </Fade>
      <Fade direction="up" delay={3800} duration={4000}>
      <Link href="#contacts">
      <button className={styles.hero_button}>Contact Us</button>
      </Link>
      </Fade>
    </div>
    <Mouse/>
  </section>
  )
}

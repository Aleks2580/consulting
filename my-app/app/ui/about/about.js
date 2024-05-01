'use client'
import styles from "./about.module.css";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
      <div className={styles.about_container}>
        <Fade direction="left">
        <div className={styles.about_card}>
          <img
            className={styles.about_img}
            src="strategy.webp"
            alt="Strategic Consulting"
          />
          <h3 className={styles.about_title}>Who We Are</h3>
          <p className={styles.about_text}>
          Meet OrientPath: Your strategic ally in mastering the complex dynamics of today's global markets. We bring clarity and direction to your business challenges.
          </p>
        </div>
        </Fade>
        <Fade direction="left" delay={1000}>
        <div className={styles.about_card}>
          <img
            className={styles.about_img}
            src="mission.webp"
            alt="Our Mission"
          />
          <h3 className={styles.about_title}>Our Mission</h3>
          <p className={styles.about_text}>
          We are committed to fortifying your business with forward-thinking strategies and robust solutions that drive sustained growth and success.
          </p>
        </div>
        </Fade>
        <Fade direction="left" delay={2000}>
        <div className={styles.about_card}>
          <img
            className={styles.about_img}
            src="services.webp"
            alt="What We Do"
          />
          <h3 className={styles.about_title}>What We Do</h3>
          <p className={styles.about_text}>
          OrientPath specializes in crafting customized strategies that address the unique challenges of your business, driving efficiency and competitive advantage in your industry.
          </p>
        </div>
        </Fade>
        <Fade direction="left" delay={3000}>
        <div className={styles.about_card}>
          <img
            className={styles.about_img}
            src="choice.webp"
            alt="Why Choose Us"
          />
          <h3 className={styles.about_title}>Why Choose Us</h3>
          <ul className={styles.about_list}>
            <li className={styles.about_point}>
            Expert Insight: Deep industry knowledge across diverse sectors.
            </li>
            <li className={styles.about_point}>
            Innovative Methods: Our approach integrates global insights.
            </li>
            <li className={styles.about_point}>
              Proven Results: Focused on delivering measurable success.
            </li>
          </ul>
        </div>
        </Fade>
      </div>
  );
}

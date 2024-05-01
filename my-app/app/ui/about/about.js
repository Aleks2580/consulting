import styles from "./about.module.css"

export default function About () {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_card}>
        <img className={styles.about_img} src="strategy.webp" alt="Strategic Consulting"/>
        <h3 className={styles.about_title} >Who We Are</h3>
        <p className={styles.about_text} >Welcome to OrientPath, your strategic partner in navigating the complexities of modern business landscapes.</p>
      </div>

      <div className={styles.about_card}>
        <img className={styles.about_img} src="mission.webp" alt="Our Mission"/>
        <h3 className={styles.about_title}>Our Mission</h3>
        <p className={styles.about_text} >Our mission is to empower businesses with innovative strategies and sustainable solutions that enable them to thrive.</p>
      </div>

      <div className={styles.about_card}>
        <img className={styles.about_img} src="services.webp" alt="What We Do"/>
        <h3 className={styles.about_title}>What We Do</h3>
        <p className={styles.about_text} >Leveraging Next.js, we create dynamic, fast, and scalable solutions that enhance your business operations.</p>
      </div>

      <div className={styles.about_card}>
        <img className={styles.about_img} src="choice.webp" alt="Why Choose Us"/>
        <h3 className={styles.about_title}>Why Choose Us</h3>
        <ul className={styles.about_list} >
          <li className={styles.about_point} >Expertise: Decades of experience across various sectors.</li>
          <li className={styles.about_point}>Innovation: Using cutting-edge technology like Next.js.</li>
          <li className={styles.about_point}> Results-Driven: Committed to delivering tangible outcomes.</li>
        </ul>
      </div>
      </div>
      )
      }

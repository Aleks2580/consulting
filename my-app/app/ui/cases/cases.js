import styles from "./cases.module.css";
import Image from "next/image";

export default function Cases() {
  return (
    <section className={styles.cases_section}>
      <div className={styles.header}>
        <h1 className={styles.header_title}>Successful Partnerships</h1>
        <p className={styles.header_description}>Discover how our strategic insights and innovative approaches have driven success and satisfaction for our clients across various industries.</p>
      </div>
      <div className={styles.case_container}>
        <div className={styles.case_item}>
          <div className={styles.image_container}>
            <Image src="/biogenhealth.webp" alt="BioGenHealth Case" width={300} height={300} className={styles.case_image} />
          </div>
          <div className={styles.case_content}>
            <h2 className={styles.case_title}>BioGenHealth</h2>
            <p className={styles.case_description}>Streamlined operational processes and implemented digital tools, increasing production efficiency by 40%.</p>
          </div>
        </div>
        <div className={styles.case_item}>
          <div className={styles.image_container}>
            <Image src="/finsecure.webp" alt="FinSecure Case" width={300} height={300} className={styles.case_image} />
          </div>
          <div className={styles.case_content}>
            <h2 className={styles.case_title}>FinSecure</h2>
            <p className={styles.case_description}>Developed a comprehensive risk management framework, reducing operational risks by 30%.</p>
          </div>
        </div>
        <div className={styles.case_item}>
          <div className={styles.image_container}>
            <Image src="/ecosynthetics.webp" alt="EcoSynthetics Case" width={300} height={300} className={styles.case_image} />
          </div>
          <div className={styles.case_content}>
            <h2 className={styles.case_title}>EcoSynthetics</h2>
            <p className={styles.case_description}>Guided through digital transformation, integrating sustainable practices, increasing market share by 25%.</p>
          </div>
        </div>
        <div className={styles.case_item}>
          <div className={styles.image_container}>
            <Image src="/medicaresolutions.webp" alt="MediCare Solutions Case" width={300} height={300} className={styles.case_image} />
          </div>
          <div className={styles.case_content}>
            <h2 className={styles.case_title}>MediCare Solutions</h2>
            <p className={styles.case_description}>Strategic overhaul focusing on regulatory compliance and market analysis, leading position in emerging markets.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from "./contacts.module.css"

export default function Contacts() {
  return (
    <section className={styles.contacts_main}>
    <div className={styles.contact_item}>
      <a className={styles.contact_a} href="tel:+1234567890">
        <img className={styles.contact_img} src='phone.png'/>
        <p className={styles.contact_text}>+123 456 7890</p>
      </a>
    </div>
    <div className={styles.contact_item}>
      <a className={styles.contact_a} href="mailto:email@example.com">
        <img className={styles.contact_img} src='email.png'/>
        <p className={styles.contact_text}>email@example.com</p>
      </a>
    </div>
    <div className={styles.contact_item}>
      <a className={styles.contact_a} href="https://maps.google.com/?q=123+Main+St,+City,+Country" target="_blank">
        <img className={styles.contact_img} src='location.png'/>
        <p className={styles.contact_text}>123 Main St, City, Country</p>
      </a>
    </div>
  </section>
  )
}

import styles from "./contacts.module.css"

export default function Contacts() {
  return (
    <section className={styles.contacts_main}>
    <div className={styles.contact_item}>
      <a className={styles.contact_a} href="tel:+65 89398600">
        <img className={styles.contact_img} src='phone.png'/>
        <p className={styles.contact_text}>+65 89398600</p>
      </a>
    </div>
    <div className={styles.contact_item}>
      <a className={styles.contact_a} href="mailto:bobmailaccount@proton.me">
        <img className={styles.contact_img} src='email.png'/>
        <p className={styles.contact_text}>bobmailaccount@proton.me</p>
      </a>
    </div>
    <div className={styles.contact_item}>
      <a className={styles.contact_a} href="https://www.google.com.hk/maps/place/51+Goldhill+Plaza,+Singapore+308900/@1.3178634,103.8434226,17z/data=!3m1!4b1!4m6!3m5!1s0x31da19e7c7aa13d5:0xdfbcfc3c2d9c8768!8m2!3d1.3178634!4d103.8434226!16s%2Fg%2F11cskf0v6x?entry=ttu" target="_blank">
        <img className={styles.contact_img} src='location.png'/>
        <p className={styles.contact_text}>51 Goldhill Plaza 15-04, Singapore</p>
      </a>
    </div>
  </section>
  )
}

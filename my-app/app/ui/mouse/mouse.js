import Link from "next/link";
import styles from "./mouse.module.css";

export default function Mouse() {
  return (
      <div className={styles.mouse}>
        <Link href='#about'>
        <div className={styles.mouse_icon}>
          <span className={styles.mouse_wheel}></span>
        </div>
        </Link>
      </div>
    
  );
}

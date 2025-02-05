/**
 * Footer.jsx
 * © 2025 yoona. All rights reserved.
 */

import styles from "./../assets/scss/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.top}>CHOYOONA</p>
      <div className={styles.bottom}>
        <p>©2025 Yoona. All rights reserved.</p>
        <ul>
          <li>T. 010 2101 9758</li>
          <li>M. yacho.215@gmail.com</li>
        </ul>
      </div>
    </footer>
  );
}

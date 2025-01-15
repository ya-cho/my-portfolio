import { Link } from "react-router-dom";
import styles from "./../assets/scss/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/page1" className={styles.logo}>
          <span className="blind">홈화면으로 이동</span>
        </Link>
      </h1>
    </header>
  );
}

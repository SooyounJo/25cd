import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Navigation({ currentPage = "" }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>TechCorp</Link>
        <div className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${currentPage === 'home' ? styles.active : ''}`}>
            홈
          </Link>
          <Link href="/about" className={`${styles.navLink} ${currentPage === 'about' ? styles.active : ''}`}>
            회사소개
          </Link>
          <Link href="/portfolio" className={`${styles.navLink} ${currentPage === 'portfolio' ? styles.active : ''}`}>
            포트폴리오
          </Link>
          <Link href="/contact" className={`${styles.navLink} ${currentPage === 'contact' ? styles.active : ''}`}>
            연락처
          </Link>
        </div>
      </div>
    </nav>
  );
}

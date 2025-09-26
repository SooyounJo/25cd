import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>조수연</h4>
            <p>창의적인 디자인으로 세상을 더 아름답게 만듭니다.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>빠른 링크</h4>
            <Link href="/about" className={styles.footerLink}>소개</Link>
            <Link href="/portfolio" className={styles.footerLink}>포트폴리오</Link>
            <Link href="/contact" className={styles.footerLink}>연락처</Link>
          </div>
          <div className={styles.footerSection}>
            <h4>연락처</h4>
            <p>이메일: suyeon@example.com</p>
            <p>전화: 010-1234-5678</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 조수연. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

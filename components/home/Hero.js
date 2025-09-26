import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  primaryButtonText, 
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink 
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {title}
        </h1>
        <p className={styles.heroDescription}>
          {description}
        </p>
        <div className={styles.heroButtons}>
          <Link href={primaryButtonLink} className={styles.primaryButton}>
            {primaryButtonText}
          </Link>
          <Link href={secondaryButtonLink} className={styles.secondaryButton}>
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

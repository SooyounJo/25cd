import styles from "@/styles/Home.module.css";

export default function PageHeader({ title, subtitle }) {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>{title}</h1>
        <p className={styles.pageSubtitle}>{subtitle}</p>
      </div>
    </section>
  );
}

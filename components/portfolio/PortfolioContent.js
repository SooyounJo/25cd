import styles from "@/styles/Home.module.css";
import PortfolioItem from "./PortfolioItem";

export default function PortfolioContent({ portfolioItems }) {
  return (
    <section className={styles.portfolioContent}>
      <div className={styles.container}>
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

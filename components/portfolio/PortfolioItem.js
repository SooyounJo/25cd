import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function PortfolioItem({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  tags = [] 
}) {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.portfolioImage}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: 'cover' }}
            priority={imageSrc.includes('pro1')}
          />
        ) : (
          <div className={styles.placeholderImage}>{title}</div>
        )}
      </div>
      <div className={styles.portfolioInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.portfolioTags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

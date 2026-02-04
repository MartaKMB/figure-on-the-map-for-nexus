import styles from '../Hero/Hero.module.css';

interface HeroProps {
  heroName: string;
  color: string;
}

export function Hero({ heroName, color }: HeroProps) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{heroName}</div>
      <div className={`${styles.hero} ${styles.color}`}>HERO {color}</div>
    </div>
  );
}

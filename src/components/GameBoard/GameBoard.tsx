import { Hero } from '../Hero/Hero';
import styles from './GameBoard.module.css';

interface GameBoardProps {
  heroAttributes: {
    heroName: string;
    color: string;
  };
}

export function GameBoard({ heroAttributes }: GameBoardProps) {
  return (
    <section className={styles.container}>
      <h2>start your adventure</h2>
      <div className={styles.map}>
          <Hero
            heroName={heroAttributes.heroName}
            color={heroAttributes.color}
          />
      </div>
    </section>
  );
}

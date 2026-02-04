import { Hero } from '../Hero/Hero';
import styles from './GameBoard.module.css';

interface GameBoardProps {
  withHero: boolean;
  heroAttributes: {
    heroName: string;
    color: string;
  };
}

export function GameBoard({ withHero, heroAttributes }: GameBoardProps) {
  return (
    <section className={styles.container}>
      <h2>start your adventure</h2>
      <div className={styles.map}>
        {withHero && (
          <Hero
            heroName={heroAttributes.heroName}
            color={heroAttributes.color}
          />
        )}
      </div>
    </section>
  );
}

import { Hero } from '../Hero/Hero';
import styles from './GameBoard.module.css';
import { useArrowMovement } from '../../hooks/useArrowMovement';

const BOARD_SIZE = 5;

interface GameBoardProps {
  heroAttributes: {
    heroName: string;
    color: string;
  };
}

export function GameBoard({ heroAttributes }: GameBoardProps) {
  const { position } = useArrowMovement({
    boardWidth: BOARD_SIZE,
    boardHeight: BOARD_SIZE,
  });

  return (
    <section className={styles.container}>
      <h2>start your adventure</h2>

      <div className={styles.map}>
        <Hero
          heroName={heroAttributes.heroName}
          color={heroAttributes.color}
          position={position}
        />
      </div>
    </section>
  );
}

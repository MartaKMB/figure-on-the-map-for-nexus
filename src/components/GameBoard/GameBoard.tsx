import { useEffect, useState } from 'react';
import { Hero } from '../Hero/Hero';
import styles from './GameBoard.module.css';

const BOARD_SIZE = 5;

interface GameBoardProps {
  heroAttributes: {
    heroName: string;
    color: string;
  };
}

export function GameBoard({ heroAttributes }: GameBoardProps) {
  const [position, setPosition] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPosition((prev) => {
        switch (e.key) {
          case 'ArrowUp':
            return { ...prev, y: Math.max(1, prev.y - 1) };
          case 'ArrowDown':
            return { ...prev, y: Math.min(BOARD_SIZE, prev.y + 1) };
          case 'ArrowLeft':
            return { ...prev, x: Math.max(1, prev.x - 1) };
          case 'ArrowRight':
            return { ...prev, x: Math.min(BOARD_SIZE, prev.x + 1) };
          default:
            return prev;
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

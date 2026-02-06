import styles from '../Hero/Hero.module.css';
import { useKeyPress } from '../../hooks/useKeyPress';

interface HeroProps {
  heroName: string;
  color: string;
}

export function Hero({ heroName, color }: HeroProps) {
  const keyUpPressed = useKeyPress('ArrowUp');
  const keyDownPressed = useKeyPress('ArrowDown');
  const keyLeftPressed = useKeyPress('ArrowLeft');
  const keyRightPressed = useKeyPress('ArrowRight');
  return (
    <>
      <div className={styles.container}>
        {heroName.length > 0 && <div className={styles.name}>{heroName}</div>}
        <div className={`${styles.hero} ${styles.color}`}>HERO {color}</div>
      </div>
      <div>
        {keyUpPressed
          ? 'Naciśnięto ↑ ArrowUp!'
          : 'Naciśnij ↑ ArrowUp (skup fokus na Hero)'}
      </div>
      <div>
        {keyLeftPressed
          ? 'Naciśnięto ArrowLeft!'
          : 'Naciśnij ArrowLeft (skup fokus na Hero)'}
      </div>
      <div>
        {keyRightPressed
          ? 'Naciśnięto ArrowRight!'
          : 'Naciśnij ArrowRight (skup fokus na Hero)'}
      </div>
      <div>
        {keyDownPressed
          ? 'Naciśnięto ArrowDown!'
          : 'Naciśnij ArrowDown (skup fokus na Hero)'}
      </div>
    </>
  );
}

import styles from '../Hero/Hero.module.css';
import { HeroSvg } from '../../svgComponents/HeroSvg';

interface HeroProps {
  heroName: string;
  color: string;
    position: {
    x: number;
    y: number;
  };
}

export function Hero({ heroName, color, position }: HeroProps) {
  return (
      <div className={styles.container} style={{
        gridColumn: position.x,
        gridRow: position.y,
      }}
      tabIndex={0}>
        {heroName.length > 0 && <div className={styles.name} style={{color: color}}>{heroName}</div>}
        <HeroSvg color={color} />
      </div>
  );
}

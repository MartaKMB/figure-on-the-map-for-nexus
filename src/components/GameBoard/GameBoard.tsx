import { Hero } from "../Hero/Hero"
import styles from "./GameBoard.module.css"

export function GameBoard() {
    return <section className={styles.container}>
        <h2>start your adventure</h2>
        <div className={styles.map}>
          <Hero heroName="testowe" color="#fff"/>
        </div>
      </section>
}

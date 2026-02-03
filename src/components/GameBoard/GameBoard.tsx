import styles from "./GameBoard.module.css"

export function GameBoard() {
    return <section className={styles.container}>
        <h2>start your adventure</h2>
        <div className={styles.map}>
          <div className={styles.hero}>YOUR HERO</div>
        </div>
      </section>
}

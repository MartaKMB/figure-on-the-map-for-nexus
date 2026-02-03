import styles from "./Form.module.css"

export function Form() {
    return <section className={styles.container}>
        <h2>create your hero</h2>
        <form>
            <label>name</label>
            <input type="text" className={styles.input}/>
            <label>choose color</label>
            <input type="color" className={styles.inputColor}/>
            <button className={styles.button}>create!</button>
        </form>
      </section>
}

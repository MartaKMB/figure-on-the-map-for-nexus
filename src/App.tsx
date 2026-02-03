import styles from './App.module.css'
import { Form } from './components/Form/Form'
import { GameBoard } from './components/GameBoard/GameBoard'

function App() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Figure on the map</h1>
      </header>
      <Form />
      <GameBoard />
    </main>
  )
}

export default App

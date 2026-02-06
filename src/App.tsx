import { useState } from 'react';
import styles from './App.module.css';
import { Form } from './components/Form/Form';
import { GameBoard } from './components/GameBoard/GameBoard';

function App() {
  const [heroAttributes, setHeroAttributes] = useState({
    heroName: '',
    color: '',
  });

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Figure on the map</h1>
      </header>
      <Form
        onFormSubmit={(name: string, color: string) => setHeroAttributes({ heroName: name, color: color })}
      />
      <GameBoard heroAttributes={heroAttributes} />
    </main>
  );
}

export default App;

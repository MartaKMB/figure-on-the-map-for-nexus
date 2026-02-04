import { useState } from 'react';
import styles from './App.module.css';
import { Form } from './components/Form/Form';
import { GameBoard } from './components/GameBoard/GameBoard';

function App() {
  const [isHeroReady, setIsHeroReady] = useState(false);
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
        onFormSubmit={(name: string, color: string) => {
          setIsHeroReady(true);
          setHeroAttributes({ heroName: name, color: color });
        }}
      />
      <GameBoard withHero={isHeroReady} heroAttributes={heroAttributes} />
    </main>
  );
}

export default App;

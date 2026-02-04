import { useState } from 'react';
import styles from './Form.module.css';

interface FormProps {
  onFormSubmit(name: string, color: string): void;
}

export function Form({ onFormSubmit }: FormProps) {
  const [inputName, setInputName] = useState('');
  const [inputColor, setInputColor] = useState('');
  return (
    <section className={styles.container}>
      <h2>create your hero</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputColor);
          onFormSubmit(inputName, inputColor);
        }}
      >
        <label>name</label>
        <input
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          type='text'
          className={styles.input}
        />
        <label>choose color</label>
        <input
          value={inputColor}
          onChange={(e) => setInputColor(e.target.value)}
          type='color'
          className={styles.inputColor}
        />
        <button className={styles.button}>create!</button>
      </form>
    </section>
  );
}

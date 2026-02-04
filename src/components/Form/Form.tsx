import { useState } from 'react';
import styles from './Form.module.css';

interface FormProps {
  onFormSubmit(name: string, color: string): void;
}

export function Form({ onFormSubmit }: FormProps) {
  const [inputName, setInputName] = useState('');
  const [inputColor, setInputColor] = useState('');
  const [colorName, setColorName] = useState('');

  function handleLoadColor(hex: string) {
    const hexFetch = hex.slice(1);
    fetch(`https://www.thecolorapi.com/id?hex=${hexFetch}`)
      .then((res) => res.json())
      .then((res) => setColorName(res.name.value));
  }

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
        <div className={styles.inputContainer}>
          <input
            value={inputColor}
            onChange={(e) => {
              handleLoadColor(e.target.value);
              setInputColor(e.target.value);
            }}
            type='color'
            className={styles.inputColor}
          />
          <p>{colorName}</p>
        </div>
        <button className={styles.button}>create!</button>
      </form>
    </section>
  );
}

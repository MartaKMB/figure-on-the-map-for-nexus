import { useState } from 'react';
import styles from './Form.module.css';
import { HEX_API } from '../../constants/hexApi';

interface FormProps {
  onFormSubmit(name: string, color: string): void;
}

export function Form({ onFormSubmit }: FormProps) {
  const [inputName, setInputName] = useState('');
  const [inputColor, setInputColor] = useState('');
  const [colorName, setColorName] = useState('');

  function handleLoadColor(hex: string) {
    const noHashHex = hex.slice(1);
    try {
      fetch(`${HEX_API}${noHashHex}`)
      .then((res) => res.json())
      .then((res) => setColorName(res?.name?.value || 'no color name'));
    } catch(error) {
      console.warn(error);
      setColorName('error: no color name');
    }
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>create your hero</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit(inputName, inputColor);
        }}
      >
        <label htmlFor="inputName">name</label>
        <input
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          type='text'
          className={styles.input}
          id="inputName"
        />
        <label htmlFor='inputColor'>choose color</label>
        <div className={styles.inputContainer}>
          <input
            value={inputColor}
            onChange={(e) => {
              handleLoadColor(e.target.value);
              setInputColor(e.target.value);
            }}
            type='color'
            className={styles.inputColor}
            id="inputColor"
          />
          <p>{colorName}</p>
        </div>
        <button className={styles.button}>create!</button>
      </form>
    </section>
  );
}

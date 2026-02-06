import styles from './Form.module.css';
import { useHeroForm } from '../../hooks/useHeroForm';
import { useColorName } from '../../hooks/useColorName';

interface FormProps {
  onFormSubmit(name: string, color: string): void;
}

export function Form({ onFormSubmit }: FormProps) {
  const { name, color, setName, setColor, submit } =
    useHeroForm(onFormSubmit);

  const { colorName } = useColorName(color);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>create your hero</h2>

      <form onSubmit={submit}>
        <label htmlFor="inputName">name</label>
        <input
          id="inputName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />

        <label htmlFor="inputColor">choose color</label>
        <div className={styles.inputContainer}>
          <input
            id="inputColor"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={styles.inputColor}
          />
          <p>{colorName}</p>
        </div>

        <button className={styles.button}>create!</button>
      </form>
    </section>
  );
}

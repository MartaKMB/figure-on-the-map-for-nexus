import { useState } from 'react';

export function useHeroForm(onSubmit: (name: string, color: string) => void) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    onSubmit(name, color);
  }

  return {
    name,
    color,
    setName,
    setColor,
    submit,
  };
}

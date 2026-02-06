import { useEffect, useState } from 'react';
import { HEX_API } from '../constants/hexApi';

export function useColorName(hex: string) {
  const [colorName, setColorName] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!hex) return;

    const noHashHex = hex.slice(1);
    let cancelled = false;

    async function loadColor() {
      try {
        setError(false);
        const res = await fetch(`${HEX_API}${noHashHex}`);
        const data = await res.json();

        if (!cancelled) {
          setColorName(data?.name?.value || 'unknown color');
        }
      } catch {
        if (!cancelled) {
          setError(true);
          setColorName('error');
        }
      }
    }

    loadColor();

    return () => {
      cancelled = true;
    };
  }, [hex]);

  return { colorName, error };
}

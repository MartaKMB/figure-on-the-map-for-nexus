import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface UseArrowMovementParams {
  boardWidth: number;
  boardHeight: number;
  initialPosition?: Position;
}

export function useArrowMovement({
  boardWidth,
  boardHeight,
  initialPosition = { x: 1, y: 1 },
}: UseArrowMovementParams) {
  const [position, setPosition] = useState<Position>(initialPosition);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let next = position;

      switch (e.key) {
        case 'ArrowUp':
          next = { ...position, y: position.y - 1 };
          break;
        case 'ArrowDown':
          next = { ...position, y: position.y + 1 };
          break;
        case 'ArrowLeft':
          next = { ...position, x: position.x - 1 };
          break;
        case 'ArrowRight':
          next = { ...position, x: position.x + 1 };
          break;
        default:
          return;
      }

      if (
        next.x < 1 ||
        next.y < 1 ||
        next.x > boardWidth ||
        next.y > boardHeight
      ) {
        return;
      }

      setPosition(next);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [position, boardWidth, boardHeight]);

  return {
    position,
    setPosition,
  };
}

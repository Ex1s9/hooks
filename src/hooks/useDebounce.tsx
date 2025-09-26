// 5. useDebounce
//    - Задержка выполнения (полезно для поиска)
//    - Принимает: value, delay
//    - Возвращает: debouncedValue
//    - Применение: поиск, API запросы при вводе

import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce };

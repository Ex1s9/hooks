// 4. useLocalStorage
//    - Синхронизация состояния с localStorage
//    - Принимает: key, defaultValue
//    - Возвращает: [value, setValue]
//    - Применение: настройки, темы, сохранение данных

import { useEffect, useState } from "react";

function useLocalStorage(key: string, defaultValue: string): [string, (value: string) => void] {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      setValue(storedValue);
    } else {
      localStorage.setItem(key, defaultValue);
      setValue(defaultValue);
    }
  }, [key, defaultValue]);

  const setStoredValue = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStoredValue];
}

export { useLocalStorage };

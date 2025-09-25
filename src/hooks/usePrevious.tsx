// 3. usePrevious
//    - Хранит предыдущее значение переменной
//    - Принимает: любое значение
//    - Возвращает: предыдущее значение
//    - Применение: анимации, сравнение изменений

import { useRef, useEffect } from "react";

function usePrevious<T>(value: T) {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export { usePrevious };

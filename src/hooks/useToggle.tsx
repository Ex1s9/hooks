// 1. useToggle
//    - Переключатель true/false с функцией toggle
//    - Возвращает: [value, toggle, setTrue, setFalse]
//    - Применение: модалки, показать/скрыть элементы

import { useState } from "react";

function useToggle(value: boolean = false) {
  const [state, setState] = useState(value);

  const toggle = () => setState(!state);
  const setTrue = () => setState(true);
  const setFalse = () => setState(false);

  return [state, toggle, setTrue, setFalse] as const;
}

export { useToggle };

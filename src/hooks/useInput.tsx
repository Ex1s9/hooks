// 2. useInput
//    - Управление значением и onChange для инпутов
//    - Возвращает: {value, onChange, reset, setValue}
//    - Применение: формы, поля ввода

import { ChangeEvent, useState } from "react";

function useInput(initialValue: string = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return { value, onChange, reset, setValue };
}

export { useInput };

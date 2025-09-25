import { useEffect, useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

function useDocumentTitle(title: string) {
  const [prevTitle, setPrevTitle] = useState<string>("");

  useEffect(() => {
    setPrevTitle(document.title);

    document.title = title;

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}

export { useCounter, useDocumentTitle };

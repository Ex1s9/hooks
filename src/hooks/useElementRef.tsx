// 9. useElementRef
// - Расширенная работа с ref элементов
// - Возвращает: { ref, element, isConnected, scrollTo, focus, blur, getBoundingRect, getComputedStyle }
// - Применение: прямое управление DOM элементами

import { useCallback, useState } from "react";

function useElementRef<T extends HTMLElement>() {
     const [element, setElement] = useState<T | null>(null);
     const ref = useCallback((node: T | null) => {
          setElement(node);
     }, []);

     const isConnected = !!element?.isConnected;

     const scrollTo = useCallback(
          (options?: ScrollIntoViewOptions) => {
               element?.scrollIntoView(options);
          },
          [element]
     );

     const focus = useCallback(() => {
          element?.focus();
     }, [element]);

     const blur = useCallback(() => {
          element?.blur();
     }, [element]);

     const getBoundingRect = useCallback(() => {
          return element?.getBoundingClientRect() || null;
     }, [element]);

     const getComputedStyle = useCallback(() => {
          return element ? window.getComputedStyle(element) : null;
     }, [element]);

     return { ref, element, isConnected, scrollTo, focus, blur, getBoundingRect, getComputedStyle };
}

export default useElementRef;
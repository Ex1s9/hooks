import { useCallback } from "react";

interface DomPathResult {
  findDomPath: (startElement: Element, targetElement: Element) => string;
  findElementByPath: (startElement: Element, path: string) => Element | null;
}

function useDomPath(): DomPathResult {
  const findDomPath = useCallback((startElement: Element, targetElement: Element): string => {
    if (startElement === targetElement) {
      return ":scope";
    }

    if (!startElement.contains(targetElement)) {
      throw new Error("Target element is not inside start element");
    }

    const pathParts: string[] = [];
    let currentElement = targetElement;

    while (currentElement && currentElement !== startElement) {
      let selector = currentElement.tagName.toLowerCase();
      
      if (currentElement.className) {
        const classes = currentElement.className.trim().split(/\s+/).join('.');
        selector += `.${classes}`;
      }

      const parent = currentElement.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter(
          child => child.tagName === currentElement.tagName
        );
        
        if (siblings.length > 1) {
          const index = siblings.indexOf(currentElement) + 1;
          selector += `:nth-of-type(${index})`;
        }
      }

      pathParts.unshift(selector);
      currentElement = parent!;
    }

    return pathParts.join(' > ');
  }, []);

  const findElementByPath = useCallback((startElement: Element, path: string): Element | null => {
    if (path === ":scope") {
      return startElement;
    }

    try {
      return startElement.querySelector(path);
    } catch (error) {
      return null;
    }
  }, []);

  return { findDomPath, findElementByPath };
}

export { useDomPath };
import React, {useEffect, useRef, useState} from "react";


export function useElementOnScreen(options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8
}): [React.MutableRefObject<HTMLElement | null>, boolean] {
  const containerRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const callbackFunc = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    setVisible(entry.isIntersecting)
  }

  useEffect(() => {
      const observer = new IntersectionObserver(callbackFunc, options)
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      }
    },
    [containerRef, options])
  return [containerRef, isVisible];
}

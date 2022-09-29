import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
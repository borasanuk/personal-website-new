import { useEffect, useState } from "react";

export const useScrollPosition = () => {
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

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({width: window.innerWidth, height: window.innerHeight});
    };
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return dimensions;
};

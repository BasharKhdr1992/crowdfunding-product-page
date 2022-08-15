import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [width, setWindowWidth] = useState(window.innerWidth);
  const [height, setWindowHeight] = useState(window.innerHeight);

  const adjustWindowSize = (e) => {
    setWindowWidth(e.target.innerWidth);
    setWindowHeight(e.target.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", adjustWindowSize);
    return () => window.removeEventListener("resize", adjustWindowSize);
  });

  return [width, height];
};

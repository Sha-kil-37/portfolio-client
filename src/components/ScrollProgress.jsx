
// ProgressBar.js
import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // This function will track the scroll position
  const updateScrollProgress = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;

    setScrollProgress(progress);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "5px",
        backgroundColor: "#E53888", // Change the color as needed
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${scrollProgress}%`,
          backgroundColor: "#4caf50", // Change the color as needed
          transition: "width 0.1s ease-out",
        }}
      ></div>
    </div>
  );
};

export default ScrollProgress;


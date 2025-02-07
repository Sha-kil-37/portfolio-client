// src/Loader.js
import { useEffect, useState } from "react";
//
const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  //
  useEffect(() => {
    // Simulate loading delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setIsAnimating(true);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(loadingTimeout);
  }, []);
  //
  return (
    <div className={`loader-container ${isAnimating ? "animate" : ""}`}>
      <div className="loader-background"></div>
      <div className="loader-content">
        {isLoading ? "Loading..." : "Welcome!"}
      </div>
    </div>
  );
};

export default Loader;

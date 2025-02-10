import { useState, useEffect } from "react";
//
const PercentageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
//
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + Math.floor(Math.random() * 10) + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          onComplete(); // Call when loading is done
          return 100;
        }
        return newProgress;
      });
    }, 300); // Adjust speed here

    return () => clearInterval(interval);
  }, [onComplete]);
//
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
       <p>Please wait...</p>
      <div className="relative w-64 h-2 bg-gray-700 rounded">
       
        <div
          className="absolute top-0 left-0 h-2 bg-primary rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-4 text-xl font-bold font-primary">{progress}%</p>
    </div>
  );
};

export default PercentageLoader;

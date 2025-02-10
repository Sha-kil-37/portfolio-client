import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PercentageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");
  //
  useEffect(() => {
    // Animate dots (e.g., "Please Wait." -> "Please Wait.." -> "Please Wait...")
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    // Animate loading percentage
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + Math.floor(Math.random() * 10) + 5;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          clearInterval(dotsInterval);
          onComplete(); // Notify parent when loading is done
          return 100;
        }
        return newProgress;
      });
    }, 250);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.p
        className="mt-2 text-lg font-semibold text-gray-300"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Please Wait{dots}
      </motion.p>
      <p>{progress}%</p>
    </div>
  );
};

export default PercentageLoader;

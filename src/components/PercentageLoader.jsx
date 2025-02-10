import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
//
const PercentageLoader = ({ onComplete }) => {
  //
  let text = "Hey there! Wait a minute...";
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");
  //
  useEffect(() => {
    // Animate dots (e.g., "Please Wait." -> "Please Wait.." -> "Please Wait...")
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length < 4 ? prev + "." : ""));
    }, 250);

    // Animate loading percentage
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + Math.floor(Math.random() * 10) + 5;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          clearInterval(dotsInterval);
          setTimeout(() => onComplete(), 1000); // Delay to let fade out finish
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
  //
  return (
    <section className="relative min-h-screen">
      <AnimatePresence>
        {progress < 100 && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center"
          >
            {/* Animated "Please Wait..." Text */}
            <p className="absolute top-[50%] left-[50%] translate-[-50%] gradient-text text-3xl font-primary font-semibold">
              Please Wait a moment{dots}
            </p>

            {/* Animated Percentage Counter */}
            <p className="absolute bottom-20 left-[50%] translate-x-[-50%] text-xl font-primary font-semibold ">
              {progress}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PercentageLoader;

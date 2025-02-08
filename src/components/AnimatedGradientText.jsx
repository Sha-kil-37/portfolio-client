// Desc: Animated gradient text component for the banner section.
import { motion } from "framer-motion";

const AnimatedGradientText = ({ text, className = "" }) => {
  //

  return (
    <motion.h1
      className={`gradient-text ${className}`}
      initial={{ y: 50, opacity: 0 }} // Start lower and invisible
      animate={{ y: 0, opacity: 1 }} // Move up and fade in
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 1,
      }}
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedGradientText;

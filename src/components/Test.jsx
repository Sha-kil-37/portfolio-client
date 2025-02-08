import { motion } from "framer-motion";
//

const Test = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
     

      <motion.p
        initial={{ opacity: 0, x: 100 }} // Start hidden, move from right
        animate={{ opacity: 1, x: 0 }} // Animate to visible
        transition={{ duration: 1, delay: 0.5 }} // Delay for smooth effect
        className="text-lg mt-4"
      >
        This is a smooth animated effect using Framer Motion.
      </motion.p>
    </div>
  );
};

export default Test;

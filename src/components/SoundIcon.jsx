import { motion } from "framer-motion";
import UseMediaStatus from "../hooks/visitor/UseMediaStatus.jsx";// Custom hook to check if media is playing
import { AudioLines } from "lucide-react";
//
const SoundIcon = () => {
  const isPlaying = UseMediaStatus();
  //
  return (
    <motion.div
      animate={{ scale: isPlaying ? [1, 1.2, 1] : 1, opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 0.2,
      }}
      className=" text-white rounded-full shadow-lg"
      initial={{ opacity: 0, y: -10 }} // Start hidden, move from right
    >
      <AudioLines
        className={`text-3xl ${isPlaying ? "text-green-500" : "text-gray-400"}`}
      />
    </motion.div>
  );
};

export default SoundIcon;

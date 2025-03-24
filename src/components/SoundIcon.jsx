import { motion } from "framer-motion";
import useMediaStatus from "../hooks/visitor/useMediaStatus ";
import { AudioLines } from "lucide-react";
//
const SoundIcon = () => {
  const isPlaying = useMediaStatus();
  //
  return (
    <motion.div
      animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      className=" text-white rounded-full shadow-lg"
    >
      <AudioLines
        className={`text-3xl ${isPlaying ? "text-green-500" : "text-gray-400"}`}
      />
    </motion.div>
  );
};

export default SoundIcon;

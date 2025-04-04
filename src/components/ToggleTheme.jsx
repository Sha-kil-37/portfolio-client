import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState, useRef } from "react";
export default function ToggleTheme({ onClick, theme }) {
  //
  const [isTrue, setIsTrue] = useState(true); // Your condition state
  const audioRef = useRef(new Audio()); // Ref for the audio element
  const toggleAudio = "/src/assets/audio/toggle.mp3"; // Audio URL for toggle on

  // play audio when theme is changed
  const playAudio = () => {
    const selectedAudio = isTrue ? toggleAudio : toggleAudio;
    audioRef.current.src = selectedAudio; // Set the audio source
    audioRef.current.play(); // Play the audio
    setIsTrue(!isTrue); // Toggle condition (optional)
  };
  // handle toggle click
  function handleClick() {
    onClick();
    playAudio();
  }
  //
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }} // Start hidden, move from right
      animate={{ opacity: 1, y: 0 }} // Animate to visible
      transition={{ duration: 1, delay: 0.2 }} // Delay for
    >
      {theme === "dark" ? (
        <button
          onClick={handleClick}
          className="dark:text-test focus:outline-none cursor-pointer"
          title="Toggle dark mode"
        >
          <Sun />
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="dark:text-test focus:outline-none cursor-pointer"
          title="Toggle light mode"
        >
          <Moon />
        </button>
      )}
    </motion.div>
  );
}

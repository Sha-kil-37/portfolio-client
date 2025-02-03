import { createContext, useState, useContext } from "react";
//
const AudioContext = createContext();
//
export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("/src/assets/audio/mymusic3.mp3"));
  // handle toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update state when the music ends
  audio.onended = () => setIsPlaying(false);
  //
  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);

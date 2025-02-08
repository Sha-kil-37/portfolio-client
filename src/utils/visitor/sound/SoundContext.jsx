// Sound Context.js
import { createContext, useState, useContext } from "react";

const SoundContext = createContext();
//
export const SoundProvider = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  //
  return (
    <SoundContext.Provider value={{ isMusicPlaying, setIsMusicPlaying }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);

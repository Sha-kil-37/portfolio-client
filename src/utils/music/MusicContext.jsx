import { useState, createContext, useContext } from "react";

// Create a context for music playback
const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MusicContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);

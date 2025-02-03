import { createContext, useContext, useState, useEffect } from "react";
//
const MyMusicContext = createContext();
//
export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  //
  useEffect(() => {
    const mediaElements = document.querySelectorAll("audio, video");
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    mediaElements.forEach((media) => {
      media.addEventListener("play", handlePlay);
      media.addEventListener("pause", handlePause);
      media.addEventListener("ended", handlePause);
    });

    return () => {
      mediaElements.forEach((media) => {
        media.removeEventListener("play", handlePlay);
        media.removeEventListener("pause", handlePause);
        media.removeEventListener("ended", handlePause);
      });
    };
  }, []);

  return (
    <MyMusicContext.Provider value={{ isPlaying }}>
      {children}
    </MyMusicContext.Provider>
  );
};

export const MusicContext = () => useContext(MyMusicContext);

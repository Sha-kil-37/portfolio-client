import { useEffect } from "react";
import { useSound } from "../../utils/visitor/sound/SoundContext";
// ...
const SoundListener = () => {
  const { setIsMusicPlaying, isMusicPlaying } = useSound();
  // console.log(isMusicPlaying);
  //
  useEffect(() => {
    const audioElements = document.querySelectorAll("audio, video");
    const handlePlay = () => setIsMusicPlaying(true);
    const handlePause = () => setIsMusicPlaying(false);
    const handleEnded = () => setIsMusicPlaying(false);
    //
    audioElements.forEach((element) => {
      element.addEventListener("play", handlePlay);
      element.addEventListener("pause", handlePause);
      element.addEventListener("ended", handleEnded);
    });
    //
    return () => {
      audioElements.forEach((element) => {
        element.removeEventListener("play", handlePlay);
        element.removeEventListener("pause", handlePause);
        element.removeEventListener("ended", handleEnded);
      });
    };
  }, [setIsMusicPlaying]);
  //
  return null;
};
export default SoundListener;

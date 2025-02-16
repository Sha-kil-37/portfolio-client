// SoundIcon.js
import { Fragment } from "react";
import { useSound } from "../utils/visitor/sound/SoundContext";
import { Volume2, VolumeX } from "lucide-react";
//

const SoundIcon = () => {
  const { isMusicPlaying } = useSound();
  // console.log(isMusicPlaying);
  return <Fragment>{isMusicPlaying ? <Volume2 /> : <VolumeX />}</Fragment>;
};

export default SoundIcon;

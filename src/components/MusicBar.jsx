import { useAudio } from "../utils/audio/AudioContext";
//
const MusicBar = () => {
  const { isPlaying } = useAudio();
  //
  return (
    <div className="music-bar">
      <div className={`bar ${isPlaying ? "animate" : ""}`}></div>
      <div className={`bar ${isPlaying ? "animate" : ""}`}></div>
      <div className={`bar ${isPlaying ? "animate" : ""}`}></div>
      <div className={`bar ${isPlaying ? "animate" : ""}`}></div>
    </div>
  );
};

export default MusicBar;

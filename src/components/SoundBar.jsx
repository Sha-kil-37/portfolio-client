import { useMusic } from "../utils/music/MusicContext";

const SoundBar = () => {
  const { isPlaying } = useMusic();

  return (
    <div className={`sound-bar ${isPlaying ? "animate" : ""}`}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default SoundBar;

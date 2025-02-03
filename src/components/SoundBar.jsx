import { MusicContext } from "../utils/music/MusicContext";

const SoundBar = () => {
  const { isPlaying } = MusicContext();
  //
  return (
    <div className={`sound-bar ${isPlaying ? "playing" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default SoundBar;

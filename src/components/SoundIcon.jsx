// SoundIcon.js
import { useSound } from '../utils/sound/SoundContext';


const SoundIcon = () => {
  const { isMusicPlaying } = useSound();

  return (
    <div className={`sound-icon ${isMusicPlaying ? 'animate' : ''}`}>
      🔊
    </div>
  );
};

export default SoundIcon;

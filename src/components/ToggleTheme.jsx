import { useState, useRef } from "react";
import { useAudio } from "../utils/audio/AudioContext";

export default function ToggleTheme({ onClick, theme }) {
  //
  const { isPlaying, togglePlay } = useAudio();
  //
  const [isTrue, setIsTrue] = useState(true); // Your condition state
  const audioRef = useRef(new Audio()); // Ref for the audio element
  const darkAudio = "/src/assets/audio/mymusic1.mp3"; // Replace with your actual file
  const lightAudio = "/src/assets/audio/mymusic2.mp3"; // Replace with your actual file
  // handle toggle click
  function handleClick() {
    onClick();
    // playAudio();
    togglePlay();
  }
  // play audio when theme is changed
  // const playAudio = () => {
  //   const selectedAudio = isTrue ? darkAudio : lightAudio;
  //   audioRef.current.src = selectedAudio; // Set the audio source
  //   audioRef.current.play(); // Play the audio
  //   setIsTrue(!isTrue); // Toggle condition (optional)
  // };

  //
  return (
    <button htmlFor="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input
          onChange={handleClick}
          id="theme"
          className="theme__toggle"
          type="checkbox"
          role="switch"
          checked={theme === "dark"}
          name="theme"
        />
        <span className="theme__icon">
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
        </span>
      </span>
    </button>
  );
}

import { useState, useRef } from "react";
export default function ToggleTheme({ onClick, theme }) {
  //
  //
  const [isTrue, setIsTrue] = useState(true); // Your condition state
  const audioRef = useRef(new Audio()); // Ref for the audio element
  const darkAudio = "/src/assets/audio/mymusic3.mp3"; // Replace with your actual file
  const lightAudio = "/src/assets/audio/mymusic1.mp3"; // Replace with your actual file

  // play audio when theme is changed
  const playAudio = () => {
    const selectedAudio = isTrue ? darkAudio : lightAudio;
    audioRef.current.src = selectedAudio; // Set the audio source
    audioRef.current.play(); // Play the audio
    setIsTrue(!isTrue); // Toggle condition (optional)
  };
  // handle toggle click
  function handleClick() {
    onClick();
    playAudio();
  }

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

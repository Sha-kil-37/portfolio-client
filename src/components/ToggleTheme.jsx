import { useState, useRef } from "react";
export default function ToggleTheme({ onClick, theme }) {
  //
  const [isTrue, setIsTrue] = useState(true); // Your condition state
  const audioRef = useRef(new Audio()); // Ref for the audio element
  const toggleAudio = "/src/assets/audio/toggle.mp3"; // Audio URL for toggle on

  // play audio when theme is changed
  const playAudio = () => {
    const selectedAudio = isTrue ? toggleAudio : toggleAudio;
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

import { useState, useEffect } from "react";
//
const UseMediaStatus = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  //
  useEffect(() => {
    const updateStatus = () => {
      const mediaElements = document.querySelectorAll("audio, video");
      const playing = Array.from(mediaElements).some(
        (media) => !media.paused && !media.ended && media.readyState > 2
      );
      setIsPlaying(playing);
    };

    const mediaElements = document.querySelectorAll("audio, video");

    mediaElements.forEach((media) => {
      media.addEventListener("play", updateStatus);
      media.addEventListener("pause", updateStatus);
      media.addEventListener("ended", updateStatus);
    });

    return () => {
      mediaElements.forEach((media) => {
        media.removeEventListener("play", updateStatus);
        media.removeEventListener("pause", updateStatus);
        media.removeEventListener("ended", updateStatus);
      });
    };
  }, []);
  //
  return isPlaying;
};

export default UseMediaStatus;

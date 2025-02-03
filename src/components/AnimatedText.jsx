import { useEffect, useState } from "react";

const AnimatedText = ({ text }) => {
  const [animatedText, setAnimatedText] = useState([]);
  //
  useEffect(() => {
    const animationDelay = 6;
    const chars = text.split("").map((char, i) => (
      <span
        key={i}
        className="char"
        style={{ animationDelay: `${animationDelay * i}ms` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
    setAnimatedText(chars);
  }, [text]);

  return <h2 className="animated-text font-primary text-dark font-medium">{animatedText}</h2>;
};

export default AnimatedText;

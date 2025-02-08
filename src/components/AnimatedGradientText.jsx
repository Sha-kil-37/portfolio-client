// Desc: Animated gradient text component for the banner section.

const AnimatedGradientText = ({ text, className = "" }) => {
  return <h1 className={`gradient-text ${className}`}>{text}</h1>;
};

export default AnimatedGradientText;

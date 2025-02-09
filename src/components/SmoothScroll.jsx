import { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const speed = 0.05;
  let offset = 0;
  //
  useEffect(() => {
    const jsScroll = scrollRef.current;
    if (!jsScroll) return;

    const height = jsScroll.getBoundingClientRect().height - 1;
    document.body.style.height = Math.floor(height) + "px";

    const smoothScroll = () => {
      offset += (window.pageYOffset - offset) * speed;
      jsScroll.style.transform = `translateY(-${offset}px) translateZ(0)`;
      requestAnimationFrame(smoothScroll);
    };

    smoothScroll();
  }, []);
  //
  return (
    <div ref={scrollRef} className="js-scroll will-change-transform">
      {children}
    </div>
  );
};

export default SmoothScroll;

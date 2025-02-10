import { useEffect, useRef, useState } from "react";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);
  const speed = 0.05;
  let offset = 0;

  useEffect(() => {
    const jsScroll = scrollRef.current;
    if (!jsScroll) return;

    const updateBodyHeight = () => {
      const height = jsScroll.scrollHeight; // Use scrollHeight instead of getBoundingClientRect()
      setPageHeight(height);
      document.body.style.height = `${height}px`;
    };

    updateBodyHeight();
    window.addEventListener("resize", updateBodyHeight);

    const smoothScroll = () => {
      offset += (window.pageYOffset - offset) * speed;
      jsScroll.style.transform = `translateY(-${offset}px) translateZ(0)`;
      requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    return () => {
      window.removeEventListener("resize", updateBodyHeight);
    };
  }, []);

  return (
    <div ref={scrollRef} className="js-scroll will-change-transform" style={{ minHeight: pageHeight }}>
      {children}
    </div>
  );
};

export default SmoothScroll;



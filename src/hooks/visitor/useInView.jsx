// useInView.js
import { useEffect, useRef, useState } from "react";
//
const useInView = (options) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  //
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target); // একবার দেখালে আর observe করবে না
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, inView];
};

export default useInView;

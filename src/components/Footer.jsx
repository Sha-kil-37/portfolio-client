import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterData } from "../redux/api/visitor/fetchFooterData.js";
import Socials from "./Socials.jsx";
import CopyRight from "./CopyRight.jsx";
import AnimatedBottomToTopText from "./AnimatedBottomToTopText.jsx";
//
export default function Footer() {
  //
  const [progress, setProgress] = useState(0);
  const { admin } = useSelector((state) => state.adminDataReducer);
  const mailtoLink = `mailto:${admin?.email}?subject=${encodeURIComponent(
    "Let's Talk"
  )}}`;
  const footerRef = useRef(null);
  const dispatch = useDispatch();
  const { footer, error, loading } = useSelector(
    (state) => state.footerReducer
  );
  //  observe the footer for show the progress bar
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(100); // Move progress bar to 100% when footer is in view
        } else {
          setProgress(0); // Reset when footer is not in view
        }
      },
      { threshold: 0.5 } // Adjust this to trigger at different visibility levels
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // call footer API to get the footer data
  useEffect(() => {
    dispatch(fetchFooterData());
  }, [dispatch]);

  // handle re data fetching
  function handleReFetch() {
    return dispatch(fetchFooterData());
  }
  //
  //
  if (error) {
    return (
      <div className="text-center">
        <h1 className="font-bold text-2xl font-primary text-primary">Oh Uh</h1>
        <p>{error}</p>
        <button
          className="px-2 py-1 bg-secondary rounded-md text-white font-primary cursor-pointer mt-2"
          onClick={handleReFetch}
        >
          retry
        </button>
      </div>
    );
  }
  //
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Start hidden, move from right
      animate={{ opacity: 1, y: 0 }} // Animate to visible
      transition={{ duration: 1, delay: 0.2 }} // Delay for
    >
      {/* Progress Bar */}
      <div className="relative bottom-0 left-0 w-full h-[3px]">
        <div
          className="h-full bg-red dark:bg-primary transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <footer ref={footerRef} className="relative overflow-hidden">
        <div className="w-300 mx-auto grid grid-cols-3">
          <div className="cols-span-2">
            <AnimatedBottomToTopText text="Designing with passion, developing with purpose. Let’s build something awesome together , Made with 💻, ☕, and a touch of magic. Always building. Always learning. Every line of code tells a story — what's yours?" />
          </div>
          <div>
            <h6 className="font-primary dark:text-test mb-3">
              Get in touch with me
            </h6>
            <Socials socialLinks={footer?.socialLinks} />
          </div>
          <div>
            <h6 className="font-primary dark:text-test">Get me on</h6>
            <a href={mailtoLink} className="font-primary dark:text-test">
              {admin?.email}
            </a>
          </div>
        </div>
        <CopyRight />
      </footer>
    </motion.div>
  );
}

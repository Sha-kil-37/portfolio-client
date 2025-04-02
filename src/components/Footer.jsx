import { motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterData } from "../redux/api/visitor/fetchFooterData.js";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { useLocation } from "react-router-dom";
//
export default function Footer() {
  //
  const [progress, setProgress] = useState(0);
  const footerRef = useRef(null);
  const dispatch = useDispatch();
  const { footer, error, loading } = useSelector(
    (state) => state.footerReducer
  );
  //
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

  return (
    <Fragment>
      {/* Progress Bar */}
      <div className="relative bottom-0 left-0 w-full h-[5px]">
        <div
          className="h-full bg-primary dark:bg-test transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <footer ref={footerRef} className="py-20 relative">
        <div className="w-300 mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -10 }} // Start hidden, move from right
            animate={{ opacity: 1, x: 0 }} // Animate to visible
            transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
          >
            <div className="flex justify-between items-center">
              <h2 className="text-center font-bold text-3xl font-primary text-primary">
                {footer?.copyrightText}
              </h2>
              <ul className="flex justify-center gap-x-10">
                {footer?.socialLinks.map((social, index) => {
                  return (
                    <li key={index} className="text-center mt-4">
                      <a
                        // href={social.link}
                        // target="_blank"
                        // rel="noreferrer"
                        className="text-primary font-primary"
                      >
                        {social?.platform}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <p className="text-center font-primary text-primary font-bold mt-3">
                {footer?.releaseDate}
              </p>
            </div>
            <Link viewTransition
              to="/contact"
              className="font-bold cursor-pointer text-secondary hover:underline my-10 block text-center"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </footer>
    </Fragment>
  );
}

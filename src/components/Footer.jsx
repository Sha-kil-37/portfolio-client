import { motion } from "framer-motion";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterData } from "../redux/api/visitor/fetchFooterData.js";
import ScrollProgress from "./ScrollProgress.jsx";
//
export default function Footer() {
  //
  const dispatch = useDispatch();
  const { footer, error, loading } = useSelector(
    (state) => state.footerReducer
  );
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
   
      
      <footer className="py-20 relative bg-secondary dark:bg-dark">
        <ScrollProgress />
        <div className="w-300 mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -10 }} // Start hidden, move from right
            animate={{ opacity: 1, x: 0 }} // Animate to visible
            transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
          >
            <div className="flex justify-between items-center">
              <h2 className="text-center font-bold text-3xl font-primary text-white">
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
                        className="text-white font-primary"
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
            <div className="flex justify-center">
              <button
                className="cursor-pointer mt-5 py-2 px-2 bg-primary font-primary text-semibold inline-block"
                type="button"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
     </footer> 
   
  );
}

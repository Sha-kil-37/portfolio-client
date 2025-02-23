import { useEffect, useState } from "react";
import { ThemeContext } from "../utils/visitor/theme/ThemeContext";
import ToggleTheme from "./ToggleTheme";
import SoundIcon from "./SoundIcon";
import { motion } from "framer-motion";
//
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setDarkMode } = ThemeContext();
  const [scroll, setScroll] = useState(false);

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // handle toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: scroll ? 0 : -100,
        opacity: scroll ? 1 : 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      //
      className={`${
        scroll
          ? "sticky py-3 backdrop-blur-md dark:bg-[#3674B5] border-b-1 w-full z-20 top-0 left-0 text-dark dark:text-white border-dark dark:border-white"
          : ""
      }`}
    >
      {/* Large screen navbar */}
      <div className="hidden xl:md:flex xl:justify-between xl:items-center xl:max-w-[40rem] xl:mx-auto">
        <strong>SHAKIL</strong>
        <div className="flex space-x-4">
          <ToggleTheme onClick={setDarkMode} theme={theme} />
          <SoundIcon />
        </div>
        <ul className="flex space-x-4">
          <li className="hover:underline">
            <a href="#" className="font-primary font-semibold">
              About
            </a>
          </li>
          <li className="hover:underline">
            <a href="#" className="font-primary font-semibold">
              Service
            </a>
          </li>
          <li className="hover:underline">
            <a href="#" className="font-primary font-semibold">
              Project
            </a>
          </li>
          <li className="hover:underline">
            <a href="#" className="font-primary font-semibold">
              Blog
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile navbar */}
      <div className="md:hidden flex justify-between items-center">
          <div className="text-xl font-bold">MyApp</div>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <ul className="md:hidden mt-2 bg-blue-700 space-y-2 px-4 py-2">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">About</li>
            <li className="hover:underline">Services</li>
            <li className="hover:underline">Contact</li>
            <ToggleTheme onClick={setDarkMode} theme={theme} />
          </ul>
        )} 
    </motion.nav>
  );
};

export default Navbar;

import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../utils/visitor/theme/ThemeContext";
import ToggleTheme from "./ToggleTheme";
import SoundIcon from "./SoundIcon";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//
const NavBar = () => {
  const { footer, error, loading } = useSelector(
    (state) => state.footerReducer
  );
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setDarkMode } = ThemeContext();

  //
  return (
    <nav className="sticky top-0 left-0 py-2 z-20 border-b-1 border-dark/20">
      <div className="w-300 mx-auto flex justify-between items-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: -10 }} // Start hidden, move from right
          animate={{ opacity: 1, y: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for
        >
          <Link
            to="/"
            className="font-bold text-2xl font-primary dark:text-test"
          >
            {footer?.logo}
          </Link>
        </motion.div>

        {/* <Logo/> */}
        {/* Toggle Theme */}
        <ToggleTheme onClick={setDarkMode} theme={theme} />
        <SoundIcon />
        {/* Menu Icon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }} // Start hidden, move from right
          animate={{ opacity: 1, y: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for
        >
          <button
            className={`${
              isOpen ? "relative z-20 " : "text-dark"
            } font-primary dark:text-test font-bold text-md cursor-pointer  transition-colors duration-300 ease-in-out dark:text-white`}
            onClick={() => setIsOpen(!isOpen)}
          >
            MENU
          </button>
        </motion.div>

        {/* Slide Down Menu */}
        <motion.nav
          className="bg-primary fixed inset-0 flex items-center justify-center"
          initial={{ y: "-100%" }}
          animate={{ y: isOpen ? "0%" : "-100%" }}
          transition={{ type: "spring", stiffness: 40 }}
        >
          <ul className="list-items text-white text-4xl font-bold space-y-5 text-center">
            {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                initial={{ y: "-30px", opacity: 0 }}
                animate={{ y: isOpen ? "0" : "-30px", opacity: isOpen ? 1 : 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </nav>
  );
};

export default NavBar;

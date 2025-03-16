import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../utils/visitor/theme/ThemeContext";
import ToggleTheme from "./ToggleTheme";
//
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setDarkMode } = ThemeContext();
  //
  return (
    <nav className="relative bg-primary py-3 z-50">
      <div className="w-300 mx-auto flex justify-between items-center">
        {/* Main Content */}
        <div className="main-content center text-2xl font-bold">
          <h1 className="font-primary font-semibold text-xl">
            PORTFOLIO VERSION 1.0
          </h1>
        </div>
        {/* Toggle Theme */}
        <ToggleTheme onClick={setDarkMode} theme={theme} />
        {/* Menu Icon */}
        <button
        className={`${isOpen ? "text-white relative z-20" : "text-dark"} font-primary font-bold text-md cursor-pointer`}
          // className="{font-primary font-bold text-md cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          MENU
        </button>

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

import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../utils/visitor/theme/ThemeContext";
import ToggleTheme from "./ToggleTheme";
// 
const Test = () => {
  const [isOpen, setIsOpen] = useState(false)
  //
  return (
    <div className="relative w-full h-screen">
      {/* Menu Icon */}
      <button
        className="font-primary font-bold text-md absolute top-5 right-8 cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
       MENU
      </button>

      {/* Main Content */}
      <div className="main-content center text-2xl font-bold">
        <h1>Welcome to my full page slide down menu</h1>
      </div>

      {/* Slide Down Menu */}
      <motion.nav
        className="menu-container fixed inset-0 bg-red-500 flex items-center justify-center"
        initial={{ y: "-100%" }}
        animate={{ y: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <ul className="list-items text-white text-4xl font-bold space-y-5 text-center">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item, index) => (
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
  );
};

export default Test;



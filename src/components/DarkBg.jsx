import { motion } from "framer-motion";
import { Moon } from "lucide-react";
import { ThemeContext } from "../utils/visitor/theme/ThemeContext";
// 
const DarkBg = ({ children }) => {
  const { theme, setDarkMode } = ThemeContext();
  //
  return (
    <div className="relative w-full h-full transition-colors duration-700 ease-in-out dark:bg-dark">
      {/* Dark Mode Background Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: theme == "dark" ? 1 : 0 }}
        transition={{ duration: 1.2 }}
      />

      {/* Moon Animation */}
      <motion.div
        className="fixed top-[45%] right-[19%]"
        initial={{ y: 300, scale: 0.5, opacity: 0 }}
        animate={
          theme === "dark"
            ? { y: -100, scale: 1.2, opacity: 1 }
            : { y: 300, scale: 0.5, opacity: 0 }
        }
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Moon
          size={70}
          className="text-test fill-[#FFE8CD]"
        />
      </motion.div>
      {/* Website Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DarkBg;

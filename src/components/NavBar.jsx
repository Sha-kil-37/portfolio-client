import { useEffect, useState } from "react";
import { ThemeContext } from "../utils/visitor/theme/ThemeContext";
import ToggleTheme from "./ToggleTheme";
import SoundIcon from "./SoundIcon";
//
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setDarkMode } = ThemeContext();
  const [scroll, setScroll] = useState(false);
  //
  // handle scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  // handle toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //
  return (
    <nav
      className={`${
        scroll ? "sticky py-3 backdrop-blur-md" : "py-3 z-20 backdrop-blur-md"
      }`}
    >
      {/* Large screen navbar */}
      <div className="hidden md:flex justify-between items-center">
        <strong>DEV ZONE</strong>
        <ul className="flex space-x-4">
          <li className="hover:underline">
            <a href="#" className="font-primary font-semibold">Home</a>
          </li>
          <li className="hover:underline"><a href="#" className="font-primary font-semibold">About</a></li>
          <li className="hover:underline"><a href="#" className="font-primary font-semibold">Service</a></li>
          <li className="hover:underline"><a href="#" className="font-primary font-semibold">Project</a></li>
          <li className="hover:underline">
            <a href="#" className="font-primary font-semibold">Blog</a>
          </li>
        </ul>
        <ToggleTheme onClick={setDarkMode} theme={theme} />
        <SoundIcon />
      </div>
      {/* Mobile navbar */}
      <div className="md:hidden flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
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
    </nav>
  );
};

export default Navbar;

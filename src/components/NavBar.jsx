import { ThemeContext } from "../utils/visitor/theme/ThemeContext";
import ToggleTheme from "./ToggleTheme";
//
export default function NavBar() {

  const { theme, setDarkMode } = ThemeContext();
  //
  return (
    <nav className="bg-primary sticky w-full h-full top-0 left-0 z-10 py-3 border-b-[1px] border-secondary">
      <div className="w-300 mx-auto flex justify-between items-center">
        <button>Shakil</button>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="font-bold text-2xl font-primary text-secondary">Home</a>
          </li>
          <li>
            <a href="#" className="font-bold text-2xl font-primary text-secondary">About</a>
          </li>
          <li>
            <a href="#" className="font-bold text-2xl font-primary text-secondary">Contact</a>
          </li>
          <li>
            <a href="#" className="font-bold text-2xl font-primary text-secondary">Service</a>
          </li>
        </ul>
        <ToggleTheme onClick={setDarkMode} theme={theme} />
      </div>
    </nav>
  );
}

import { useState, useEffect } from "react";
// custom hook to use the theme context
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Determine the initial theme on page load
    return (
      localStorage.getItem("currentTheme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "")
    );
  });
  useEffect(() => {
    // Apply the theme class to the document element
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  const setDarkMode = () => {
    if (localStorage.getItem("currentTheme") === "dark") {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : ""
      );
      localStorage.removeItem("currentTheme");
    } else {
      setTheme("dark");
      localStorage.setItem("currentTheme", "dark");
    }
  };
  return { theme, setDarkMode };
};
export default useTheme;

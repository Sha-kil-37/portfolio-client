import { createContext, useContext } from "react";
import useTheme from "../../../hooks/visitor/useTheme.jsx";
// create a context for the theme
const MyThemeContext = createContext();
// create a provider for the theme
export const ThemeProvider = ({ children }) => {
  const themeControls = useTheme();
  //
  return (
    <MyThemeContext.Provider value={themeControls}>
      {children}
    </MyThemeContext.Provider>
  );
};
// custom hook to use the theme context
export const ThemeContext = () => useContext(MyThemeContext);

import "./css/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./utils/visitor/theme/ThemeContext";
import { SoundProvider } from "./utils/visitor/sound/SoundContext";
import SoundListener from "./hooks/visitor/SoundListener";
//
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SoundProvider>
      <ThemeProvider>
        <SoundListener />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </SoundProvider>
  </StrictMode>
);

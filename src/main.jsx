import "./css/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./utils/theme/ThemeContext";
import { SoundProvider } from "./utils/sound/SoundContext";
import SoundListener from "./utils/sound/SoundListener";
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

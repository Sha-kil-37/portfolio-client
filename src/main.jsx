import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./utils/theme/ThemeContext";
import { AudioProvider } from "./utils/audio/AudioContext";
//
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AudioProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AudioProvider>
    </ThemeProvider>
  </StrictMode>
);

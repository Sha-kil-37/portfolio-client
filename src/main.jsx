import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./utils/theme/ThemeContext";
import { MusicProvider } from "./utils/music/MusicContext";
//
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MusicProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </MusicProvider>
  </StrictMode>
);

import "./css/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./utils/visitor/theme/ThemeContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store/configStore.js";
//
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);

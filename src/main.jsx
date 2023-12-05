import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import App from "./App.jsx";
import "./index.css";
import LenguageProvider from "./context/LenguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LenguageProvider>
      <App />
      <Toaster
        position="bottom-center"
        closeButton
        richColors
        className="h-9 p-2"
      />
    </LenguageProvider>
  </React.StrictMode>,
);

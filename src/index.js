import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import CCGeneratorApp from "./pages/main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CCGeneratorApp />
    </React.StrictMode>
);

// Si quieres medir el rendimiento:
reportWebVitals();

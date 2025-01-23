import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


// Function to get CSS variable value
const getCssVariable = (variable) => getComputedStyle(document.documentElement)
		.getPropertyValue(variable)
		.trim();


// Render the app
const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </StrictMode>,
);

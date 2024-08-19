import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Greeting /> {/* Replace 'Greeting' with your component */}
  </StrictMode>
);

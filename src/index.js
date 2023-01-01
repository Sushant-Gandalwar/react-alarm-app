import { createRoot } from "react-dom/client";
import "./alarm.css";
import App from "./App";
import { select } from "./function";
const rootElement = select("#ankitjha2603");
const root = createRoot(rootElement);
root.render(<App />);

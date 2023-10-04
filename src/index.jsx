import React from "react";
import ReactDOMClient from "react-dom/client";
import { Getlinked } from "./screens/Getlinked";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Getlinked />);

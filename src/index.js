import React from "react";
import AppComponent from "./App.Component";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<AppComponent/>)
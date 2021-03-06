import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/reset.css";
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/reponsive.scss";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);

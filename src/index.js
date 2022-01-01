import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles.scss";

ReactDOM.render(
    <React.StrictMode>
      < App/>
    </React.StrictMode>,
    document.getElementById('app')
  );


import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Exercise1 from './exercises/Exercise1';
import Home from "./todo-app/home";
import { BrowserRouter as Router } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Home />
    </Router>

);
reportWebVitals();
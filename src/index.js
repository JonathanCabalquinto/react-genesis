import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Exercise1 from './exercises/Exercise1';
import Todo from "./todo-app/index";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Todo />
    </React.StrictMode>
);
reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import Exercise from './exercises/Exercise4/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Exercise />
    </React.StrictMode>
);
reportWebVitals();
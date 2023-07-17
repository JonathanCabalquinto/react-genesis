import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
// import App from './App';
import Exercise1 from './exercises/Exercise1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Exercise1 />
    </React.StrictMode>
);
reportWebVitals();
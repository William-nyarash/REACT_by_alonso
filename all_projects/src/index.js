import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from "./Components/ContactApp.js";
import Page from "./Components/AirBnB.js";
// import App from './App';
// import Page from "./profile"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contact/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

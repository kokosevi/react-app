import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/css/nav.css"
import "./assets/css/about.css"
import "./assets/css/pollwindow.css"
import "./assets/css/pollsalient.css"
import "./assets/css/pollmeasure.css"
import "./assets/css/pollresult.css"
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

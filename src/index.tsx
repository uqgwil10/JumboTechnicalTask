import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBytGd8QFshe5t_AeydxjuIruxHbm3WIsU",
  authDomain: "jumbo-technical-task.firebaseapp.com",
  databaseURL: "https://jumbo-technical-task.firebaseio.com",
  projectId: "jumbo-technical-task",
  storageBucket: "jumbo-technical-task.appspot.com",
  messagingSenderId: "231434471103",
  appId: "1:231434471103:web:cd66c046e32f925ccde80a",
  measurementId: "G-L2FWMYLFFX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
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

import React from 'react';
import ReactDOM from 'react-dom/client';
// import Header from './common/header/Header';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './screens/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Home/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

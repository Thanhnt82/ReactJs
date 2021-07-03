import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './dashboard.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
// const person = {
//   name: 'Nguyen Trong Thanh',
//   age: 20,
//   status: true
// }
// function total(giatriA, giatriB) {
//   return giatriA + giatriB;
// }
// const a = 10;
// const b = 20;

const rootElement = document.getElementById("root");
ReactDOM.render(
    <App />,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
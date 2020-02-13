import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";




// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById("root");


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
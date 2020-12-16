import React from "react";
import './App.css';
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";


// GREAT SITE TO GET ALL SVG IMAGES
// https://undraw.co/

// REACT SCROLL 
// https://github.com/fisshy/react-scroll


function App() {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}


export default App;

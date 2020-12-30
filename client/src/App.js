import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        < Nav />
        < Jumbotron />
        <Switch>

        </Switch>
        <Footer />
      </div>
    </Router>
   
  );
}


export default App;

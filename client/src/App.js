import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"
import Footer from "./components/Footer"
import SearchBooks from "./pages/SearchBooks"
import SavedBooks from "./pages/SavedBooks"
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path ="/" component={SearchBooks}/>
          <Route exact path ="/saved" component={SavedBooks}/>
        </Switch>
        <Footer />
      </div>
    </Router>
   
  );
}


export default App;

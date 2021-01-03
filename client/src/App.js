import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks"
import SavedBooks from "./pages/SavedBooks"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import "./App.css";


class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={SearchBooks}/>
            <Route exact path="/saved" component={SavedBooks}/>
            <Route exact path="/saved/:id" component={SavedBooks} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}


export default App;

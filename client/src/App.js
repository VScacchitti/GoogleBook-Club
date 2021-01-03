import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks"
import SavedBooks from "./pages/SavedBooks"
import "./App.css";


class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={SearchBooks}/>
            <Route exact path="/saved" component={SavedBooks}/>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;

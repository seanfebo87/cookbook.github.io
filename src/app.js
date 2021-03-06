import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import home from "./components/home";
import about from "./components/about";
import recipesPage from "./containers/recipesPage";
import recipeInput from "./containers/recipeInput";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={home} />
          <Route exact path="/about" component={about} />
          <Route exact path="/recipes" component={recipesPage} />
          <Route exact path="/new" component={recipeInput} />
        </div>
      </Router>
    );
  }
}

export default App;

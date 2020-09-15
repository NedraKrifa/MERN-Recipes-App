import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Routes from "./components/routing/Routes";
import "./App.css";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "./actions/recipeActions";
import { loadUser } from "./actions/authActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadUser()), []);
  useEffect(() => dispatch(getAllRecipes()), []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

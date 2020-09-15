import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Dashboard from "../Dashboard";
import List from "../MyRecipe/List";
import RecipeDetail from "../RecipeDetail";
import FormEdit from "../MyRecipe/FormEdit";


function Routes() {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/myrecipes" component={List} />
      <Route exact path="/recipe/:id" component={RecipeDetail} />
      <Route exact path="/myrecipes/edit/:id" component={FormEdit} />
    </Switch>
  );
}
export default Routes;

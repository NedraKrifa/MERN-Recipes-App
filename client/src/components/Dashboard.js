import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import RecipeHeader from "./layout/RecipeHeader";
import RecipeList from "./RecipeList";

function Dashboard() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    isAuthenticated ?
    <>
      <RecipeHeader />
      <RecipeList />
    </> : <Redirect to="/" /> 
  );
}
export default Dashboard;

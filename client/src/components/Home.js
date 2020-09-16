import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./layout/HomePage";

function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Redirect to="/dashboard" /> : <HomePage />;
}
export default Home;

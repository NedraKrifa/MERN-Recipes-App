import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  recipes: recipeReducer,
  error: errorReducer,
  auth: authReducer,
});

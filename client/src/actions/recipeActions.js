import * as actionTypes from "./actionTypes";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getAllRecipes = () => (dispatch) => {
  dispatch(setRecipesLoading());
  axios
    .get("/api/recipeitems")
    .then((res) => res.data)
    .then((recipes) =>
      dispatch({
        type: actionTypes.GET_ALL_RECIPES,
        payload: recipes,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getRecipe = (id) => (dispatch) => {
  axios
    .get(`/api/recipeitems/${id}`)
    .then((res) => res.data)
    .then((recipe) =>
      dispatch({
        type: actionTypes.GET_RECIPE,
        payload: recipe,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addNewRecipe = (recipe) => (dispatch, getState) => {
  axios
    .post("/api/recipeitems", recipe, tokenConfig(getState))
    .then((res) => res.data)
    .then((recipe) =>
      dispatch({
        type: actionTypes.ADD_NEW_RECIPE,
        recipe: recipe,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const editRecipe = (recipe, id) => (dispatch, getState) => {
  axios
    .patch(`/api/recipeitems/${id}`, recipe, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: actionTypes.EDIT_RECIPE,
        recipe: recipe,
        id: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteRecipe = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/recipeitems/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: actionTypes.REMOVE_RECIPE,
        id: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setRecipesLoading = () => {
  return {
    type: actionTypes.RECIPES_LOADING,
  };
};

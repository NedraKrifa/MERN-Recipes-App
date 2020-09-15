import * as actionTypes from "./actionTypes";
import axios from "axios";
import { returnErrors } from "./errorActions";

// check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: actionTypes.USER_LOADING });

  axios
    .get("/api/users/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: actionTypes.USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionTypes.AUTH_ERROR,
      });
    });
};

// Register User
export const register = ({ name, email, password, confirmPassword }) => (
  dispatch
) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({
    name,
    email,
    password,
    confirm_password: confirmPassword,
  });

  axios
    .post("/api/users/register", body, config)
    .then((res) =>
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: actionTypes.REGISTER_FAIL,
      });
    });
};

// Login User
export const login = ({ email, password}) => (
  dispatch
) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({
    email,
    password,
  });

  axios
    .post("/api/users/login", body, config)
    .then((res) =>
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: actionTypes.LOGIN_FAIL,
      });
    });
};

  // Logout User
  export const logout = () => {
    return {
      type: actionTypes.LOGOUT_SUCCESS,
    };
  };

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["auth-token"] = token;
  }

  return config;
};
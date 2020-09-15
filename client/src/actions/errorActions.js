import * as actionTypes from "./actionTypes";

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
  return {
    type: actionTypes.GET_ERRORS,
    payload: { msg, status, id },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS,
  };
};

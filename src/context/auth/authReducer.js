import { SET_TOKEN, DELETE_TOKEN, AUTH_ERROR } from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      sessionStorage.setItem("token", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload
      };
    }
    case DELETE_TOKEN:
    case AUTH_ERROR: {
      sessionStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;


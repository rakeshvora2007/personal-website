import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import axios from "axios";

import { SET_TOKEN, DELETE_TOKEN, AUTH_ERROR } from "../types";

const AuthState = ({ children }) => {
  const initialState = {
    token: sessionStorage.getItem("token"),
    isAuthenticated: false
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setToken = async key => {
    try {
      let response = await axios.post(
        `https://personal-website--backend.herokuapp.com/generateToken`,
        { body: { key } }
      );
      dispatch({
        type: SET_TOKEN,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error
      });
    }
  };

  const removeToken = () => {
    dispatch({
      type: DELETE_TOKEN
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        setToken,
        removeToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;

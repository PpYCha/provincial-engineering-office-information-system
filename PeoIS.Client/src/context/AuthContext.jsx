import { createContext, useEffect, useReducer } from "react";
import actionHelper from "./actionHelper";
import AuthReducer from "./AuthReducer";

const actions = actionHelper();

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

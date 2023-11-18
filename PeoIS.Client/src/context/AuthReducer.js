import actionHelper from "./actionHelper";

const actions = actionHelper();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN: {
      return {
        currentUser: action.payload,
      };
    }
    case actions.LOGOUT: {
      localStorage.removeItem("currentUser");

      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;

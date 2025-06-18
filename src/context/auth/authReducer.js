// src/context/auth/authReducer.js
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        usuario: action.payload.usuario,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        usuario: null,
        token: null,
      };
    default:
      return state;
  }
};
import { userAcionsType } from "../constants/usersActionType";

const initialState = {
  listUser: {},
  authUser: null,
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAcionsType.GET_ALL_USERS: {
      const newState = { ...state, listUser: action.payload };
      return newState;
    }
    case userAcionsType.SAVE_AUTH_USER: {
      const newState = { ...state, authUser: action.payload };
      return newState;
    }
    case userAcionsType.DELETE_AUTH_USER: {
      const newState = { ...state, authUser: null };
      return newState;
    }
    case userAcionsType.UPDATE_USER: {
      const newState = { ...state };
      newState.listUser = {
        ...newState.listUser,
        [action.payload.id]: action.payload,
      };
      newState.authUser = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

import { userAcionsType } from "../constants/usersActionType";

const initialState = {
  listUser: [],
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAcionsType.GET_ALL_USERS: {
      const newState = { ...state, listUser: action.payload };
      return newState;
    }
    default:
      return state;
  }
};

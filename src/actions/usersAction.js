import { userAcionsType } from "../constants/usersActionType";

export const getAllUser = (users) => ({
  type: userAcionsType.GET_ALL_USERS,
  payload: users,
});

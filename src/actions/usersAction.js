import { userAcionsType } from "../constants/usersActionType";

export const getAllUser = (users) => ({
  type: userAcionsType.GET_ALL_USERS,
  payload: users,
});
export const saveUser = (user) => ({
  type: userAcionsType.SAVE_AUTH_USER,
  payload: user,
});
export const deleteAuthUser = () => ({
  type: userAcionsType.DELETE_AUTH_USER,
});
export const updateUser = (user) => ({
  type: userAcionsType.UPDATE_USER,
  payload: user,
});

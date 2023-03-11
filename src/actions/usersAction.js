import { type } from "@testing-library/user-event/dist/type";
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
export const setLastPathName = (path) => ({
  type: userAcionsType.LAST_PATH_NAME,
  payload: path,
});

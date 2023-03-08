import { _getQuestions, _getUsers } from "../data/_DATA.js";
import { getAllQuestions } from "./questions";
import { getAllUser } from "./usersAction";

export const handleInit = () => {
  return async (dispatch) => {
    const [users, questions] = await Promise.all([
      _getUsers(),
      _getQuestions(),
    ]);
    [
      { func: getAllUser, params: users },
      { func: getAllQuestions, params: questions },
    ].forEach(({ func, params }) => {
      dispatch(func(params));
    });
  };
};

import { _saveQuestionAnswer } from "../data/_DATA.js";
import { editQuestions } from "./questions";

export const handleSaveQuestion = (params) => {
  return async (dispatch) => {
    const res = await _saveQuestionAnswer(params);
    if (res) {
      dispatch(editQuestions(params));
    }
  };
};

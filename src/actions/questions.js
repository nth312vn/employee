import { questionActionsType } from "../constants/questionsActionType";

export const getAllQuestions = (questions) => ({
  type: questionActionsType.GET_ALL_QUESTIONS,
  payload: questions,
});

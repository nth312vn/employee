import { questionActionsType } from "../constants/questionsActionType";

export const getAllQuestions = (questions) => ({
  type: questionActionsType.GET_ALL_QUESTIONS,
  payload: questions,
});
export const addNewQuestions = (questions) => ({
  type: questionActionsType.ADD_NEW_QUESTIONS,
  payload: questions,
});

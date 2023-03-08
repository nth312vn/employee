import { questionActionsType } from "../constants/questionsActionType";

const initialState = {
  questions: [],
};
export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case questionActionsType.GET_ALL_QUESTIONS: {
      return { ...state, questions: action.payload };
    }
    default:
      return state;
  }
};

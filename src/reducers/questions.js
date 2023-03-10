import { questionActionsType } from "../constants/questionsActionType";

const initialState = {
  questions: {},
};
export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case questionActionsType.GET_ALL_QUESTIONS: {
      return { ...state, questions: action.payload };
    }
    case questionActionsType.ADD_NEW_QUESTIONS: {
      const newSate = { ...state };
      newSate.questions = {
        ...newSate.questions,
        [action.payload.id]: action.payload,
      };
      return newSate;
    }
    default:
      return state;
  }
};

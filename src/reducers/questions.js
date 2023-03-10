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
    case questionActionsType.EDIT_QUESTION: {
      const { qid, authedUser, answer } = action.payload;
      const newSate = { ...state };
      newSate.questions = {
        ...newSate.questions,
        [qid]: {
          ...newSate.questions[qid],
          [answer]: {
            ...newSate.questions[qid][answer],
            votes: newSate.questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };
      return newSate;
    }

    default:
      return state;
  }
};

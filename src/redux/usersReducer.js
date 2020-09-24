import { CREATE_USER, REMOVE_USER, INCREASE, DECREASE } from "./types";

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_USER:
      return [...state.filter((item) => item.id !== action.payload)];

    case CREATE_USER:
      return [...state, action.payload];

    case INCREASE:
      return [...state];

    case DECREASE: {
      return [...state];
    }

    default:
      return state;
  }
};

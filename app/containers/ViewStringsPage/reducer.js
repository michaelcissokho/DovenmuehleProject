import { SET_STRINGS } from './constants';

export const INITIAL_STATE = {
  strings: [],
};

function stringReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_STRINGS:
      return { ...state, strings: [...action.strings] };
    default:
      return state;
  }
}

export default stringReducer;

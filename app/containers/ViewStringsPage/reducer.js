import {
  SET_STRINGS,
  GET_STRINGS_ERROR,
  LOADING_STRINGS,
  RESET_STRING_PAGE,
} from './constants';

export const INITIAL_STATE = {
  strings: [],
  error: false,
  loading: false,
};

function stringReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_STRINGS:
      return {
        ...state,
        strings: [...action.strings],
        loading: false,
        error: false,
      };
    case GET_STRINGS_ERROR:
      return { ...state, error: true, loading: false };
    case LOADING_STRINGS:
      return { ...state, error: false, loading: true };
    case RESET_STRING_PAGE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default stringReducer;

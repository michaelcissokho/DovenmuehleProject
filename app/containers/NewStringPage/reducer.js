import {
  CHANGE_STRING,
  ADD_STRING_ERROR,
  ADD_STRING_SUCCESS,
  RESET_STRING_FORM,
} from './constants';

export const INITIAL_STATE = {
  string: '',
  success: false,
  error: false,
};

function addStringReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_STRING:
      return { ...state, string: action.string };
    case ADD_STRING_SUCCESS:
      return { ...state, string: '', success: true, error: false };
    case ADD_STRING_ERROR:
      return { ...state, string: '', success: false, error: true };
    case RESET_STRING_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default addStringReducer;

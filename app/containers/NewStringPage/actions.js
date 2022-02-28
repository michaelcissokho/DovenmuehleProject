import {
  SEND_STRING,
  ADD_STRING_ERROR,
  ADD_STRING_SUCCESS,
  CHANGE_STRING,
  RESET_STRING_FORM,
} from './constants';

export function changeString(string) {
  return {
    type: CHANGE_STRING,
    string,
  };
}

export function sendString(string) {
  return {
    type: SEND_STRING,
    string,
  };
}

export function addStringSuccess() {
  return {
    type: ADD_STRING_SUCCESS,
  };
}

export function addStringError() {
  return {
    type: ADD_STRING_ERROR,
  };
}

export function resetStringForm() {
  return {
    type: RESET_STRING_FORM,
  };
}

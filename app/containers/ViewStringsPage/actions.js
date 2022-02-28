import {
  SET_STRINGS,
  GET_STRINGS,
  GET_STRINGS_ERROR,
  LOADING_STRINGS,
  RESET_STRING_PAGE,
} from './constants';

export function getStrings() {
  return {
    type: GET_STRINGS,
  };
}

export function setStrings(strings) {
  return {
    type: SET_STRINGS,
    strings,
  };
}

export function getStringsError() {
  return {
    type: GET_STRINGS_ERROR,
  };
}

export function loadingStrings() {
  return {
    type: LOADING_STRINGS,
  };
}

export function resetStringPage() {
  return {
    type: RESET_STRING_PAGE,
  };
}

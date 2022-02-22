import { SET_STRINGS, GET_STRINGS } from './constants';

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

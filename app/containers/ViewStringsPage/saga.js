/**
 * GET the strings from the backend db
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { GET_STRINGS } from './constants';
import { setStrings } from './actions';

// function that actually calls api
function getStrings() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:3000/api',
  });
}

/**
 * Backend request / response handler to GET strings from backend db array
 */
function* handleGetStrings() {
  try {
    const response = yield call(getStrings);
    const { strings } = response.data;
    yield put(setStrings(strings));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

// saga watcher, looking for GET_STRINGS dispatch type and will call handleGetStrings
export default function* stringsData() {
  yield takeLatest(GET_STRINGS, handleGetStrings);
}

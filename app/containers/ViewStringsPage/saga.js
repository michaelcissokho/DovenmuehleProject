/**
 * GET the strings from the backend db
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { GET_STRINGS } from './constants';
import { setStrings, getStringsError, loadingStrings } from './actions';

// function to generate delay to see loading indicator
const delay = ms => new Promise(res => setTimeout(res, ms));

// function that actually calls api
function getStrings() {
  return axios.get('http://localhost:3000/api');
}

/**
 * Backend request / response handler to GET strings from backend db array
 */
function* handleGetStrings() {
  try {
    const response = yield call(getStrings);
    yield put(loadingStrings());
    yield delay(3000);

    const { strings } = response.data;
    yield put(setStrings(strings));
  } catch (error) {
    yield put(getStringsError());
  }
}

// saga watcher, looking for GET_STRINGS dispatch type and will call handleGetStrings
export default function* stringsData() {
  yield takeLatest(GET_STRINGS, handleGetStrings);
}

import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { addStringError, addStringSuccess } from './actions';
import { SEND_STRING } from './constants';

function addString(string) {
  return axios.post(`http://localhost:3000/api/`, { newString: string });
}

function* handleAddString(action) {
  try {
    const { string } = action;
    yield call(addString, string);
    yield put(addStringSuccess());
  } catch (err) {
    yield put(addStringError());
  }
}

export default function* watchStringAddition() {
  yield takeLatest(SEND_STRING, handleAddString);
}

import { put } from 'redux-saga/effects';
import { CHANGE_START, CHANGE_END } from './actionTypes';

export function* intervalAutoRun() {
  yield put({ type: CHANGE_START });
  yield put({ type: CHANGE_END });
}

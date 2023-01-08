import { all } from 'redux-saga/effects';
import commonSaga from './sagas/commonSaga';
import homeSaga from './sagas/homeSaga';

export default function* rootSaga() {
  yield all([commonSaga(), homeSaga()]);
}

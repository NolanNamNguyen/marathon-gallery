import { all, takeEvery, put } from 'redux-saga/effects';

import {
  getSearchOption,
  getSearchOptionSuccess,
  getSearchOptionFailed,
  getImages,
  getImagesSuccess,
  getImagesFailed,
} from '../slices/homeSlice';
import Api from '../../config/api';
import { GET_IMAGES, SEARCH_IMAGES } from '@constant/endpoint';

function* handleSearch(params) {
  try {
    const response = yield Api.get(SEARCH_IMAGES, { params });
    yield put(getSearchOptionSuccess(response.data));
  } catch (error) {
    yield put(getSearchOptionFailed(error.response.data));
  }
}

function* handleGetImages({ payload }) {
  try {
    const response = yield Api.get(GET_IMAGES, { payload });
    yield put(getImagesSuccess(response.data));
  } catch (error) {
    yield put(getImagesFailed(error.response.data));
  }
}

function* homeSaga() {
  yield all([
    takeEvery(getSearchOption.type, handleSearch),
    takeEvery(getImages.type, handleGetImages),
  ]);
}

export default homeSaga;

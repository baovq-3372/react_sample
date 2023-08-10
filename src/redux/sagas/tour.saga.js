import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {getListTourSuccess, getDetailTourSuccess} from '../actions';
import {GET_TOUR_FAIL, GET_TOUR, GET_DETAIL_TOUR_FAIL, GET_DETAIL_TOUR } from '../constants';
import {getTours, getDetailTour} from '../../apis/tourApi';

function* getTourSaga(action){
  try {
    const response = yield call(getTours, action.payload)
    yield put(getListTourSuccess(response.data));
  } catch (error) {
    yield put({type: GET_TOUR_FAIL, payload: error});
  }
}

function* getDetailTourSaga(action){
  try {
    const response = yield call(getDetailTour, action.payload)
    yield put(getDetailTourSuccess(response.data));
  } catch (error) {
    yield put({type: GET_DETAIL_TOUR_FAIL, payload: error});
  }
}

function* toursSaga() {
  yield takeEvery(GET_TOUR, getTourSaga);
  yield takeLatest(GET_DETAIL_TOUR, getDetailTourSaga);
}

export default toursSaga;

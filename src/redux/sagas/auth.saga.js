import { call, put, takeLatest } from 'redux-saga/effects';
import {loginSuccess, getCurrentUserSuccess} from '../actions';
import {LOGIN_FAILED, LOGIN, GET_CURRENT_USER, GET_CURRENT_USER_FAILED } from '../constants';
import {login, getCurrentUser} from '../../apis/authApi';

function* loginSaga(action){
  try {
    const response = yield call(login, action.payload)
    if(response.data.code === 201) yield put(loginSuccess(response.data));
  } catch (error) {
    yield put({type: LOGIN_FAILED, payload: error});
  }
}

function* getCurrentUserSaga(action){
  try {
    const response = yield call(getCurrentUser)
    if(response.data.code === 201) yield put(getCurrentUserSuccess(response.data));
  } catch (error) {
    yield put({type: GET_CURRENT_USER_FAILED, payload: error});
  }
}

function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(GET_CURRENT_USER, getCurrentUserSaga);
}

export default authSaga;

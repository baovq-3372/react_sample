import {
  LOGIN, LOGIN_SUCCESS, SET_TOKEN,
  GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS
} from '../constants';

export function login(payload){
  return {
    type: LOGIN,
    payload
  };
};

export function loginSuccess(payload){
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

export function setToken(payload){
  return {
    type: SET_TOKEN,
    payload
  }
}

export function getCurrentUser(payload){
  return {
    type: GET_CURRENT_USER,
    payload
  }
}

export function getCurrentUserSuccess(payload){
  return {
    type: GET_CURRENT_USER_SUCCESS,
    payload
  }
}

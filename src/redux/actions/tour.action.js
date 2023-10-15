import {
  GET_TOUR, GET_TOUR_SUCCESS, GET_DETAIL_TOUR, GET_DETAIL_TOUR_SUCCESS
} from '../constants';

export function getTour(payload){
  return {
    type: GET_TOUR,
    payload
  };
};

export function getListTourSuccess(payload){
  return {
    type: GET_TOUR_SUCCESS,
    payload
  }
}

export function getDetailTour(payload){
  return {
    type: GET_DETAIL_TOUR,
    payload
  };
};

export function getDetailTourSuccess(payload){
  return {
    type: GET_DETAIL_TOUR_SUCCESS,
    payload
  };
};

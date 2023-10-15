import {
  GET_TOUR, GET_TOUR_SUCCESS, GET_TOUR_FAIL,
  GET_DETAIL_TOUR, GET_DETAIL_TOUR_SUCCESS, GET_DETAIL_TOUR_FAIL
} from "../constants"

const initialState = {
  categoryData: [],
  tourData: [],
  paginationData: {},
  detailTourData: {},
  isLoading: false,
  isError: false,
  errors: []
};

export default function tourReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOUR: {
      return {
        ...state,
        isLoading: true
      }
    }

    case GET_TOUR_SUCCESS:{
      return {
        ...state,
        categoryData: [...action.payload.categories],
        tourData: [...action.payload.tours],
        paginationData: {...action.payload.pagination},
        isLoading: false
      }
    }

    case GET_TOUR_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errors: action.payload
      }
    }

    case GET_DETAIL_TOUR: {
      return {
        ...state,
        isLoading: true
      }
    }

    case GET_DETAIL_TOUR_SUCCESS:{
      return {
        ...state,
        detailTourData: {...action.payload.tour},
        isLoading: false
      }
    }

    case GET_DETAIL_TOUR_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errors: action.payload
      }
    }

    default:
      return state;
  }
}

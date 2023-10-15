import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, SET_TOKEN,
  GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAILED
} from "../constants"
import Cookies from "js-cookie";

const initialState = {
  jwtToken: null,
  currentUser: {},
  isLoading: false,
  isError: false,
  errors: []
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case LOGIN_SUCCESS:{
      Cookies.set("token", action.payload.jwt_token, { expires: 2 })
      return {
        ...state,
        jwtToken: action.payload.jwt_token,
        currentUser: action.payload.user,
        isLoading: false,
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errors: action.payload
      }
    }

    case SET_TOKEN: {
      return {
        ...state,
        jwtToken: action.payload,
        isLoading: false,
      }
    }

    case GET_CURRENT_USER: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_CURRENT_USER_SUCCESS:{
      return {
        ...state,
        currentUser: {...action.payload.user},
        isLoading: false,
      };
    }

    case GET_CURRENT_USER_FAILED: {
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

import {combineReducers} from 'redux';
import tourReducer from "./tour.reducer";
import authReducer from "./auth.reducer";

export default combineReducers({
  tourReducer,
  authReducer,
});

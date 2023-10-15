import { fork } from "redux-saga/effects";
import tourSaga from "./tour.saga";
import authSaga from "./auth.saga";

export default function* mySaga() {
  yield fork(authSaga);
  yield fork(tourSaga);
}

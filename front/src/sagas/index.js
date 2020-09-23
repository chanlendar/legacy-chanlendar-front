import { all, fork } from "redux-saga/effects";
import axios from "axios";

import userSaga from "./user";
import topicSaga from "./topic";

axios.defaults.baseURL = "http://localhost:3065";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
	yield all([fork(userSaga), fork(topicSaga)]);
}

export const config = (accessToken) => ({
	headers: {
		Authorization: `bearer ${accessToken}`,
	},
});

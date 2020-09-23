import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

import { config } from "./index";
import {
	GET_TOPICS_REQUEST,
	GET_TOPICS_SUCCESS,
	GET_TOPICS_FAILURE,
	TRANSFORM_TASK,
} from "reducers/topic";

export default function* topicSaga() {
	yield all([fork(watchGetTopics)]);
}

function* watchGetTopics() {
	yield takeLatest(GET_TOPICS_REQUEST, getTopics);
}

function* getTopics(action) {
	try {
		const result = yield call(getTopicsAPI, action.data);
		yield put({ type: GET_TOPICS_SUCCESS, data: result.data.topics });
		yield put({ type: TRANSFORM_TASK });
	} catch (error) {
		console.log("키사마와...요와이");
		yield put({
			type: GET_TOPICS_FAILURE,
			data: error.response.data,
		});
	}
}

function getTopicsAPI(accessToken) {
	return axios.get("/topics", config(accessToken));
}

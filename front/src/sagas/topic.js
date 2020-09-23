import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

import { config } from "./index";
import {
	GET_TOPICS_REQUEST,
	GET_TOPICS_SUCCESS,
	GET_TOPICS_FAILURE,
	TRANSFORM_TASK,
	ADD_TOPIC_REQUEST,
	ADD_TOPIC_SUCCESS,
	ADD_TOPIC_FAILURE,
} from "reducers/topic";

export default function* topicSaga() {
	yield all([fork(watchGetTopics), fork(watchAddTopic)]);
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
		yield put({
			type: GET_TOPICS_FAILURE,
			data: error.response.data,
		});
	}
}

function getTopicsAPI(accessToken) {
	return axios.get("/topics", config(accessToken));
}

function* watchAddTopic() {
	yield takeLatest(ADD_TOPIC_REQUEST, addTopic);
}

function* addTopic(action) {
	try {
		const result = yield call(addTopicAPI, action.data);
		yield put({ type: ADD_TOPIC_SUCCESS, data: result.data });
	} catch (error) {
		yield put({
			type: ADD_TOPIC_FAILURE,
			data: error.response.data,
		});
	}
}

function addTopicAPI(data) {
	return axios.post("/topic", { title: data.title }, config(data.accessToken));
}

import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

import { config } from "./index";
import {
	GET_TOPICS_REQUEST,
	GET_TOPICS_SUCCESS,
	GET_TOPICS_FAILURE,
	TRANSFORM_TASKS,
	ADD_TOPIC_REQUEST,
	ADD_TOPIC_SUCCESS,
	ADD_TOPIC_FAILURE,
	CLOSE_TOPIC_MODAL_EVENT,
	ADD_TASK_REQUEST,
	ADD_TASK_SUCCESS,
	ADD_TASK_FAILURE,
	CLOSE_TASK_MODAL_EVENT,
} from "reducers/topic";

export default function* topicSaga() {
	yield all([fork(watchGetTopics), fork(watchAddTopic), fork(watchAddTask)]);
}

function* watchGetTopics() {
	yield takeLatest(GET_TOPICS_REQUEST, getTopics);
}

function* getTopics(action) {
	try {
		const result = yield call(getTopicsAPI, action.data);
		yield put({ type: GET_TOPICS_SUCCESS, data: result.data.topics });
		yield put({ type: TRANSFORM_TASKS });
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
		yield put({ type: CLOSE_TOPIC_MODAL_EVENT });
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

function* watchAddTask() {
	yield takeLatest(ADD_TASK_REQUEST, addTask);
}

function* addTask(action) {
	try {
		const result = yield call(addTaskAPI, action.data);
		yield put({ type: ADD_TASK_SUCCESS, data: result.data });
		yield put({ type: CLOSE_TASK_MODAL_EVENT });
	} catch (error) {
		yield put({
			type: ADD_TASK_FAILURE,
			data: error.response.data,
		});
	}
}

function addTaskAPI(data) {
	return axios.post(
		"/task",
		{ title: data.title, topicId: data.topicId, taskDate: data.day },
		config(data.accessToken),
	);
}

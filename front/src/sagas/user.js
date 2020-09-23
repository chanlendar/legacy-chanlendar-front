import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
	SIGN_UP_USER_REQUEST,
	SIGN_UP_USER_SUCCESS,
	SIGN_UP_USER_FAILURE,
	LOG_IN_USER_REQUEST,
	LOG_IN_USER_SUCCESS,
	LOG_IN_USER_FAILURE,
} from "../reducers/user";

export default function* userSaga() {
	yield all([fork(watchSignUp), fork(watchLogIn)]);
}

function* watchSignUp() {
	yield takeLatest(SIGN_UP_USER_REQUEST, signUp);
}

function* signUp(action) {
	try {
		yield call(signUpAPI, action.data);
		yield put({ type: SIGN_UP_USER_SUCCESS });
	} catch (error) {
		console.log("에러났슴");
		console.log(error);
		yield put({
			type: SIGN_UP_USER_FAILURE,
			data: error.response.data,
		});
	}
}

function signUpAPI(data) {
	return axios.post("/user", data);
}

function* watchLogIn() {
	yield takeLatest(LOG_IN_USER_REQUEST, logIn);
}

function* logIn(action) {
	try {
		const result = yield call(logInAPI, action.data);
		yield put({ type: LOG_IN_USER_SUCCESS, data: result.data });
	} catch (error) {
		console.log("에러났슴");
		console.log(error);
		yield put({
			type: LOG_IN_USER_FAILURE,
			data: error.response.data,
		});
	}
}

function logInAPI(data) {
	return axios.post("/user/login", data);
}

import produce from "immer";

export const SIGN_UP_USER_REQUEST = "SIGN_UP_USER_REQUEST";
export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_SUCCESS";
export const SIGN_UP_USER_FAILURE = "SIGN_UP_USER_FAILURE";
export const SIGN_UP_USER_MESSAGE_CLOSE = "SIGN_UP_USER_MESSAGE_CLOSE";
export const LOG_IN_USER_REQUEST = "LOG_IN_USER_REQUEST";
export const LOG_IN_USER_SUCCESS = "LOG_IN_USER_SUCCESS";
export const LOG_IN_USER_FAILURE = "LOG_IN_USER_FAILURE";
export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const LOG_IN_WINDOW_OPEN = "LOG_IN_WINDOW_OPEN";
export const SIGN_UP_WINDOW_OPEN = "SIGN_UP_WINDOW_OPEN";

const initialState = {
	profile: {},
	tokens: null,
	isLogInOpened: true,
	isAuthenticated: false,
	signUpLoading: false,
	signUpDone: false,
	signUpError: null,
	logInLoading: false,
	logInDone: false,
	logInError: null,
};

const reducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			default:
				break;
			// SIGN UP AN USER
			case SIGN_UP_USER_REQUEST:
				draft.signUpLoading = true;
				draft.signUpDone = false;
				draft.signUpError = null;
				break;
			case SIGN_UP_USER_SUCCESS:
				draft.signUpLoading = false;
				draft.signUpDone = true;
				break;
			case SIGN_UP_USER_FAILURE:
				draft.signUpLoading = false;
				draft.signUpError = action.data;
				break;
			case SIGN_UP_USER_MESSAGE_CLOSE:
				draft.signUpDone = false;
				break;
			// LOG IN AN USER
			case LOG_IN_USER_REQUEST:
				draft.logInLoading = true;
				draft.logInDone = false;
				draft.logInError = null;
				break;
			case LOG_IN_USER_SUCCESS:
				draft.logInLoading = false;
				draft.logInDone = true;
				draft.tokens = {
					accessToken: action.data.accessToken,
					refreshToken: action.data.refreshToken,
				};
				break;
			case LOG_IN_USER_FAILURE:
				draft.logInLoading = false;
				draft.logInError = action.data;
				break;
			case AUTHENTICATE_USER_SUCCESS:
				draft.isAuthenticated = true;
				break;
			case LOG_IN_WINDOW_OPEN:
				draft.isLogInOpened = true;
				break;
			case SIGN_UP_WINDOW_OPEN:
				draft.isLogInOpened = false;
				break;
		}
	});

export default reducer;

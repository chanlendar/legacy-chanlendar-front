import produce from "immer";

export const SIGN_UP_USER_REQUEST = "SIGN_UP_USER_REQUEST";
export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_SUCCESS";
export const SIGN_UP_USER_FAILURE = "SIGN_UP_USER_FAILURE";
export const SIGN_UP_USER_MESSAGE_CLOSE = "SIGN_UP_USER_MESSAGE_CLOSE";

const initialState = {
	profile: {
		name: "Chanhee Jang",
		email: "aksaksdm@gmail.com",
	},
	signUpLoading: false,
	signUpDone: false,
	signUpError: null,
	signUpMsg: false,
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
				draft.signUpMsg = true;
				break;
			case SIGN_UP_USER_FAILURE:
				draft.signUpLoading = false;
				draft.signUpError = action.data;
				break;
			case SIGN_UP_USER_MESSAGE_CLOSE:
				draft.signUpMsg = false;
				draft.signUpDone = false;
				break;
		}
	});

export default reducer;

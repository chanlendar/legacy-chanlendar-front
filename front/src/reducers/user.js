import produce from "immer";

export const SIGN_UP_USER_REQUEST = "SIGN_UP_USER_REQUEST";
export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_SUCCESS";
export const SIGN_UP_USER_FAILURE = "SIGN_UP_USER_FAILURE";

const initialState = {
	name: "Chanhee Jang",
};

const reducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			default:
				break;
		}
	});

export default reducer;

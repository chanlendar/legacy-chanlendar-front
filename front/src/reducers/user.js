import produce from "immer";

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

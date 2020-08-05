export const OPEN_MODAL_EVENT = "OPEN_MODAL_EVENT";
export const CLOSE_MODAL_EVENT = "CLOSE_MODAL_EVENT";
const initialState = {
	User: {
		nickname: "Ainte",
	},
	Topics: [
		{
			id: 1,
			title: "Main",
		},
		{
			id: 2,
			title: "chanlendar",
		},
		{
			id: 3,
			title: "godot community",
		},
		{
			id: 4,
			title: "devcord",
		},
		{
			id: 5,
			title: "Reactiflux",
		},
		{
			id: 6,
			title: "Axcent",
		},
	],
	isOpend: false,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
		case OPEN_MODAL_EVENT:
			console.log(`헤으응 : ${state.isOpend}`);
			return {
				...state,
				isOpend: true,
			};
		case CLOSE_MODAL_EVENT:
			return {
				...state,
				isOpend: false,
			};
	}
};

export default rootReducer;

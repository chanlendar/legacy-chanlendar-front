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
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default rootReducer;

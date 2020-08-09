import faker from "faker";

export const OPEN_MODAL_EVENT = "OPEN_MODAL_EVENT";
export const CLOSE_MODAL_EVENT = "CLOSE_MODAL_EVENT";
export const ADD_TOPIC_EVENT = "ADD_TOPIC_EVENT";

const createTaskDummyData = (num) => {
	const tasks = new Array(num).fill(null);
	const taskArray = tasks.map(() => {
		return {
			id: faker.random.number(),
			task: faker.hacker.phrase(),
			date: faker.date.between('2020-08-09', new Date()),
		};
	});
	return taskArray;
};

const initialState = {
	User: {
		nickname: "Ainte",
	},
	Topics: [
		{
			id: 2,
			title: "chanlendar",
			Tasks: [
				{
					id: 1,
					task: "need to display the information",
					date: "2020",
				},
			],
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
			return {
				...state,
				isOpend: true,
			};
		case CLOSE_MODAL_EVENT:
			return {
				...state,
				isOpend: false,
			};
		/**
		 * Add saga later to call CLOSE_MODAL_EVENT When this event executed succesfully
		 */
		case ADD_TOPIC_EVENT:
			return {
				...state,
				Topics: [
					...state.Topics,
					{ id: action.data, title: action.data },
				],
				isOpend: false,
			};
	}
};

export default rootReducer;

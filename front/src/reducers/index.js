import faker from "faker";

export const OPEN_MODAL_EVENT = "OPEN_MODAL_EVENT";
export const CLOSE_MODAL_EVENT = "CLOSE_MODAL_EVENT";
export const ADD_TOPIC_EVENT = "ADD_TOPIC_EVENT";
export const OPEN_TOPIC_EVENT = "OPEN_TOPIC_EVENT";

const createTopicDummyData = (num) => {
	const topics = new Array(num).fill(null);
	const topicArray = topics.map(() => {
		return {
			id: faker.random.number(),
			title: faker.name.firstName(),
			Tasks: createTaskDummyData(faker.random.number(8)),
		};
	});

	return topicArray;
};

const createTaskDummyData = (num) => {
	const tasks = new Array(num).fill(null);
	const taskArray = tasks.map(() => {
		return {
			id: faker.random.number(),
			task: faker.hacker.phrase(),
			date: new Date(),
		};
	});
	return taskArray;
};

const initialState = {
	User: {
		nickname: "Ainte",
	},
	Topics: createTopicDummyData(10),
	isOpend: false,
	currentTopic: {
		id: null,
		title: null,
		Tasks: [],
	},
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
					{
						id: action.data,
						title: action.data,
						Tasks: createTaskDummyData(faker.random.number(10)),
					},
				],
				isOpend: false,
			};
		/**
		 *
		 */
		case OPEN_TOPIC_EVENT:
			return {
				...state,
				currentTopic: action.data,
			};
	}
};

export default rootReducer;

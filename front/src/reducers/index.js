import faker from "faker";

export const ADD_TOPIC_EVENT = "ADD_TOPIC_EVENT";
export const ADD_TASK_EVENT = "ADD_TASK_EVENT";

export const CHANGE_TOPIC_EVENT = "CHANGE_TOPIC_EVENT";

export const OPEN_TASK_MODAL_EVENT = "OPEN_TASK_MODAL_EVENT";
export const CLOSE_TASK_MODAL_EVENT = "CLOSE_TASK_MODAL_EVENT";

export const OPEN_TOPIC_MODAL_EVENT = "OPEN_TOPIC_MODAL_EVENT";
export const CLOSE_TOPIC_MODAL_EVENT = "CLOSE_TOPIC_MODAL_EVENT";

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
	currentTopic: "",
	isTopicModalOpend: false,
	isTaskModalOpend: false,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
		case OPEN_TOPIC_MODAL_EVENT:
			return {
				...state,
				isTopicModalOpend: true,
			};
		case CLOSE_TOPIC_MODAL_EVENT:
			return {
				...state,
				isTopicModalOpend: false,
			};
		/**
		 * Add saga later to call CLOSE_TOPIC_MODAL_EVENT When this event executed succesfully
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
				isTopicModalOpend: false,
			};
		case CHANGE_TOPIC_EVENT:
			return {
				...state,
				currentTopic: action.data,
			};

		case OPEN_TASK_MODAL_EVENT:
			return {
				...state,
				isTaskModalOpend: true,
			};
		case CLOSE_TASK_MODAL_EVENT:
			return {
				...state,
				isTaskModalOpend: false,
			};

		case ADD_TASK_EVENT:
			const topic = action.data.topic;
			const newTopic = {
				...topic,
				Tasks: [
					...topic.Tasks,
					{
						id: faker.random.number(),
						task: action.data.inputA,
						date: new Date(),
					},
				],
			};

			const newTopics = state.Topics.map((v) => {
				if (v.title === topic.title) {
					return newTopic;
				}
				return v;
			});

			const newState = {
				...state,
				isTaskModalOpend: false,
				Topics: newTopics,
			};

			return newState;
	}
};

export default rootReducer;

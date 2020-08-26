import produce from "immer";
import faker from "faker";
import moment from "moment";

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
			date: moment(),
			isFinished: false,
		};
	});
	return taskArray;
};

const getMoment = () => {
	return moment();
};

const initialState = {
	Topics: createTopicDummyData(10),
	currentTopic: {
		id: 0,
		title: '',
		Tasks: [],
	},
	isTopicModalOpend: false,
	isTaskModalOpend: false,
	date: getMoment(),
	day: getMoment(),
};

export const ADD_TOPIC_EVENT = "ADD_TOPIC_EVENT";
export const CHANGE_TOPIC_EVENT = "CHANGE_TOPIC_EVENT";

export const ADD_TASK_EVENT = "ADD_TASK_EVENT";
export const FINISH_TASK_EVENT = "FINISH_TASK_EVENT";
export const NOT_FINISH_TASK_EVENT = "NOT_FINISH_TASK_EVENT";

export const OPEN_TASK_MODAL_EVENT = "OPEN_TASK_MODAL_EVENT";
export const CLOSE_TASK_MODAL_EVENT = "CLOSE_TASK_MODAL_EVENT";
export const OPEN_TOPIC_MODAL_EVENT = "OPEN_TOPIC_MODAL_EVENT";
export const CLOSE_TOPIC_MODAL_EVENT = "CLOSE_TOPIC_MODAL_EVENT";

export const ADD_MONTH_EVENT = "ADD_MONTH_EVENT";
export const SUBTRACT_MONTH_EVENT = "SUBTRACT_MONTH_EVENT";
export const CHANGE_DAY_EVENT = "CHANGE_DAY_EVENT";

const reducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			// TOPIC EVENTS ***START***
			/**
			 * Add saga later to call CLOSE_TOPIC_MODAL_EVENT
			 * When this event executed succesfully
			 */
			case ADD_TOPIC_EVENT:
				const idx = draft.Topics.push({
					id: faker.random.number(),
					title: action.data,
					Tasks: createTaskDummyData(faker.random.number(5)),
				});
				// CLOSE_TOPIC_MODAL_EVENT
				draft.isTopicModalOpend = false;
				// CHANGE_TOPIC_EVENT
				draft.currentTopic = draft.Topics[idx - 1];
				break;
			case CHANGE_TOPIC_EVENT:
				draft.currentTopic = action.data;
				break;
			// TASK EVENTS ***START***
			case ADD_TASK_EVENT: {
				// action.data => { inputA, topicId }
				const topic = draft.Topics.find((t) => t.id === action.data.topicId);
				topic.Tasks.push({
					id: faker.random.number(),
					task: action.data.inputA,
					// Date Picker로 바꿔도 됨
					date: action.data.day.clone(),
					isFinished: false,
				});
				draft.currentTopic = topic;
				draft.isTaskModalOpend = false;
				break;
			}
			// 완료를 하려는 의도와 취소를 하려는 의도는 엄연히 다른 것이기에 구분
			case FINISH_TASK_EVENT: {
				const topic = draft.Topics.find((t) => t.id === action.data.topicId);
				topic.Tasks.find((t) => t.id === action.data.taskId).isFinished = true;
				draft.currentTopic = topic;
				break;
			}
			case NOT_FINISH_TASK_EVENT: {
				const topic = draft.Topics.find((t) => t.id === action.data.topicId);
				topic.Tasks.find((t) => t.id === action.data.taskId).isFinished = false;
				draft.currentTopic = topic;
				break;
			}
			// MODAL EVENTS
			case OPEN_TOPIC_MODAL_EVENT:
				draft.isTopicModalOpend = true;
				break;
			case CLOSE_TOPIC_MODAL_EVENT:
				draft.isTopicModalOpend = false;
				break;
			case OPEN_TASK_MODAL_EVENT:
				draft.isTaskModalOpend = true;
				break;
			case CLOSE_TASK_MODAL_EVENT:
				draft.isTaskModalOpend = false;
				break;
			// MONTH EVENTS
			case ADD_MONTH_EVENT:
				draft.date = draft.date.clone().add(1, "M");
				break;
			case SUBTRACT_MONTH_EVENT:
				draft.date = draft.date.clone().subtract(1, "M");
				break;
			case CHANGE_DAY_EVENT:
				draft.day = draft.date.clone().set("D", action.data);
				break;
			default:
				break;
		}
	});

export default reducer;

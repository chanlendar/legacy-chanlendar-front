import produce from "immer";
import faker from "faker";
import moment from "moment";

const getMoment = () => {
	return moment();
};

const initialState = {
	Topics: [],
	currentTopic: {
		id: 0,
		title: "",
		Tasks: [],
	},
	isTopicModalOpend: false,
	isTaskModalOpend: false,
	date: getMoment(),
	day: getMoment(),
	getTopicsLoading: false,
	getTopicsDone: false,
	getTopicsError: null,
	addTopicLoading: false,
	addTopicDone: false,
	addTopicError: null,
};

export const ADD_TOPIC_REQUEST = "ADD_TOPIC_REQUEST";
export const ADD_TOPIC_SUCCESS = "ADD_TOPIC_SUCCESS";
export const ADD_TOPIC_FAILURE = "ADD_TOPIC_FAILURE";

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

export const GET_TOPICS_REQUEST = "GET_TOPICS_REQUEST";
export const GET_TOPICS_SUCCESS = "GET_TOPICS_SUCCESS";
export const GET_TOPICS_FAILURE = "GET_TOPICS_FAILURE";
export const TRANSFORM_TASK = "TRANSFORM_TASK";

const reducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			// TOPIC EVENTS ***START***
			/**
			 * Add saga later to call CLOSE_TOPIC_MODAL_EVENT
			 * Whenever this event executed succesfully
			 */
			case ADD_TOPIC_REQUEST:
				draft.addTopicLoading = true;
				draft.addTopicDone = false;
				draft.addTopicError = null;
				break;
			case ADD_TOPIC_SUCCESS:
				const idx = draft.Topics.push(action.data);
				// CHANGE_TOPIC_EVENT
				draft.currentTopic = draft.Topics[idx - 1];

				draft.addTopicLoading = false;
				draft.addTopicDone = true;
				// CLOSE_TOPIC_MODAL_EVENT -> move this event to saga.
				draft.isTopicModalOpend = false;
				break;
			case ADD_TOPIC_FAILURE:
				draft.addTopicLoading = false;
				draft.addTopicError = action.data;
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
			// GET TOPICS
			case GET_TOPICS_REQUEST:
				draft.getTopicsLoading = true;
				draft.getTopicsDone = false;
				draft.getTopicsError = null;
				break;
			case GET_TOPICS_SUCCESS:
				draft.getTopicsLoading = false;
				draft.getTopicsDone = true;
				draft.Topics = action.data;
				break;
			case GET_TOPICS_FAILURE:
				draft.getTopicsLoading = false;
				draft.getTopicsError = action.data;
				break;
			case TRANSFORM_TASK:
				draft.Topics = draft.Topics.map((v) => {
					v.Tasks = v.Tasks.map((t) => {
						return { ...t, taskDate: moment(t.taskDate) };
					});
					return v;
				});
				break;
			default:
				break;
		}
	});

export default reducer;

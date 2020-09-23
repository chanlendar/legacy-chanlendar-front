/**
 * Need to remake the architecture if I need to make a [weekly, monthly]
 * 2020/08/09
 */
import React from "react";
import { Container, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import { useInput, useMultipleEvents } from "hooks";
import { useContainerStyles } from "styles/content";
import {
	OPEN_TASK_MODAL_EVENT,
	CLOSE_TASK_MODAL_EVENT,
	ADD_TASK_REQUEST,
} from "reducers/topic";
import CalendarMode from "./CalendarMode";
import ContentModal from "./ContentModal";

function Content() {
	const containerStyles = useContainerStyles();
	const { currentTopic, isTaskModalOpend } = useSelector((state) => state.topic);
	const [cookies] = useCookies();

	const isTopicExisted = !!currentTopic.title;
	// Date Picker로 바꿔도 됨
	const day = useSelector((state) => state.topic.day);

	const [title, onTitleChange, setTitle] = useInput("");
	const [onOpenClick, onCloseClick] = useMultipleEvents(
		OPEN_TASK_MODAL_EVENT,
		CLOSE_TASK_MODAL_EVENT,
	);

	const dispatch = useDispatch();
	const onCreateClick = (e) => {
		dispatch({
			type: ADD_TASK_REQUEST,
			data: {
				title,
				topicId: currentTopic.id,
				day,
				accessToken: cookies.accessToken,
			},
		});
		setTitle("");
	};

	return (
		<div className={containerStyles.root}>
			<Container>
				<Button
					style={{ marginTop: "44px" }}
					variant="outlined"
					onClick={onOpenClick}
					disabled={!isTopicExisted}
				>
					생성
				</Button>
				<CalendarMode topic={currentTopic} />
			</Container>
			<ContentModal
				isOpend={isTaskModalOpend}
				onCreateClick={onCreateClick}
				onCloseClick={onCloseClick}
				onInputChange={onTitleChange}
			/>
		</div>
	);
}

export default React.memo(Content);

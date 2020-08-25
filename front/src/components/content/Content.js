/**
 * Need to remake the architecture if I need to make a [task]
 * 2020/08/09
 */
import React from "react";
import { Container, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { useInput, useOpenAndCloseEvent } from "../../hooks";
import { useContainerStyles } from "../../styles";
import { OPEN_TASK_MODAL_EVENT, CLOSE_TASK_MODAL_EVENT, ADD_TASK_EVENT } from "../../reducers/topic";
import CalendarMode from "./CalendarMode";
import ContentModal from "./ContentModal";

function Content() {
	const containerStyles = useContainerStyles();
	const { currentTopic, isTaskModalOpend } = useSelector((state) => state.topic);

	const [inputA, onInputAChange] = useInput("");
	const [onOpenClick, onCloseClick] = useOpenAndCloseEvent(OPEN_TASK_MODAL_EVENT, CLOSE_TASK_MODAL_EVENT);

	const dispatch = useDispatch();
	const onCreateClick = (e) => {
		dispatch({ type: ADD_TASK_EVENT, data: { inputA, topicId: currentTopic.id } });
	};

	return (
		<div className={containerStyles.root}>
			<Container>
				<Button style={{ marginTop: "44px" }} variant="outlined" onClick={onOpenClick}>
					생성
				</Button>
				<CalendarMode topic={currentTopic} />
			</Container>
			<ContentModal
				isOpend={isTaskModalOpend}
				onCreateClick={onCreateClick}
				onCloseClick={onCloseClick}
				onInputChange={onInputAChange}
			/>
		</div>
	);
}

export default Content;

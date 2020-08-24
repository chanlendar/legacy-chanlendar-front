/**
 * Need to remake the architecture if I need to make a [task]
 * 2020/08/09
 */
import React, { useState } from "react";
import { Container, Button, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { useContainerStyles, useModalStyles } from "../../styles";
import {
	OPEN_TASK_MODAL_EVENT,
	CLOSE_TASK_MODAL_EVENT,
	ADD_TASK_EVENT,
} from "../../reducers";
import CalendarMode from "./CalendarMode";
import CustomModal from "../CustomModal";

function Content() {
	const containerStyles = useContainerStyles();
	const modalStyles = useModalStyles();
	const { currentTopic, isTaskModalOpend, Topics } = useSelector(
		(state) => state,
	);

	const topic = Topics.find((v) => v.title === currentTopic);

	const [inputA, setInputA] = useState("");
	const dispatch = useDispatch();

	const onClick = (e) => {
		dispatch({ type: OPEN_TASK_MODAL_EVENT });
	};

	// MODAL INPUT EVENT
	const onChange = (e) => {
		setInputA(e.target.value);
	};

	// MODAL OPEN/CLOSE EVENT
	const onCreateClick = (e) => {
		dispatch({ type: ADD_TASK_EVENT, data: { inputA, topic } });
	};

	const onCloseClick = (e) => {
		dispatch({ type: CLOSE_TASK_MODAL_EVENT });
	};

	return (
		<div className={containerStyles.root}>
			<Container>
				<Button
					style={{ marginTop: "44px" }}
					variant="outlined"
					onClick={onClick}
				>
					생성
				</Button>
				<CalendarMode topic={topic} />
			</Container>
			<CustomModal
				title="태스크 만들기"
				description="무슨 일인가요?"
				isOpend={isTaskModalOpend}
				onCloseClick={onCloseClick}
			>
				<form>
					<TextField
						variant="filled"
						label="태스크 이름"
						autoFocus
						fullWidth
						onChange={onChange}
					/>
				</form>
				<div className={modalStyles.buttons}>
					<Button
						variant="outlined"
						onClick={onCloseClick}
						style={{ marginRight: "10px" }}
					>
						X
					</Button>
					<Button variant="contained" onClick={onCreateClick}>
						만들기
					</Button>
				</div>
			</CustomModal>
		</div>
	);
}

export default Content;

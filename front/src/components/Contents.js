/**
 * Need to remake the architecture if I need to make a [task]
 * 2020/08/09
 */
import React, { useState } from "react";
import {
	Container,
	Grid,
	Button,
	Modal,
	Typography,
	TextField,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { useContainerStyles, usePopupStyles } from "../styles";
import DailyList from "./DailyList";
import MonthlyList from "./MonthlyList";
import {
	OPEN_TOPIC_MODAL_EVENT,
	CLOSE_TOPIC_MODAL_EVENT,
	ADD_TASK_EVENT,
} from "../reducers";

function Contents() {
	const containerStyles = useContainerStyles();
	const popupStyles = usePopupStyles();
	const { currentTopic, isContentModalOpend, Topics } = useSelector(
		(state) => state,
	);

	const topic = Topics.find((v) => v.title === currentTopic);

	const [inputA, setInputA] = useState("");
	const dispatch = useDispatch();

	const onClick = (e) => {
		dispatch({ type: OPEN_TOPIC_MODAL_EVENT });
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
		dispatch({ type: CLOSE_TOPIC_MODAL_EVENT });
	};

	return (
		<div className={containerStyles.root}>
			<Container>
				<Button
					style={{ marginTop: "44px" }}
					variant="outlined"
					onClick={onClick}
				>
					하읏
				</Button>
				<Grid
					container
					direction="row"
					spacing={4}
					justify="center"
					alignItems="flex-start"
				>
					<Grid item xs={5} style={{ marginTop: "10px" }}>
						{topic && <DailyList topic={topic} />}
					</Grid>
					<Grid item xs style={{ marginTop: "10px" }}>
						<MonthlyList />
					</Grid>
				</Grid>
			</Container>
			{isContentModalOpend && (
				<Modal open={isContentModalOpend} onClose={onCloseClick}>
					<>
						<div className={popupStyles.popup}>
							<Typography>태스크 만들기</Typography>
							<Typography>무슨 일임?</Typography>
							<TextField
								variant="filled"
								label="태스크 이름"
								onChange={onChange}
							/>
						</div>
						<div>
							<Button variant="outlined">X</Button>
							<Button variant="contained" onClick={onCreateClick}>
								만들긔긔
							</Button>
						</div>
					</>
				</Modal>
			)}
		</div>
	);
}

export default Contents;

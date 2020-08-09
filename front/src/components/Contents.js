/**
 * Need to remake the architecture if I need to make a [task]
 * 2020/08/09
 */
import React from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { useContainerStyles } from "../styles";
import DailyList from "./DailyList";
import MonthlyList from "./MonthlyList";
import { OPEN_TOPIC_MODAL_EVENT, CLOSE_TOPIC_MODAL_EVENT } from "../reducers";

function Contents() {
	const containerStyles = useContainerStyles();
	const { currentTopic: topic, isContentModalOpend } = useSelector(
		(state) => state,
	);
	const dispatch = useDispatch();

	const onClick = (e) => {
		dispatch({ type: OPEN_TOPIC_MODAL_EVENT });
	};

	const onDivClick = (e) => {
		dispatch({ type: CLOSE_TOPIC_MODAL_EVENT });
	};

	return (
		<div className={containerStyles.root}>
			<Container fixed>
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
						<DailyList topic={topic} />
					</Grid>
					<Grid item xs style={{ marginTop: "10px" }}>
						<MonthlyList />
					</Grid>
				</Grid>
			</Container>
			{isContentModalOpend && (
				<div onClick={onDivClick}>저는 여기있어양!</div>
			)}
		</div>
	);
}

export default Contents;
